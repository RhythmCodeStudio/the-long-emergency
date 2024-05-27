import { getPage } from "../lib/data";

import LoginForm from "../components/login-form";

export default async function LoginPage() {
  const loginPageData = await getPage("login");
  return (
    <div>
      <h2>{loginPageData.page_title}</h2>
      <div className="mt-24">
        <LoginForm />
      </div>
    </div>
  );
}
