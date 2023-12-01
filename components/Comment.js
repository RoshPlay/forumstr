const Comment = ({ comment, author }) => {
  return (
    <>
      <div classNameName="row p-0 mt-10">

        <div
          className="block w-full rounded-sm bg-neutral-50 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-white-200">
          <div className="border-b-2 border-[#0000002d] px-6 py-3 text-black">

            <div className="flex flex-col">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <table className="min-w-full text-center text-sm font-light">
                      <thead className="border-b font-medium dark:border-neutral-500">
                        <tr>
                          <th scope="col" className="px-6 py-4"> <h1 classNameName="text-2xl text-left font-bold "> " {comment} "</h1>
                            <h1 className="text-2xl text-left" >By: {author}</h1>
                          </th>
                          <th scope="col" className="px-6 py-4">
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





    </>
  );
};

export default Comment;
