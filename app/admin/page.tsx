// "use client";

import { UploadButton } from "../utils/uploadthing";
import { Button } from "../components/button";
import SideNav from "../components/admin/sidenav";

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
      <SideNav />
      <Button>Sign Out</Button>
    </div>
  );
}