import React from "react";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Image from "next/image";
function Comments() {
  return (
    <>
      <main className="container mx-auto max-w-4xl h-full">
        <Link href="/post">
          <div className="text-white flex items-center w-full p-5">
            <span className="text-2xl">
              <AiOutlineArrowLeft />
            </span>
            <h4 className="ml-5 text-lg font-semibold">Back</h4>
          </div>
        </Link>

        <div className="bg-white flex flex-col rounded-2xl items-center mb-10 sm:mb-28 justify-center">
          <h1 className="text-4xl font-semibold pt-5">
            Kittens but they are sleeping
          </h1>
          <div className="flex flex-col sm:flex-row mb-5 px-5">
            <div className="flex p-4 justify-center items-center">
              <Image
                src="/"
                width={40}
                height={40}
                alt=""
                className="bg-gray-500 rounded-full"
              />
              <h4 className="ml-2 sm:ml-5">Santos</h4>
            </div>

            <div className="mt-3 sm:mt-0">
              <p className="semi-bold p-5">
                {/* Contenido del post */}
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
                voluptatum natus nisi soluta ad? Reiciendis dolore animi eum hic
                at pariatur molestias optio sed voluptates ullam, nam similique
                reprehenderit consequatur?
              </p>
            </div>
          </div>
          <hr className="border border-black w-full" />
          <form action="" className="p-5 sm:p-10 flex flex-col w-full ">
            <div className="px-5 space-y-5">
              <label htmlFor="post" className="text-3xl sm:text-2xl p-4">
                Post a reply
              </label>
              <textarea
                className="resize-none border border-gray-300 rounded-md p-2 sm:p-4 w-full sm:w-96 lg:w-full h-32 sm:h-40 lg:h-48 xl:h-64"
                placeholder="Write your post here..."
              ></textarea>
              <div className=" sm:mt-5">
                <button className="bg-black text-white py-2 sm:py-3 px-10 sm:px-20 rounded-full border border-black hover:bg-white hover:text-black">
                  Post
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

export default Comments;
