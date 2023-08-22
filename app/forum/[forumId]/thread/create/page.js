"use client";
import { createThread } from "@/utils/nostr";
import Link from "next/link";
import { useRouter } from "next/navigation";
import '@/styles/globals.css';



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



    <div className="row p-20 py-10 "  style={{
      backgroundColor: "black",
      color: "white",
    }}>
      <a href={`/forum/${params.forumId}`}>
        <div className="mt-4">Back to Forum</div>
      </a>


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
              <th scope="col" class="px-6 py-4"> <h1 className="text-5xl text-left font-bold ">Add a new Thread</h1>
 
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







      <form className="p-20" onSubmit={(e) => create(e, params.forumId)}>
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



    </div>

    
  );
}
