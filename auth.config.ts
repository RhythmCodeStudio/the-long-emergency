import type { NextAuthConfig } from 'next-auth';
import { redirect } from 'next/navigation';

 
export const authConfig = {
  pages: {
    signIn: '/',
  },
  callbacks: {
    redirect: async ({ url, baseUrl }) => {
      return baseUrl + "/admin";
    },
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnAdmin = nextUrl.pathname.startsWith('/admin');
      if (isOnAdmin) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to home page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/admin', nextUrl));
      }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;