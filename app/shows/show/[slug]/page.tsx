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

  // const showPageOgImgUrl =
  //   "https://www.thelongemergency.com/images/open-graph/show-page-og.png";

  return {
    // title: `${post.title} | The Long Emergency`,
    // description: post.description,
    alternates: {
      canonical: `/shows/show/${slug}`,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: `https://www.thelongemergency.com/shows/show/${slug}`,
      siteName: "The Long Emergency",
      // title: `${post.title} | The Long Emergency`,
      //description: post.description,
      // images: [
      //   {
      //     url: showPageOgImgUrl,
      //     width: 1200,
      //     height: 630,
      //    // alt: `${post.title} | The Long Emergency`,
      //   },
      // ],
    },
  };
}

export default async function ShowPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  // const show = await getShowBySlug(slug);

  // if (!show) {
    // notFound();
  // }
  return (
    <article>
      {/* <h1>{show.title}</h1> */}
      {/* <p>{show.content}</p> */}
    </article>
  );
}