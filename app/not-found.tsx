export default async function NotFound() {

  return (
    <div className="p-8 text-center flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">Page Not Found</h1>
      <p className="m-4">The page you are looking for does not exist.</p>
      {/* <Link href="/">
        <div className="flex flex-col justify-center items-center">
          <Image
            className="w-2/5 h-auto max-w-180"
            src="/images/logos/mark-only-full.png"
            width={796}
            height={816}
            alt="Rhythm Code Studio logo"
            priority
          />
        </div>
      </Link> */}
    </div>
  );
}