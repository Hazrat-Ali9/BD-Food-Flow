import { BiSupport } from "react-icons/bi";
import { FaPeopleArrows } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";

const Feature = () => {
  return (
    <>
      <div className="md:mt-[100px] mt-[100px] container">
        <div className="text-center ">
          <h2>Our Features</h2>

          <p className="mt-3  font-normal md:text-[18px]">
            BD Food Flow offers a comprehensive range of features including
            real-time tracking, <br /> customizable orders, and secure payment
            options, ensuring a seamless and <br />
            convenient experience for both producers and consumers
          </p>
        </div>

        {/* Grid layout for feature items */}
        <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-6 ">
          <div className="cursor-pointer duration-500 transition-all ease-in-out delay-200 hover:scale-105  ">
            <div className="border-2  bg-white w-20 h-20 p-4 rotate-45 relative top-10 flex justify-center items-center md:left-40 left-36">
              <GrCertificate size={50} className="-rotate-45  text-[#48cae4]" />
            </div>

            <div className="border-2 h-64  px-4 dark:bg-slate-900  pt-16 pb-4 space-y-2  duration-500 ease-in-out ">
              <h1 className="text-xl font-semibold text-center">
                Premium Quality
              </h1>
              <p className="text-lg">
                BD Food Flow ensures premium quality by directly connecting
                consumers with local farmers, guaranteeing freshness and
                excellence in every product
              </p>
            </div>
          </div>

          <div className="cursor-pointer duration-500 transition-all ease-in-out delay-200 hover:scale-105  ">
            <div className="border-2  bg-[#ffffff] w-20 h-20 p-4 rotate-45 relative top-10 flex justify-center items-center md:left-40 left-36">
              <FaPeopleArrows size={50} className="-rotate-45  text-[#000]" />
            </div>

            <div className="border-2 h-64  px-4   pt-16 pb-4 space-y-2 dark:bg-slate-900  duration-500 ease-in-out ">
              <h1 className="text-xl font-semibold text-center">
                {" "}
                On-Time Delivery
              </h1>
              <p className="text-lg">
                BD Food Flow prioritizes on-time delivery, ensuring customers
                receive their orders promptly and reliably, enhancing their
                overall experience.
              </p>
            </div>
          </div>

          <div className="cursor-pointer duration-500 transition-all ease-in-out delay-200 hover:scale-105  ">
            <div className="border-2 bg-[#ffffff] w-20 h-20 p-4 rotate-45 relative top-10 flex justify-center items-center md:left-40 left-36">
              <BiSupport size={50} className="-rotate-45 text-[#023e8a]" />
            </div>

            <div className="border-2 h-64  px-4 pt-16 pb-4 space-y-2 dark:bg-slate-900 duration-500 ease-in-out ">
              <h1 className="text-xl font-semibold text-center">
                Ongoing Support
              </h1>
              <p className="text-lg">
                BD Food Flow provides ongoing support to farmers and consumers,
                fostering long-term relationships and ensuring their needs are
                met every step of the way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
