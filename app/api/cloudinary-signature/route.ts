import { NextResponse } from "next/server";
import { auth } from "@/auth/server";
import { cloudinary } from "@/config/cloudinary-server";

const eventFolder = "the-long-emergency/events";

export async function POST(request: Request) {
  const session = await auth.getSession();

  if (!session?.data?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { paramsToSign } = await request.json();

  if (
    !paramsToSign ||
    typeof paramsToSign !== "object" ||
    (paramsToSign.folder && paramsToSign.folder !== eventFolder)
  ) {
    return NextResponse.json({ error: "Invalid upload parameters" }, { status: 400 });
  }

  const signature = cloudinary.utils.api_sign_request(
    paramsToSign,
    process.env.CLOUDINARY_API_SECRET!,
  );

  return NextResponse.json({ signature });
}