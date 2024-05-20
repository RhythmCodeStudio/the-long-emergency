import { getPage } from "../lib/data";

import LoginForm from "../components/login-form";

export default async function LoginPage() {
  const loginPageData = await getPage("login");
  return (
    <div>
      {/* loginPageData.h1 needs to be loginPageData.page_title after re-seeding database */}
      <h2>{loginPageData.h1}</h2>
      <div className="mt-24">
        <LoginForm />
      </div>
    </div>
  );
}
