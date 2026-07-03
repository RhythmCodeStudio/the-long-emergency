// define metadata for the blog posts layout
export const metadata = {
  title: {
    template: "Blog | The Long Emergency | %s",
    default: "Blog | The Long Emergency",
  },
  description:
    "",
  metadataBase: new URL("https://www.thelongemergency.com/blog/posts/"),
  alternates: {
    canonical: "/",
  },
};

export default async function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      {children}
    </main>
  );
}