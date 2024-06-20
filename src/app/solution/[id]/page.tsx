import Posts from "./Posts";

export async function generateStaticParams() {
  const postsResponse = await fetch("https://api-website.sooritechnology.com.np/solution-app/solution");
  const posts = await postsResponse.json();

  const params = posts.results.map((post: any) => ({
    id: post.id.toString(),
  }));
  return params;
}

export default function SolutionPage({ params: { id } }: any) {
  return <Posts id={id} />;
}
