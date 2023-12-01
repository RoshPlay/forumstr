import Link from "next/link";
import ForumList from "@/components/ForumList";
import '../styles/globals.css';
import Footer from "@/components/Footer";


export default async function Home() {

  return (
    <main >
      <div className="row p-5 mt-10 md:p-20">
        <div
          className="block max-w-[18rem] rounded-xl bg-neutral-50 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-white-200">
          <div className="border-b-2 border-[#0000002d] md:px-6 md:py-3 text-black">

            <div className="flex flex-col">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <table className="min-w-full text-center text-sm font-light">
                      <thead className="border-b font-medium dark:border-neutral-500">
                        <tr>
                          <th scope="col" className="px-6 py-4 md:flex justify-between items-center">
                            <div className="pb-3">
                              <h1 className="text-5xl text-left font-bold ">Welcome to forumstr</h1>
                              <h1 className="md:text-2xl text-xl text-left" >An PoC implementation of nostr forums.</h1>
                            </div>
                            

                            <div>
                              <Link href="/forum/create/" className="no-underline text-white block w-full bg-black hover:bg-black-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-full md:text-xl md:px-20 py-2.5 text-center px-10 dark:focus:ring-blue-900 text-sm ">Add a Forum</Link>
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
        <div className="mt-4"></div>


        <ForumList />
      </div>



      <Footer></Footer>




    </main>
  );
}
