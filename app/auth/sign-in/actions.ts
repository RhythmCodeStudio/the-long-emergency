'use server';
import { auth } from '@/auth/server';
import { revalidatePath } from 'next/cache';

// CHANGED: Added type definition for consistent state management
type ActionState = 
  | { error: string; success?: undefined }
  | { success: true; error?: undefined }
  | null;

// CHANGED: Return success state instead of redirecting (let client handle redirect)
export async function signInWithEmail(
  _prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const { error } = await auth.signIn.email({
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  });
  
  // CHANGED: Enhanced error handling with user-friendly messages
  if (error) {
    let errorMessage = error.message || 'Failed to sign in. Try again';
    
    // CHANGED: Map generic errors to helpful messages
    if (errorMessage.includes('not found') || errorMessage.includes('invalid')) {
      errorMessage = 'Invalid email or password. Please try again.';
    } else if (errorMessage.includes('password')) {
      errorMessage = 'Invalid email or password. Please try again.';
    }
    
    return { error: errorMessage };
  }
  
  // CHANGED: Revalidate instead of redirect (client handles redirect via useEffect)
  revalidatePath("/", "layout");
  return { success: true };
}