import { notFound } from "next/navigation";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogs } from "@/app/data/blog";
import BlogDetailClient from "./_component/BlogdetailsClient";

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const blog = blogs.find((b) => b.id === Number(id));

  if (!blog) {
    notFound();
  }

  return (
    <>
      <Header />
      <BlogDetailClient blog={blog} />
      <Footer />
    </>
  );
}
