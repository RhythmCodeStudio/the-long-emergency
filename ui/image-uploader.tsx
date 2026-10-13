"use client";
// import from next
import Image from "next/image";
// import from cloudinary
import { CldUploadWidget } from "next-cloudinary";

interface ImageUploaderProps {
  image: string;
  setImage: (image: string) => void;
  imagePublicId: string;
  setImagePublicId: (publicId: string) => void;
  uploadingImage: boolean;
  setUploadingImage: (uploading: boolean) => void;
  imageUploadError: string;
  setImageUploadError: (error: string) => void;
  orientation: "landscape" | "portrait" | "square";
  width: number;
  height: number;
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({
  image,
  setImage,
  imagePublicId,
  setImagePublicId,
  uploadingImage,
  setUploadingImage,
  imageUploadError,
  setImageUploadError,
  orientation,
  width,
  height,
}) => {
  return (
    <div className="flex justify-center items-center">
      <div
        className="relative w-full max-w-80 overflow-hidden rounded-3xl border-2 border-slate-400 bg-gray-800/40 shadow-md shadow-white"
        style={{ aspectRatio: `${width} / ${height}` }}>
        {image ? (
          <Image
            src={image}
            alt="Image preview"
            fill
            sizes="320px"
            className="object-cover"
            unoptimized
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-gray-400">
            No image
          </div>
        )}
      </div>
      <CldUploadWidget
        signatureEndpoint="/api/cloudinary-signature"
        uploadPreset={
          process.env.NEXT_PUBLIC_CLOUDINARY_CALENDAR_EVENT_IMAGE_UPLOAD_PRESET
        }
        options={{
          folder: "the-long-emergency/events",
          clientAllowedFormats: ["jpg", "jpeg", "png", "webp"],
          maxFileSize: 10 * 1024 * 1024,
          multiple: false,
        }}
        onSuccess={(result) => {
          if (result.info && typeof result.info !== "string") {
            setImage(result.info.secure_url);
            setImagePublicId(result.info.public_id);
            setImageUploadError("");
          }
        }}>
        {({ open }) => (
          <button
            type="button"
            disabled={uploadingImage}
            onClick={
              image
                ? () => {
                    setImage("");
                    setImagePublicId("");
                  }
                : () => open()
            }>
            {image ? "Remove Image" : "Upload Image"}
          </button>
        )}
      </CldUploadWidget>
      {imageUploadError && (
        <p className="text-sm text-red-500">{imageUploadError}</p>
      )}
    </div>
  );
};
