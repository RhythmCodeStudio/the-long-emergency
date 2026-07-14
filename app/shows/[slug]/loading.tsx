export default function Loading() {
  return (
    <section className="w-full flex-1 min-h-0 flex items-center justify-center">
      <div className="mx-auto w-full max-w-7xl p-4 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-300 border-t-gray-600" />
      </div>
    </section>
  );
}