/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  TestimonialsData,
  useGetTestimonialQuery,
} from "../../../redux/features/testimonialsApi";

const Leaderboard = () => {
  const { data, isLoading, error } = useGetTestimonialQuery("");
  const sortedPosts = data
    ?.slice()
    .sort(
      (a: TestimonialsData, b: TestimonialsData) =>
        parseInt(b.quantity) - parseInt(a.quantity)
    );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error...........</div>;
  }

  return (
    <>
      <div className="md:pt-32 h-screen container pt-9">
        <div className="py-10">
          <div className="text-center md:text-3xl text-2xl font-bold ">
            All Donners
          </div>
        </div>
        {/* Event items table */}
        <div className="pt-10 shadow-xl rounded-xl p-8 dark:bg-slate-900">
          <table className="table-auto border-collapse border p-7 border-gray-300 w-full ">
            <thead className="overflow-x-scroll">
              <tr className="border border-gray-300 ">
                <th className="border border-gray-300 ">index</th>
                <th className="border border-gray-300 ">Donner Name</th>
                <th className="border border-gray-300 ">Title</th>

                <th className="border border-gray-300">Quantity</th>
              </tr>
            </thead>
            <tbody className="overflow-x-scroll">
              {/* Render each event item */}
              {sortedPosts?.map((item: any, index: number) => (
                <tr
                  key={item._id}
                  className="border dark:hover:bg-slate-800 hover:bg-slate-200 duration-300 transition-all cursor-pointer border-gray-300 "
                >
                  <td className="border  border-gray-300 text-center px-2">
                    {index + 1}
                  </td>

                  <td className="border text-center border-gray-300 p-2">
                    {item?.name}
                    {/* <img className="h-12 w-12" src={item?.image} alt="" /> */}
                  </td>
                  <td className="border text-center border-gray-300 p-2">
                    {item?.title}
                    {/* <img className="h-12 w-12" src={item?.image} alt="" /> */}
                  </td>
                  <td className="border text-center border-gray-300 p-2">
                    {item?.quantity}
                    {/* <img className="h-12 w-12" src={item?.image} alt="" /> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Leaderboard;
