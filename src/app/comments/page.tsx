import React from "react";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Image from "next/image";
function page() {
  return (
    <>
      <main className="container mx-auto max-w-6xl h-full">
        <Link href="/post">
          F
          <div className="text-white  flex items-center mt-5 w-full">
            <span className="text-2xl">
              {" "}
              <AiOutlineArrowLeft />
            </span>
            <h4 className="ml-5 text-lg font-semibold">Back</h4>
          </div>
        </Link>

        <div className="bg-white flex flex-col rounded-2xl items-center mt-10">
          <h1 className="text-4xl font-semibold p-4">
            Kittens but they are sleeping
          </h1>
          <div className="flex mb-5">
          <div className="flex p-4 justify-center items-center">
          <Image
                src="/"
                width={40}
                height={40}
                alt=""
                className="bg-gray-500 rounded-full"
              />
              <h4>Santos</h4>
              
          </div>
           
            <div className="p-15">
              <p className="semi-bold p-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo voluptas nesciunt optio hic iste alias earum possimus, molestias consectetur corporis veniam nam animi doloribus ut porro iure saepe blanditiis cum!
                Quia aliquid aut, rem vitae possimus alias culpa voluptatem consectetur saepe, ducimus odio! Iusto, dolores cupiditate! Praesentium, repellendus maxime ipsam officia voluptatum eaque! Facere, ducimus. Illum molestias explicabo eaque dolorem.
                Porro quo dicta repellat provident tempora qui aliquam officia modi asperiores optio vero a unde cupiditate voluptatibus, ex excepturi labore, perspiciatis recusandae, eum beatae facilis sint magnam corrupti nostrum? Quis!
                Quibusdam nulla nostrum iure culpa eum fuga unde ipsum maxime voluptatem dolorem, maiores explicabo odio optio aspernatur cumque dignissimos enim quidem, aperiam ad hic vitae totam. Libero laboriosam nostrum saepe!
                Distinctio, consequuntur. Minima libero ipsa asperiores dignissimos at quam atque enim molestias facere culpa ut, quae nisi voluptatum similique commodi corrupti iusto porro ea eum itaque laudantium adipisci unde? Placeat.
              </p>
            </div>
          </div>
          <hr className="border border-black w-full"/>
          <form action="post" className="p-10 flex flex-col">
            <label htmlFor="post" className="text-4xl p-4 ">Post a reply</label>
              <textarea name="post" id="" cols={120} rows={10} className="border border-black rounded-2xl "></textarea>
            <div className="mt-5">   
              <button className="bg-black text-white py-3 px-20 rounded-full border border-black hover:bg-white hover:text-black">
            Post
          </button></div>
            </form>
        </div>
      </main>
    </>
  );
}

export default page;
