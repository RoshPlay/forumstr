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
  class="w-full rounded-xl bg-neutral-50 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-white-200">
  <div class="border-b-2 border-[#0000002d] px-6 py-3 text-black">

  <div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full text-center text-sm font-light">
          <thead class="border-b font-medium dark:border-neutral-500">
            <tr>
            <th scope="col" class="px-6 py-4"> <h1 className="text-5xl text-left font-bold ">Subject:{thread.subject}</h1>
  <h1 class="text-2xl text-left" >Description:{thread.description}</h1> 
  <h1 class="text-2xl text-left" >Author:{thread.author}</h1> 
  <h1 class="text-2xl text-left" >{thread.content}</h1> 
    </th>
              <th scope="col" class="px-6 py-4"> <a href={`/forum/${params.forumId}`} class="no-underline text-white block w-full bg-black hover:bg-black-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-full text-xl px-20 py-2.5 text-center dark:focus:ring-blue-900">Back to Forum</a>
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

      
      <footer class="bg-black rounded-lg shadow dark:bg-gray-900 m-4">
      <footer class="bg-black rounded-lg shadow dark:bg-gray-900 m-4">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="https://zebedee.io" class="flex items-center mb-4 sm:mb-0">
                <img src="https://zbd.gg/new-logo/zbd-white.svg" class="h-10 mr-30" alt="ZBD Logo" />
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6 "></a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6"></a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6 "></a>
                </li>
                <li>
                <a href="https://nbd.wtf" class="flex items-center mb-4 sm:mb-0">
                <img src="https://user-images.githubusercontent.com/1653275/194609043-0add674b-dd40-41ed-986c-ab4a2e053092.png" class="h-10 mr-30" alt="NBD Logo" />
            </a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400"><iframe className="w-full" height="323" src="https://zbd.gg/embed/yoggyac7"></iframe></span>
    </div>
</footer>
      </footer>
    </main>
  );
};

export default Thread;
