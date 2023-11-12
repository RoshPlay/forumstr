import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";
export default function Home() {
  return (
    <main className="container mx-auto max-w-6xl h-full">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="bg-white w-full rounded-2xl flex items-center p-5 justify-between">
          <div>
            <h1 className="text-2xl font-semibold">Welcome to Forum Name</h1>
            <p>Forum description</p>
          </div>
          <button className="bg-black text-white py-1 px-10 rounded-full border border-black hover:bg-white hover:text-black">
            Add a Forum
          </button>
        </div>

        {/* POST */}
        <div className="text-white flex justify-between w-full mt-10 mb-3">
          <h1 className="font-semibold">Video Games</h1>
          <div className="flex space-x-11 mr-10">
            <p className="mr-5">Last Post</p>
            <p>Posts</p>
          </div>
        </div>

        <div className="bg-white w-full rounded-2xl">
          <div className="flex justify-between items-center p-5">
            <div>
              <h1 className="text-xl">
                <Link href="/post">Brood War is a bad place</Link>
              </h1>
              <p>A place to chat about StarCraft and find games</p>
            </div>
            <div className="flex space-x-10 mr-5">
              <div>
                <h4>Santos</h4>
                <p>3 min ago</p>
              </div>
              <div>
                <h3>💬655</h3>
              </div>
            </div>
          </div>

          <hr className="border border-black" />

          <div className="flex justify-between items-center p-5">
            <div>
              <h1 className="text-xl">
                <Link href="/post">All things StarCraft</Link>
              </h1>
              <p>A place to chat about StarCraft and find games</p>
            </div>
            <div className="flex space-x-10 mr-5">
              <div>
                <h4>Santos</h4>
                <p>3 min ago</p>
              </div>
              <div>
                <h3>💬655</h3>
              </div>
            </div>
          </div>
        </div>

        {/* POST */}
        <div className="text-white flex justify-between w-full mt-10 mb-3">
          <h1 className="font-semibold">Category Header</h1>
          <div className="flex space-x-11 mr-10">
            <p className="mr-5">Last Post</p>
            <p>Posts</p>
          </div>
        </div>

        <div className="bg-white w-full rounded-2xl">
          <div className="flex justify-between items-center p-5">
            <div>
              <h1 className="text-xl">
                <Link href="/post">Kittens</Link>
              </h1>
              <p>A place to chat about StarCraft and find games</p>
            </div>
            <div className="flex space-x-10 mr-5">
              <div>
                <h4>Santos</h4>
                <p>3 min ago</p>
              </div>
              <div>
                <h3>💬655</h3>
              </div>
            </div>
          </div>

          <hr className="border border-black" />

          <div className="flex justify-between items-center p-5">
            <div>
              <h1 className="text-xl">
                <Link href="/post">Kitten but theyre sleeping</Link>
              </h1>
              <p>A place to chat about StarCraft and find games</p>
            </div>
            <div className="flex space-x-10 mr-5">
              <div>
                <h4>Santos</h4>
                <p>3 min ago</p>
              </div>
              <div>
                <h3>💬655</h3>
              </div>
            </div>
          </div>
        </div>

        <footer className="text-white flex items-center justify-between mt-5 w-full">
          <div className="flex items-center justify-center space-x-3">
            <h2>Create your Own Forum</h2>
            <AiOutlineArrowRight />
          </div>
          <h1>LOGO</h1>
        </footer>
      </div>
    </main>
  );
}
