"use client";
import CommentList from "@/components/CommentList";
import { getThreadDetail, createComment } from "@/utils/nostr";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useRef } from "react";

import '@/styles/globals.css';

const styles = {
  backgroundColor: "black",
  color: "white"
};

const Thread = ({ params }) => {
  const router = useRouter();
  const [thread, setThread] = useState(null);
  const commentContentRef = useRef("");

  const fetchThreadAndComments = async () => {
    const threadData = await getThreadDetail(params.threadId);
    setThread(threadData);
  };

  if (!thread) {
    // Fetch thread details when the component mounts
    fetchThreadAndComments();
    // You can render a loading indicator here
    return null;
  }

  const handleCommentSubmit = async (event) => {
    event.preventDefault();
    const content = commentContentRef.current.value; // Get content from the ref
    const commentId = await createComment({
      threadId: params.threadId,
      content: content,
    });

    // Clear the comment input field and fetch updated thread data
    commentContentRef.current.value = "";
    fetchThreadAndComments();
    window.location.reload();
  };

  return (
    <main style={styles}>

      <div className="row p-20 mt-10">

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
                          <th scope="col" className="px-6 py-4"> <h1 className="text-5xl text-left font-bold ">Subject:{thread.subject}</h1>
                            <h1 className="text-2xl text-left" >Description:{thread.description}</h1>
                            <h1 className="text-2xl text-left" >Author:{thread.author}</h1>
                            <h1 className="text-2xl text-left" >{thread.content}</h1>
                          </th>
                          <th scope="col" className="px-6 py-4"> <Link href={`/forum/${params.forumId}`} className="no-underline text-white block w-full bg-black hover:bg-black-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-full text-xl px-20 py-2.5 text-center dark:focus:ring-blue-900">Back to Forum hi</Link>
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





        <div className="mt-4"></div>



      </div>



      <div className="container">
        <CommentList threadId={params.threadId} />
      </div>

      <div className="container my-4">
        <form onSubmit={handleCommentSubmit}>
          <div className="mb-3">
            <label className="form-label">Post a Reply</label>
            <textarea
              className="form-control"
              id="commentContent"
              rows="3"
              name="content"
              ref={commentContentRef}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn bg-white rounded-full w-full">
            Post
          </button>
        </form>
      </div>


      <Footer></Footer>
    </main>
  );
};

export default Thread;
