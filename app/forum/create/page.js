"use client";
import { createForum } from "@/utils/nostr";
import Link from "next/link";
import { useRouter } from "next/navigation";
import '@/styles/globals.css';



export default async function CreateForum() {
  const router = useRouter();

  const create = async (event) => {
    event.preventDefault();
    const subject = event.target.elements.subject.value;
    const description = event.target.elements.description.value;
    const forumId = await createForum({ subject, description });
    router.push(`/forum/${forumId}`);
  };

  return (
    

    <main className="p-20 pb-20" style={{
      backgroundColor: "black",
      color: "white",
    }}>
    <div  style={{
      backgroundColor: "black",
      color: "white",
    }} className="row p-20 mt-10">


    





<div>



  
</div>
    <div className="container block w-full rounded-xl bg-white-500 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-white-200 ">
     
    <div className="my-4"><a href="/" class="no-underline text-white block w-full bg-black hover:bg-black-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-full text-xl  dark:focus:ring-blue-900"> Back to Home</a></div>    
        <div className="my-4"><h1 className="text-5xl text-left font-bold ">Welcome to forumstr</h1></div>
      

      <form  style={{
      backgroundColor: "black",
      color: "white",
    }} onSubmit={create}>
        <div className="mb-3">
          <label className="form-label">Forum Subject</label>
          <input
            type="text"
            className="form-control"
            id="forumSubject"
            name="subject"
            aria-describedby="forumSubject"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Forum Description</label>
          <input
            type="text"
            className="form-control"
            id="forumDescription"
            name="description"
            aria-describedby="forumDescription"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>


<div>
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



    </div>
   

    </div>






    </main>

    
  );
}