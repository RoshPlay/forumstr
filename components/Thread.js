import Link from "next/link";
import React from "react";

const Thread = ({ forumId, threadId, subject, description }) => {
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
      }}
      className="mt-0 p-0"
    >

      <div className="row p-20 mt-20 py-0 ">

        <div
          className="block max-w-[18rem] rounded-sm bg-neutral-50 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-white-200">
          <div className="border-b-2 border-[#0000002d] px-6 py-3 text-black">

            <div className="flex flex-col">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <table className="min-w-full text-center text-sm font-light">
                      <thead className="border-b font-medium dark:border-neutral-500">
                        <tr>
                          <th scope="col" className="px-6 py-4">    <h1 className="text-5xl text-left font-bold ">{subject}</h1>
                            <h1 className="text-2xl text-left" >{description}</h1> <Link className=" no-underline text-white block w-full bg-white-200 hover:bg-black-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-full text-xl px-20 py-2.5 text-center dark:focus:ring-blue-900 select-none">View Forum</Link>
                          </th>
                          <th scope="col" className="px-6 py-4"> <Link href={`/forum/${forumId}/thread/${threadId}/`} className="no-underline text-white block w-full bg-black hover:bg-black-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-full text-xl px-20 py-2.5 text-center dark:focus:ring-blue-900">View Threads</Link>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>


      </div>




    </div>
  );
};

export default Thread;
