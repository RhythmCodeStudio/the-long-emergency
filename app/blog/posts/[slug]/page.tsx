export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  // const posts = await getBlogPosts();
  // const post = posts.find((post: any) => post.slug === String(slug));

  // if (!post) {
  //   return {};
  // }

  const blogPostOgImgUrl =
    "https://www.thelongemergency.com/images/open-graph/blog-post-og.png";

  return {
    // title: `${post.title} | The Long Emergency`,
    // description: post.description,
    alternates: {
      canonical: `/blog/posts/${slug}`,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: `https://www.thelongemergency.com/blog/posts/${slug}`,
      siteName: "The Long Emergency",
      // title: `${post.title} | The Long Emergency`,
      //description: post.description,
      images: [
        {
          url: blogPostOgImgUrl,
          width: 1200,
          height: 630,
         // alt: `${post.title} | The Long Emergency`,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  // const post = await getBlogPostBySlug(slug);

  // if (!post) {
    // notFound();
  // }
  return (
    <article>
      {/* <h1>{post.title}</h1> */}
      {/* <p>{post.content}</p> */}
    </article>
  );
}