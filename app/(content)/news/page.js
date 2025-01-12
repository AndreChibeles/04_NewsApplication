import NewsList from "@/components/news-list";

export default async function NewsPage() {
  const response = await fetch("http://localhost:8080/news");

  if (!response.ok) {
    throw new Error("Failed to fecth news.");
  }
  const news = await response.json();
  let newsContent;

  return (
    <>
      <h1>News page</h1>
      <NewsList news={news} />;
    </>
  );
}
