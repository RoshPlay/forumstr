"use client";
import { createThread } from "@/utils/nostr";
import Link from "next/link";
import { useRouter } from "next/navigation";
import '@/styles/globals.css';
import Footer from "@/components/Footer";
import { FaArrowLeft } from "react-icons/fa";

export default function CreateThread({ params }) {
  const router = useRouter();

  const create = async (event, forumId) => {
    event.preventDefault();
    const subject = event.target.elements.subject.value;
    const description = event.target.elements.description.value;
    const content = event.target.elements.content.value;

    const threadId = await createThread({
      forumId,
      subject,
      description,
      content,
    });
    router.push(`/forum/${forumId}/thread/${threadId}`);
  };

  return (

    <>

      <div className="row md:px-20 py-5 mt-10"  >



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
                          <th scope="col" className="md:px-6 py-4 md:flex justify-between items-center">
                            <div className="p-3">
                              <h1 className="text-5xl text-left font-bold ">Add a new Thread</h1>
                            </div>
                            {/*  
              </th>
              <th scope="col" className="px-6 py-4">  */}
                            <div>
                              <Link href={`/forum/${params.forumId}`} className="no-underline text-white block w-full bg-black hover:bg-black-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-full text-xl md:px-20 lg:px-40 py-2.5 text-center  dark:focus:ring-blue-900">Back to Forum</Link>
                            </div>
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


      <div className="row md:px-20 md:py-10 mt-15">


        <form className="px-10" onSubmit={(e) => create(e, params.forumId)}>
          <div className="mb-3">
            <label className="form-label">Thread Subject</label>
            <input
              type="text"
              className="form-control"
              name="subject"
              required
              id="threadSubject"
              aria-describedby="threadSubject"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Thread Description</label>
            <input
              type="text"
              className="form-control"
              id="threadDescription"
              name="description"
              required
              aria-describedby="threadDescription"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Content</label>
            <textarea
              className="form-control"
              id="threadContent"
              rows="3"
              name="content"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-light bg-white w-full">
            Submit
          </button>
        </form>

        <div className=" mt-10 ">
          <Footer></Footer>
        </div>



      </div>

    </>

  );
}
