import { getPage } from "../lib/data";

export default async function ContactPage() {
  const contactPageData = await getPage("contact");
  console.log(contactPageData);
  return (
    <div>
      {/* contactPageData.h1 needs to be pageData.page_title after re-seeding database */}
      <h2>{contactPageData.h1}</h2>
    </div>
  );
}