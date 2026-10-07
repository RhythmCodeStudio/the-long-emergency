"use server";
import { createHash } from "node:crypto";
import { auth } from "@/auth/server";

export async function getCloudinaryUploadSignature() {
  const session = await auth.getSession();
  if (!session?.data?.user?.id) {
    throw new Error("Unauthorized");
  }

  const timestamp = Math.round(Date.now() / 1000);
  const folder = "the-long-emergency/events";
  const allowedFormats = "jpg,jpeg,png,webp";

  // Cloudinary requires the signed params sorted alphabetically, then the secret appended.
  const paramsToSign = `allowed_formats=${allowedFormats}&folder=${folder}&timestamp=${timestamp}`;
  const signature = createHash("sha1")
    .update(paramsToSign + process.env.CLOUDINARY_API_SECRET)
    .digest("hex");

  return {
    signature,
    timestamp,
    folder,
    allowedFormats,
    apiKey: process.env.CLOUDINARY_API_KEY!,
    cloudName: process.env.CLOUDINARY_CLOUD_NAME!,
  };
} 