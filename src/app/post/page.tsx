import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Link from "next/link";
function page() {
  return (
    <>
    
      <main className="container mx-auto max-w-6xl h-full">
      <Link href="/">F
      <div className="text-white  flex items-center mt-5 w-full">
      <span className="text-2xl"> <AiOutlineArrowLeft/></span>
    <h4 className="ml-5 text-lg font-semibold">Forum Home</h4>
    </div>
    </Link>
        <div className="flex flex-col items-center mt-10 h-full">
          <div className="bg-white w-full rounded-2xl flex items-center p-5 justify-between">
            <div>
              <h1 className="text-4xl font-semibold pb-2">
                Kitten but theyre sleeping
              </h1>
              <p>Just kitten content</p>
            </div>
            <button className="bg-black text-white py-1 px-10 rounded-full border border-black hover:bg-white hover:text-black">
              Create Post
            </button>
          </div>

          {/* POST */}
          <div className="text-white flex justify-between w-full mt-10 mb-3">
            <h1 className="font-semibold">Video Games</h1>
            <div className="flex space-x-16 mr-10">
            <p className="mr-5">Started By</p>
              <p className="mr-5">Last Post</p>
              <p className="mr-2">Posts</p>
            </div>
          </div>

          <div className="bg-white w-full rounded-t-2xl h-full">

            <div className="flex justify-between items-center p-5">
              <div>
                <h1 className="text-xl">
                  <Link href="/comments">Brood War is a bad place</Link>
                </h1>
                <p>A place to chat about StarCraft and find games</p>
              </div>
              <div className="flex space-x-16 mr-5">
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

            {/*lINE */}
            <hr className="border border-gray-500 border-spacing-28" />

            <div className="flex justify-between items-center p-5">
              <div>
                <h1 className="text-xl">
                  <Link href="/comments">Brood War is a bad place</Link>
                </h1>
                <p>A place to chat about StarCraft and find games</p>
              </div>
              <div className="flex space-x-16 mr-5">
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


            {/*lINE */}
            <hr className="border border-gray-500 border-spacing-28" />
            
          </div>
        
          
        </div>
      </main>
    </>
  );
}

export default page;
