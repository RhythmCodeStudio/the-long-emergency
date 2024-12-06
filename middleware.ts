import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import { NextResponse, NextRequest } from "next/server";
 
export default NextAuth(authConfig).auth;

// import { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  let cspHeader = "";
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
  const environment = process.env.NEXT_PUBLIC_ENV || process.env.NODE_ENV;
  const isDevelopment = environment === "development";
  const isPreview = environment === "preview";
  const isProduction = environment === "production";

  const developmentCspHeader = `
    default-src 'self';
    connect-src 'self' https://api.emailjs.com/ https://vercel.live wss://ws-us3.pusher.com
    https://api.iconify.design/
    ;
    script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com;
    style-src 'self' https://vercel.live 'unsafe-inline';
    img-src 'self' https://vercel.live https://vercel.com blob: data:;
    font-src 'self' https://vercel.live https://assets.vercel.com;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-src 'self' https://thelongemergency.bandcamp.com/ https://vercel.live;
    frame-ancestors 'none';
    upgrade-insecure-requests;
  `;

//   const developmentCspHeader = `

// `;

  const previewCspHeader = `
    default-src 'self';
    connect-src 'self' https://api.emailjs.com/ https://vercel.live
    wss://ws-us3.pusher.com
    https://api.iconify.design/
    ;
    script-src 'self' 'nonce-${nonce}' https://va.vercel-scripts.com https://vercel.live/;
    style-src 'self' 'unsafe-inline' https://vercel.live;
    img-src 'self' https://vercel.live https://vercel.com blob: data:;
    font-src 'self' https://vercel.live https://assets.vercel.com;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    frame-src 'self' https://thelongemergency.bandcamp.com/ https://vercel.live;
    upgrade-insecure-requests;
  `;

  const productionCspHeader = `
    default-src 'self';
    connect-src 'self' 
    https://api.emailjs.com/ 
    https://api.iconify.design/
    ;
    script-src 'self' 'nonce-${nonce}';
    style-src 'self' 'nonce-${nonce}' http://www.sitemaps.org/;
    img-src 'self';
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    frame-src 'self' https://thelongemergency.bandcamp.com/;
    upgrade-insecure-requests;
  `;

  if (isDevelopment) {
    cspHeader = developmentCspHeader;
  } else if (isPreview) {
    cspHeader = previewCspHeader;
  } else if (isProduction) {
    cspHeader = productionCspHeader;
  }

  // Replace newline characters and spaces
  const contentSecurityPolicyHeaderValue = cspHeader
    .replace(/\s{2,}/g, " ")
    .trim();

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set(
    "Content-Security-Policy",
    contentSecurityPolicyHeaderValue
  );

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  response.headers.set(
    "Content-Security-Policy",
    contentSecurityPolicyHeaderValue
  );

  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set("X-Content-Type-Options", "nosniff");

  return response;
}
 
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  // matcher: ['/login/:path*', '/admin/:path*'],
  matcher: "/:path*",
};