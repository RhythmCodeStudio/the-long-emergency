// import { NextResponse } from "next/server";
// import { auth } from "@/auth/server";

// export async function GET() {
//   const session = await auth.getSession();
//   return NextResponse.json({
//     isAuthenticated: Boolean(session?.data?.user?.id),
//   });
// }


import { NextResponse } from "next/server";
import { auth } from "@/auth/server";

export async function GET() {
try {
const session = await auth.getSession();
return NextResponse.json({
isAuthenticated: Boolean(session?.data?.user?.id),
});
} catch (error) {
// CHANGE: keep API contract stable when auth provider/network fails.
if (process.env.NODE_ENV !== "production") {
console.warn("Failed to read session:", error);
}

// CHANGE: treat failures as unauthenticated for client stability.
return NextResponse.json({
isAuthenticated: false,
});
}
}
