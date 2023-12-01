import Link from "next/link";
import '@/styles/globals.css';
import { getForumDetail } from "@/utils/nostr";
import ThreadList from "@/components/ThreadList";
import Footer from "@/components/Footer";
import { FaArrowLeft } from "react-icons/fa";

export default async function Forum({ params }) {
  const forumId = params.forumId;
  const forum = await getForumDetail(forumId);

  return (
    <main >



      <div className="row md:p-20 md:mt-15 px-10">
        <Link className="text-xl text-white no-underline py-3 flex items-center" href={`/`}>
          <FaArrowLeft /><p className="mx-3 my-0">Back to Home</p>
        </Link>
        <div
          className="w-full rounded-xl bg-neutral-50 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-white-200">
          <div className="border-b-2 border-[#0000002d] px-6 py-3 text-black">

            <div className="flex flex-col">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <table className="min-w-full text-center text-sm font-light">
                      <thead className="border-b font-medium dark:border-neutral-500">
                        <tr>
                          <th scope="col" className="px-6 py-4 md:flex items-center justify-between">
                            <div className="pb-3">
                              <h1 className="text-5xl text-left font-bold ">{forum.subject}</h1>
                              <h1 className="md:text-2xl text-xl text-left" >{forum.description}</h1>
                            </div>
                            {/* <a className=" no-underline text-white block w-full bg-white-200 hover:bg-black-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-full text-xl px-20 py-2.5 text-center dark:focus:ring-blue-900 select-none">View Forum</a>
                          </th>
                          <th scope="col" className="px-6 py-4">  */}
                            <div>
                              <Link href={`/forum/${params.forumId}/thread/create`} className="no-underline text-white block w-full bg-black hover:bg-black-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-full text-xl px-20 py-2.5 text-center dark:focus:ring-blue-900">Create Post</Link>

                            </div>
                          </th>
                        </tr>
                      </thead>
                    </table>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>





      <div className="container my-6">

        <Link href={`/forum/${params.forumId}/thread/create`}>

        </Link>
        <ThreadList forumId={params.forumId} />
      </div>

      <Footer></Footer>


    </main>
  );
}
