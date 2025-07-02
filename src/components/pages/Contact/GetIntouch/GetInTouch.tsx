import { BiSolidPhoneOutgoing } from "react-icons/bi";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoIosMailOpen } from "react-icons/io";
import { MdMoreTime } from "react-icons/md";

const GetInTouch = () => {
  return (
    <>
      <div className="md:pt-40 pt-32 container">
        <div className="text-center">
          <h2 className="font-bold  lg:text-4xl text-2xl">Get In Touch</h2>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8 pt-14">
          {/* conatct */}
          <div>
            <h1 className="py-4 font-bold text-xl text-center">Information</h1>
            <div className="space-y-9">
              <div className="shadow-lg px-9 py-5 bg-white dark:bg-slate-900 rounded-lg ">
                <div className="flex items-center space-x-7 ">
                  <div>
                    <FaMapLocationDot className="text-[60px] text-[#023e8a]" />
                  </div>
                  <div>
                    <h5 className="text-lg font-bold">Address</h5>
                    <p>Dhaka, Bangladesh</p>
                  </div>
                </div>
              </div>
              <div className="shadow-lg px-9 py-5 bg-white dark:bg-slate-900 rounded-lg">
                <div className="flex items-center space-x-7 ">
                  <div>
                    <MdMoreTime className="text-[60px] text-[#ff4d6d]" />
                  </div>
                  <div>
                    <h5 className="text-lg font-bold">TIMING</h5>
                    <p>Every Day 9 Am to 11pm</p>
                  </div>
                </div>
              </div>
              <div className="shadow-lg px-9 py-5 bg-white dark:bg-slate-900 rounded-lg">
                <div className="flex items-center space-x-7 ">
                  <div>
                    <IoIosMailOpen className="text-[60px] text-[#000]" />
                  </div>
                  <div>
                    <h5 className="text-lg font-bold">MAIL TO US</h5>
                    <p>bdfoodflow@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="shadow-lg px-9 py-5 bg-white dark:bg-slate-900 rounded-lg">
                <div className="flex items-center space-x-7 ">
                  <div>
                    <BiSolidPhoneOutgoing className="text-[60px] text-[#023e8a]" />
                  </div>
                  <div>
                    <h5 className="text-lg font-bold">Phone</h5>
                    <p>+99 888 777 666</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <h1 className="py-4 font-bold text-xl text-center">
              If Contact With Us Send Detail
            </h1>
            <div className="shadow-xl p-6 rounded-lg bg-white dark:bg-slate-900">
              <form>
                <div className="md:flex gap-6">
                  <input
                    name="from_name"
                    type="text"
                    placeholder="First Name"
                    className="input input-bordered   bg-white dark:bg-slate-900  border p-2 rounded-lg w-full md:mt-2"
                  />
                  <input
                    name="from_name"
                    type="text"
                    placeholder="Last Name"
                    className="input input-bordered  bg-white dark:bg-slate-900  border p-2 rounded-lg  w-full md:mt-2 mt-4"
                  />
                </div>
                <div className="md:flex gap-6 mt-4">
                  <input
                    name="from_name"
                    type="text"
                    placeholder="Phone"
                    className="input input-bordered  bg-white dark:bg-slate-900  w-full border p-2 rounded-lg   md:mt-2"
                  />
                  <input
                    type="email"
                    name="from_email"
                    placeholder="Email"
                    className="input input-bordered  bg-white dark:bg-slate-900  w-full border p-2 rounded-lg   md:mt-2 mt-4"
                  />
                </div>
                <div className="mt-4">
                  <input
                    name="message"
                    type="text"
                    placeholder="Address"
                    className="input border p-2 rounded-lg   bg-white dark:bg-slate-900  input-bordered w-full "
                  />
                </div>

                <div className="mt-10">
                  <textarea
                    name="message"
                    className="textarea border p-2 rounded-lg  bg-white dark:bg-slate-900  textarea-bordered h-36 w-full"
                    placeholder="Message or description"
                  ></textarea>
                </div>
              </form>
              <div className="mt-8 flex justify-center md:justify-end">
                <button className="py-4 px-9 rounded-md   font-semibold cursor-pointer text-lg bg-[#023e8a] text-white">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetInTouch;
