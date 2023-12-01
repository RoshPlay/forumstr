"use client";
import { createForum } from "@/utils/nostr";
import Link from "next/link";
import { useRouter } from "next/navigation";
import '@/styles/globals.css';
import Footer from "@/components/Footer";
import { FaArrowLeft } from "react-icons/fa";

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
    

    <main className="md:p-20 pb-20" style={{
      backgroundColor: "black",
      color: "white",
    }}>
    <div  style={{
      backgroundColor: "black",
      color: "white",
    }} className="row md:p-20 md:mt-10">


    





<div>



  
</div>
    <div className="container block w-full rounded-xl bg-white-500 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-white-200">
     
    <div className="my-4"><a href="/" className="no-underline text-white  w-full bg-black hover:bg-black-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-full text-xl  dark:focus:ring-blue-900 flex items-center"> <FaArrowLeft /><p className="mx-3 my-0">Back to Home</p></a></div>    
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





    </div>
   

    <div>
<Footer></Footer>
</div>
    </div>






    </main>

    
  );
}