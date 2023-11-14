import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Link from "next/link";


function Post() {
  return (
    <>
<main className="container mx-auto max-w-6xl h-full">
  <Link href="/">
    <div className="text-white flex items-center mt-5 w-full">
      <span className="text-2xl">
        <AiOutlineArrowLeft />
      </span>
      <h4 className="ml-5 text-lg font-semibold">Forum Home</h4>
    </div>
  </Link>
  <div className="flex flex-col items-center mt-10 h-full">
    <div className="bg-white w-full rounded-2xl flex flex-col sm:flex-row items-center p-5 justify-between">
      <div className="mb-5 sm:mb-0">
        <h1 className="text-4xl font-semibold pb-2">
          Kitten but theyre sleeping
        </h1>
        <p>Just kitten content</p>
      </div>
      <button className="bg-black text-white py-1 px-6 sm:px-10 rounded-full border border-black hover:bg-white hover:text-black mt-5 sm:mt-0">
        Create Post
      </button>
    </div>

    {/* POST */}
    <div className="text-white flex flex-col sm:flex-row justify-between w-full mt-10 mb-3">
      <h1 className="font-semibold mb-2 sm:mb-0 sm:mr-4">Video Games</h1>
      <div className="flex space-x-16 sm:space-x-16 lg:mr-10 ">
        <p className="mr-2 hidden sm:block">Started By</p>
        <p className="mr-5 hidden sm:block">Last Post</p>
        <p className="hidden sm:block">Posts</p>
      </div>
    </div>

    <div className="bg-white w-full rounded-t-2xl h-full">
      <div className="flex flex-col sm:flex-row justify-between items-center p-5">
        <div className="mb-3 sm:mb-0">
          <h1 className="text-xl">
            <Link href="/comments">Brood War is a bad place</Link>
          </h1>
          <p>A place to chat about StarCraft and find games</p>
        </div>
        <div className="flex space-x-2 sm:space-x-16 mr-5">
          <div>
            <h4>Santos</h4>
            <p>3 min ago</p>
          </div>
          <div>
            <h4>Santos</h4>
            <p>3 min ago</p>
          </div>
          <div>
            <h3>💬655</h3>
          </div>
        </div>
      </div>

      {/* LINE */}
      <hr className="border border-gray-500 border-spacing-28" />

      <div className="flex flex-col sm:flex-row justify-between items-center p-5">
        <div className="mb-3 sm:mb-0">
          <h1 className="text-xl">
            <Link href="/comments">Brood War is a bad place</Link>
          </h1>
          <p>A place to chat about StarCraft and find games</p>
        </div>
        <div className="flex space-x-2 sm:space-x-16 mr-5">
          <div>
            <h4>Santos</h4>
            <p>3 min ago</p>
          </div>
          <div>
            <h4>Santos</h4>
            <p>3 min ago</p>
          </div>
          <div>
            <h3>💬655</h3>
          </div>
        </div>
      </div>

      {/* LINE */}
      <hr className="border border-gray-500 border-spacing-28" />
    </div>
  </div>
</main>
    </>
  );
}

export default Post;
