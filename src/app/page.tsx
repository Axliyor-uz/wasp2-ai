// page.tsx (Server Component)
import HomeClient from "@/components/HomeInteractive";

export const dynamic = "force-dynamic";

async function getPosts() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      cache: "no-store",
    });
    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    return null;
  }
}

export default async function HomePage() {
  const data = await getPosts();

  return <HomeClient initialData={data} />;
}