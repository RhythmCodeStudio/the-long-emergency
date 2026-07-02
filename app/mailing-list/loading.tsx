function SkeletonBox({ className }: { className?: string }) {
  return (
    <div className={`animate-pulse bg-gray-300/30 rounded ${className}`} />
  );
}

export default function MailingListSkeleton() {
  return (
    <div className="flex flex-col justify-center items-center w-full p-8">
      <div className="flex flex-col items-stretch w-full max-w-2xl p-4 lg:p-8 bg-black/50 border-border-default border-2 shadow-white shadow-lg rounded-4xl">
        {/* Heading skeleton */}
        <SkeletonBox className="h-8 w-48 sm:h-10 sm:w-64 mb-6 mx-auto" />
        {/* Email input skeleton */}
        <SkeletonBox className="h-10 w-full max-w-md mb-4 mx-auto" />
        {/* Button skeleton */}
        <SkeletonBox className="h-8 w-32 sm:h-10 sm:w-40 mx-auto mb-2" />
      </div>
    </div>
  );
}