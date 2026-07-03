"use client";
import { useActionState, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signUpWithEmail } from "@/app/auth/sign-up/actions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // ADD THIS LINE
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { ToastContainer } from "react-toastify";

const MIN_PASSWORD_LENGTH = 8;

export default function SignUpForm() {
  const router = useRouter();
  const [state, formAction, isPending] = useActionState(signUpWithEmail, null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget);
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    if (password.length < MIN_PASSWORD_LENGTH) {
      e.preventDefault();
      toast.error(
        `Password must be at least ${MIN_PASSWORD_LENGTH} characters`,
      );
      return;
    }

    if (password !== confirmPassword) {
      e.preventDefault();
      toast.error("Passwords do not match");
      return;
    }
  };

  useEffect(() => {
    if (state?.error) {
      toast.error(state.error);
    }
  }, [state?.error]);

  // useEffect(() => {
  //   if (state?.success) {
  //     toast.success("Account created!");
  //     const timer = setTimeout(() => {
  //       router.refresh();
  //       router.push("/admin");
  //     }, 1200);
  //     return () => clearTimeout(timer);
  //   }
  // }, [state?.success, router]);

  useEffect(() => {
    if (state?.success) {
      toast.success("Account created!");
      window.dispatchEvent(new Event("auth-changed"));
      router.refresh();
      router.push("/admin");
    }
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
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 items-center justify-center bg-black/50 border-border-default border-2 shadow-white shadow-lg rounded-4xl p-6 w-full max-w-md">
        <div className="md:w-sm">
          <h2 className="text-center text-2xl font-bold ">
            Create New Account
          </h2>
        </div>

        <div className="flex flex-col gap-1.5 w-xs sm:w-sm">
          <label htmlFor="name" className="block text-sm font-medium ">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="The Long Emergency"
            autoComplete="username"
            disabled={isPending}
            className="shadow-md shadow-black border-2 border-border-default p-2 w-full text-black placeholder-neutral-800 rounded-4xl bg-neutral-100 tracking-wide h-10 caret-[#ff7f00]"
          />
        </div>

        <div className="flex flex-col gap-1.5 w-xs sm:w-sm">
          <label htmlFor="email" className="block text-sm font-medium ">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="enter your email address"
            autoComplete="email"
            disabled={isPending}
            className="shadow-md shadow-black border-2 border-border-default p-2 w-full text-black placeholder-neutral-800 rounded-4xl bg-neutral-100 tracking-wide h-10 caret-[#ff7f00]"
          />
        </div>

        <div className="flex flex-col gap-1.5 w-xs sm:w-sm">
          <label htmlFor="password" className="block text-sm font-medium ">
            Password
            <span className="text-xs ml-2">
              (minimum {MIN_PASSWORD_LENGTH} characters)
            </span>
          </label>
          <div className="relative">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              required
              placeholder="enter a new password"
              autoComplete="new-password"
              disabled={isPending}
              className="shadow-md shadow-black border-2 border-border-default p-2 w-full text-black placeholder-neutral-800 rounded-4xl bg-neutral-100 tracking-wide h-10 caret-[#ff7f00]"
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
        </div>

        <div className="flex flex-col gap-1.5 w-xs sm:w-sm">
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium ">
            Confirm Password
          </label>
          <div className="relative">
            <input
              id="confirmPassword"
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              required
              placeholder="confirm your password"
              autoComplete="new-password"
              disabled={isPending}
              className="shadow-md shadow-black border-2 border-border-default p-2 w-full text-black placeholder-neutral-800 rounded-4xl bg-neutral-100 tracking-wide h-10 caret-[#ff7f00]"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition"
              aria-label={
                showConfirmPassword ? "Hide password" : "Show password"
              }>
              {showConfirmPassword ? (
                <IoIosEyeOff className="w-5 h-5" />
              ) : (
                <IoIosEye className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="flex w-xs sm:w-sm mt-2 justify-center  px-3 py-1.5 text-sm/6 disabled:opacity-50 disabled:cursor-not-allowed border-2 border-border-default shadow-white shadow-md hover:shadow-lg rounded-full">
          <span className="">
            {isPending ? "Creating account..." : "Create Account"}
          </span>
        </button>

        <p className="w-full text-center text-sm ">
          Already have an account?{" "}
          <Link
            href="/auth/sign-in"
            className="font-medium text-blue-600 hover:text-blue-500 ml-1">
            Sign in
          </Link>
        </p>
      </form>
    </>
  );
}
