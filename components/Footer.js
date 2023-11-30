import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="bg-black rounded-lg shadow dark:bg-gray-900 m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="flex items-center justify-between sm:items-center sm:justify-between">
            <a href="https://zebedee.io" className="flex items-center mb-4 sm:mb-0">
              <img src="https://zbd.gg/new-logo/zbd-white.svg" className="h-10 mr-30" alt="ZBD Logo" />
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              {/* <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 "></a>
              </li>
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6"></a>
              </li>
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 "></a>
              </li> */}
              <li>
                <a href="https://nbd.wtf" className="flex items-center  sm:mb-0">
                  <img src="https://user-images.githubusercontent.com/1653275/194609043-0add674b-dd40-41ed-986c-ab4a2e053092.png" className="h-10 mr-30" alt="NBD Logo" />
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400"><iframe className="w-full" height="323" src="https://zbd.gg/embed/yoggyac7"></iframe></span>
        </div>
      </footer>
    </div>
  )
}

export default Footer
