"use client";

import { useActionState, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signUpWithEmail } from "@/app/auth/sign-up/actions";
import FormInput from "./form-input";

const MIN_PASSWORD_LENGTH = 8;

export default function SignUpForm() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [state, formAction, isPending] = useActionState(
    signUpWithEmail,
    null,
  );

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    setState: React.Dispatch<React.SetStateAction<string>>,
  ) => {
    setState(event.target.value);
  };

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    if (password.length < MIN_PASSWORD_LENGTH) {
      event.preventDefault();
      toast.error(
        `Password must be at least ${MIN_PASSWORD_LENGTH} characters`,
      );
      return;
    }

    if (password !== confirmPassword) {
      event.preventDefault();
      toast.error("Passwords do not match");
    }
  };

  useEffect(() => {
    if (state?.error) {
      toast.error(state.error);
    }
  }, [state?.error]);

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
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <form
        action={formAction}
        onSubmit={handleSubmit}
        className="flex w-full max-w-md flex-col items-center justify-center rounded-3xl border-2 border-slate-400 bg-black/50 p-6 shadow-md shadow-white">
        <div className="md:w-sm">
          <h2 className="text-center text-2xl font-bold">
            Create New Account
          </h2>
        </div>

        <FormInput
          inputType="input"
          label="Name"
          name="name"
          type="text"
          required
          placeholder="The Long Emergency"
          autoComplete="username"
          value={name}
          errorMessage=""
          disabled={isPending}
          setStateVariable={setName}
          handleChange={handleChange}
        />

        <FormInput
          inputType="input"
          label="Email address"
          name="email"
          type="email"
          required
          placeholder="enter your email address"
          autoComplete="email"
          value={email}
          errorMessage=""
          disabled={isPending}
          setStateVariable={setEmail}
          handleChange={handleChange}
        />

        <FormInput
          inputType="input"
          label={`Password (minimum ${MIN_PASSWORD_LENGTH} characters)`}
          name="password"
          type={showPassword ? "text" : "password"}
          required
          placeholder="enter a new password"
          autoComplete="new-password"
          value={password}
          errorMessage=""
          disabled={isPending}
          setStateVariable={setPassword}
          handleChange={handleChange}
          rightIcon={
            <button
              type="button"
              onClick={() => setShowPassword((visible) => !visible)}
              className="text-gray-400 transition hover:text-white"
              aria-label={showPassword ? "Hide password" : "Show password"}>
              {showPassword ? (
                <IoIosEyeOff className="h-5 w-5" />
              ) : (
                <IoIosEye className="h-5 w-5" />
              )}
            </button>
          }
        />

        <FormInput
          inputType="input"
          label="Confirm Password"
          name="confirmPassword"
          type={showConfirmPassword ? "text" : "password"}
          required
          placeholder="confirm your password"
          autoComplete="new-password"
          value={confirmPassword}
          errorMessage=""
          disabled={isPending}
          setStateVariable={setConfirmPassword}
          handleChange={handleChange}
          rightIcon={
            <button
              type="button"
              onClick={() => setShowConfirmPassword((visible) => !visible)}
              className="text-gray-400 transition hover:text-white"
              aria-label={
                showConfirmPassword ? "Hide password" : "Show password"
              }>
              {showConfirmPassword ? (
                <IoIosEyeOff className="h-5 w-5" />
              ) : (
                <IoIosEye className="h-5 w-5" />
              )}
            </button>
          }
        />

        <button
          type="submit"
          disabled={isPending}
          className="mt-2 flex w-xs justify-center rounded-full border-2 border-slate-400 px-3 py-1.5 text-sm/6 shadow-md shadow-white hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50 sm:w-sm">
          {isPending ? "Creating account..." : "Create Account"}
        </button>

        <p className="mt-4 w-full text-center text-sm">
          Already have an account?{" "}
          <Link
            href="/auth/sign-in"
            className="ml-1 font-medium text-customBlue hover:text-hoverBlue">
            Sign in
          </Link>
        </p>
      </form>
    </>
  );
}