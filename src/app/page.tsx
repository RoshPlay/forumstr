import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";
export default function Home() {
  return (
<main className="container mx-auto xl:max-w-6xl h-full mt-10 md:max-w-md sm:max-w-sm sm:h-screen">
  <div className="flex flex-col items-center justify-center ">
    <div className="bg-white w-full rounded-2xl flex flex-col items-center p-5 justify-between">
      <div className="mb-5">
        <h1 className="text-2xl font-semibold text-center">Welcome to Forum Name</h1>
        <p className="text-center">Forum description</p>
      </div>
      <button className="bg-black text-white py-1 px-6 sm:px-10 rounded-full border border-black hover:bg-white hover:text-black">
        Add a Forum
      </button>
    </div>

    {/* POST */}
    <div className="text-white flex flex-col sm:flex-row justify-between w-full mt-10 mb-3">
      <h1 className="font-semibold mb-2 sm:mb-0 sm:mr-4">Video Games</h1>
      <div className="flex space-x-2 sm:space-x-4 lg:space-x-8 lg:mr-8">
      <p className="mr-2 sm:mr-4 lg:mr-8 hidden sm:block">Last Post</p>
    <p className="hidden sm:block">Posts</p>
      </div>
    </div>

    <div className="bg-white w-full rounded-2xl">
      <div className="flex flex-col sm:flex-row justify-between items-center p-5">
        <div className="mb-3 sm:mb-0">
          <h1 className="text-xl">
            <Link href="/post">Brood War is a bad place</Link>
          </h1>
          <p>A place to chat about StarCraft and find games</p>
        </div>
        <div className="flex space-x-2 sm:space-x-4 lg:space-x-8 mr-5">
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

      <div className="flex flex-col sm:flex-row justify-between items-center p-5">
        <div className="mb-3 sm:mb-0">
          <h1 className="text-xl">
            <Link href="/post">All things StarCraft</Link>
          </h1>
          <p>A place to chat about StarCraft and find games</p>
        </div>
        <div className="flex space-x-2 sm:space-x-4 lg:space-x-8 mr-5">
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
    <div className="text-white flex flex-col sm:flex-row justify-between w-full mt-10 mb-3">
  <h1 className="font-semibold mb-2 sm:mb-0 sm:mr-4">Category Header</h1>
  <div className="flex space-x-2 sm:space-x-4 lg:space-x-8">
    <p className="mr-2 sm:mr-4 lg:mr-8 hidden sm:block">Last Post</p>
    <p className="hidden sm:block">Posts</p>
  </div>
</div>

    <div className="bg-white w-full rounded-2xl">
      <div className="flex flex-col sm:flex-row justify-between items-center p-5">
        <div className="mb-3 sm:mb-0">
          <h1 className="text-xl">
            <Link href="/post">Kittens</Link>
          </h1>
          <p>A place to chat about StarCraft and find games</p>
        </div>
        <div className="flex space-x-2 sm:space-x-4 lg:space-x-8 mr-5">
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

      <div className="flex flex-col sm:flex-row justify-between items-center p-5">
        <div className="mb-3 sm:mb-0">
          <h1 className="text-xl">
            <Link href="/post">Kitten but theyre sleeping</Link>
          </h1>
          <p>A place to chat about StarCraft and find games</p>
        </div>
        <div className="flex space-x-2 sm:space-x-4 lg:space-x-8 mr-5">
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

    <footer className="text-white flex flex-col sm:flex-row items-center justify-between mt-5 w-full">
      <div className="mb-3 sm:mb-0 flex items-center justify-center space-x-2">
        <h2 className="text-center">Create your Own Forum</h2>
        <AiOutlineArrowRight />
      </div>
      <h1>LOGO</h1>
    </footer>
  </div>
</main>
  );
}
