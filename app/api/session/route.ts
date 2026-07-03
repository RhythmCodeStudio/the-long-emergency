import { NextResponse } from "next/server";
import { auth } from "@/auth/server";

export async function GET() {
  const session = await auth.getSession();
  return NextResponse.json({
    isAuthenticated: Boolean(session?.data?.user?.id),
  });
}
