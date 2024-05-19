import { getPage } from "../lib/data";

export default async function ContactPage() {
  const contactPageData = await getPage("contact");
  console.log(contactPageData);
  return (
    <div>
      <h1>{contactPageData.h1}</h1>
    </div>
  );
}