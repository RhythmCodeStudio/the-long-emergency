// "use client";
// import { useSearchParams } from "next/navigation";
// // import components
// import MailingListForm from "@/ui/mailing-list-form";

// export default function MailingListPage() {
//   const searchParams = useSearchParams();
//   // const mode = searchParams.get("mode");
//   const modeParam = searchParams.get("mode");
//   // Default to sign-up when mode is missing
//   const mode = modeParam === "remove" ? "remove" : "sign-up";
//   return (
//     <div className="flex flex-col justify-center items-center w-full p-8">
//       <MailingListForm mode={mode} />
//     </div>
//   );
// }


import MailingListForm from "@/ui/mailing-list-form";

type PageProps = {
  searchParams: Promise<{ mode?: string }>;
};

export default async function MailingListPage({ searchParams }: PageProps) {
  const { mode: modeParam } = await searchParams;
  const mode = modeParam === "remove" ? "remove" : "sign-up";

  return (
    <div className="flex flex-col justify-center items-center w-full p-8">
      <MailingListForm mode={mode} />
    </div>
  );
}
