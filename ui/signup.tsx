export default function SignupForm() {
  return (
    <div className="mt-28">
      <h1>Sign Up</h1>
      <form method="post" action="/api/auth/callback/credentials">
        <label>
          email
          <input name="email" type="text" />
        </label>
        <label>
          Password
          <input name="password" type="password" />
        </label>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}