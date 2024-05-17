"use client";
import { useEffect, useState } from "react";
import { PostList } from "./_components/post-list";
import { getPosts, Post } from "@/sanity/lib/sanity";
import HeroSection from "@/components/hero-section";

export default function Home() {
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchPosts() {
      const posts = await getPosts();
      setAllPosts(posts);
      setLoading(false);
    }

    fetchPosts();
  }, []);

  return (
    <main className="min-h-screen antialiased">
      <HeroSection
        title="Read My Blog"
        description="Enhance your development skills through insightful articles."
      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <PostList allPosts={allPosts} />
      )}
    </main>
  );
}
