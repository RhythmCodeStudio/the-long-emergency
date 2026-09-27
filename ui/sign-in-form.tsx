"use client";

import { useActionState, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signInWithEmail } from "@/app/auth/sign-in/actions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
// import components
import FormInput from "./form-input";

export default function SignInForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, formAction, isPending] = useActionState(signInWithEmail, null);
  const [showPassword, setShowPassword] = useState(false);

  // Show error toast when there's an error
  useEffect(() => {
    if (state?.error) {
      toast.error(state.error);
    }
  }, [state?.error]);

  useEffect(() => {
    window.dispatchEvent(new Event("auth-changed"));
    router.refresh();
    router.push("/admin");
  }, [state?.success, router]);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <form
        action={formAction}
        className="flex flex-col items-center justify-center bg-black/50 border-slate-400 border-2 shadow-white shadow-md rounded-3xl p-4 w-full max-w-md ">
        <div className="w-xs sm:w-sm">
          <h2 className="text-center text-2xl ">Sign In</h2>
        </div>
        {/* <div className="flex flex-col gap-1.5 w-xs sm:w-sm">
          <label htmlFor="email" className=" block text-sm text-gray-100">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="enter your email address"
            disabled={isPending}
            className="shadow-md shadow-black border-2 border-slate-400 p-2 w-full text-black placeholder-neutral-800 rounded-3xl bg-neutral-100 tracking-wide h-10 caret-[#ff7f00]"
          />
        </div> */}

        <FormInput
          inputType="input"
          label="Email address"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="enter your email address"
          value={email}
          errorMessage=""
          disabled={isPending}
          setStateVariable={setEmail}
          handleChange={(event, setState) => {
            setState(event.target.value);
          }}
        />

        <FormInput
          inputType="input"
          label="Password"
          name="password"
          type={showPassword ? "text" : "password"}
          autoComplete="current-password"
          required
          placeholder="enter your password"
          value={password}
          errorMessage=""
          disabled={isPending}
          setStateVariable={setPassword}
          handleChange={(event, setState) => {
            setState(event.target.value);
          }}
        />

        {/* <div className="flex flex-col gap-1.5 w-xs sm:w-sm">
          <label htmlFor="password" className=" block text-sm text-gray-100">
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              required
              autoComplete="current-password"
              placeholder="enter your password"
              disabled={isPending}
              className="shadow-md shadow-black border-2 border-slate-400 p-2 w-full text-black placeholder-neutral-800 rounded-3xl bg-neutral-100 tracking-wide h-10 caret-[#ff7f00]"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition"
              aria-label={showPassword ? "Hide password" : "Show password"}>
              {showPassword ? (
                <IoIosEyeOff className="w-5 h-5" />
              ) : (
                <IoIosEye className="w-5 h-5" />
              )}
            </button>
          </div>
        </div> */}
        <button
          type="submit"
          disabled={isPending}
          className="flex w-xs sm:w-sm mt-2 justify-center  px-3 py-1.5 text-sm/6 disabled:opacity-50 disabled:cursor-not-allowed border-2 border-slate-400 shadow-white shadow-md hover:shadow-lg rounded-full">
          <span className="">{isPending ? "Signing in..." : "Sign in"}</span>
        </button>
        <p className="w-full text-center text-sm mt-4">
          Don't have an account?
          <Link
            href="/auth/sign-up"
            className="font-medium text-customBlue hover:text-hoverBlue ml-1">
            Sign up
          </Link>
        </p>
      </form>
    </>
  );
}
