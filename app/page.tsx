import Link from "next/link";

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-2xl font-bold text-center mt-32">
        The Long Emergency
      </h1>
      <div className="mt-24">
        <Image
          className="dark:drop-shadow-[0_0_0.3rem_#ffffff70]  w-full h-auto"
          src="/images/masks.jpg"
          alt="paper mache masks"
          width={796}
          height={816}
          priority
        />
      </div>
      <div className="mt-12 mb-48">
        <Link href="/login">Admin Login</Link>
      </div>
    </main>
  );
}
