import { getPage } from "../lib/data";

export default async function ContactPage() {
  const contactPageData = await getPage("contact");
  console.log(contactPageData);
  return (
    <div>
      <h2>{contactPageData.page_title}</h2>
    </div>
  );
}