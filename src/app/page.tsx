// src/app/page.tsx
import HomeInteractive from "@/components/HomeInteractive";

// Server Component: fetches data, passes to client
export default async function HomePage() {
  let data = null;

  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      cache: "no-store",
    });
    data = await res.json();
  } catch (e) {
    data = null;
  }

  return <HomeInteractive initialData={data} />;
}
