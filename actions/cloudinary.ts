"use server";
import { createHash } from "node:crypto";
import { auth } from "@/auth/server";
import { cloudinary } from "@/config/cloudinary-server";
import { neon } from "@neondatabase/serverless";

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

export async function removeCalendarEventImage(
  eventId: string | null,
  publicId: string,
) {
  const session = await auth.getSession();

  if (!session?.data?.user?.id) {
    throw new Error("Unauthorized");
  }

  if (!publicId.startsWith("the-long-emergency/events/")) {
    throw new Error("Missing or invalid event image public ID");
  }

  const result = await cloudinary.uploader.destroy(publicId, {
    resource_type: "image",
    invalidate: true,
  });

  if (result.result !== "ok" && result.result !== "not found") {
    throw new Error(`Cloudinary deletion failed: ${result.result}`);
  }

  if (eventId) {
    const sql = neon(process.env.NEON_DATABASE_URL!);

    await sql`
      UPDATE calendar_events
      SET image = NULL, image_public_id = NULL
      WHERE id = ${eventId}
        AND image_public_id = ${publicId}
    `;
  }
}