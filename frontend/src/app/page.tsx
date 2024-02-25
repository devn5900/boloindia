"use client"
import Main from "@/components/Home/Main";
import NewBlogSub from "@/components/Home/NewBlogSub";
import TopBlogs from "@/components/Home/TopBlogs";
import dynamic from "next/dynamic";
export default function Home() {
  return (

    <main className=" min-h-screen">
      <Main />
        <TopBlogs />
        <NewBlogSub/>
    </main>
  );
}
