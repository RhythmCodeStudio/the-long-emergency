// "use client";
import { signOut } from '@/auth';
// import { UploadButton } from "../utils/uploadthing";
// import { Button } from "../../components/button";
import AdminNavLinks from "../../components/admin/admin-nav-links";
import { PowerIcon } from '@heroicons/react/24/outline';
// import SideNav from "../components/dashboard/sidenav";

export default function Admin() {
  return (
    <div className="text-white mt-28">
      <h1>Admin Dashboard</h1>
      <p>This is a protected page</p>
      {/* <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      /> */}
      {/* <SideNav /> */}
      <div className=" text-black flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <AdminNavLinks />
        {/* <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div> */}
        {/* <form
           action={async () => {
            'use server';
            await signOut();
          }}
        >
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className=" md:block">Sign Out</div>
          </button>
        </form> */}
      </div>
    </div>
    // </div>
  );
}