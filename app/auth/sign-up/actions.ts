"use server";
import { auth } from "@/auth/server";
import { revalidatePath } from "next/cache";

// CHANGED: Added constant for minimum password length (must match client-side)
const MIN_PASSWORD_LENGTH = 8;

type ActionState =
  | { error: string; success?: undefined }
  | { success: true; error?: undefined }
  | null;

export async function signUpWithEmail(
  _prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const email = formData.get("email") as string;
  // console.log("Sign up attempt for:", email);
  
  if (!email) {
    return { error: "Email address must be provided." };
  }

  // const allowedEmails = ["kevin@rhythmcodestudio.tech", "info@thelongemergency.com", "admin@thelongemergency.com"];
  // if (!allowedEmails.includes(email.trim().toLowerCase())) {
  //   return { error: "This email address is not allowed to sign up." };
  // }

  const allowedDomains = ["thelongemergency.com", "rhythmcodestudio.tech"];
  const emailDomain = email.split("@")[1];
  if (!allowedDomains.includes(emailDomain)) {
    return { error: "This email domain is not allowed to sign up." };
  }

  // CHANGED: Added server-side password validation as backup
  const password = formData.get("password") as string;
  if (!password || password.length < MIN_PASSWORD_LENGTH) {
    return { error: `Password must be at least ${MIN_PASSWORD_LENGTH} characters long.` };
  }

  const result = await auth.signUp.email({
    email,
    name: formData.get("name") as string,
    password,
  });
  
  // console.log("Auth signUp result:", result);

  // CHANGED: Enhanced error handling with user-friendly messages
  if (result.error) {
    let errorMessage = result.error.message || "Failed to create account";
    
    // CHANGED: Map generic errors to helpful messages
    if (errorMessage === "Password too short") {
      errorMessage = `Password too short. Passwords must be at least ${MIN_PASSWORD_LENGTH} characters.`;
    } else if (errorMessage.includes("already exists")) {
      errorMessage = "This email address is already registered. Please sign in instead.";
    } else if (errorMessage.includes("invalid")) {
      errorMessage = "Invalid email address. Please check and try again.";
    }
    
    return { error: errorMessage };
  }
  
  revalidatePath("/", "layout");
  return { success: true };
}