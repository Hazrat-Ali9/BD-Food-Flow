import { AiFillYoutube, AiTwotonePhone } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { Link } from "react-router-dom";
import logoPic from "../../assets/images/ffLogo.png";
const Footer = () => {
  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="bg-white dark:bg-black dark:text-white border-t  dark:border-gray-600 border-gray-200 mt-20">
        <div className=" dark:text-white md:pb-2 pb-10 pt-14">
          <div className="container ">
            <div className="py-6">
              <div className="grid border-b dark:border-gray-600 border-gray-200 md:grid-cols-2 grid-cols-1 gap-2  pb-8">
                <div>
                  <div className="flex items-center gap-2">
                    <Link to="/">
                      <img className="h-16 " src={logoPic} alt="" />
                    </Link>

                    <div className="flex space-x-2 text-3xl font-bold">
                      <h1>BD</h1>
                      <h1 className="text-[#023e8a] font-bold">Food</h1>
                      <h1>
                        <span>Flow</span>
                      </h1>
                    </div>
                  </div>
                  <div className="pt-6 text-[16px] font-medium md:w-[90%]">
                    <p>
                      "Discover seamless food distribution and efficient
                      supplies management with BD Food Flow – your trusted
                      partner in the culinary industry.Transforming the way you
                      manage food distribution and supplies, BD Food Flow is
                      your gateway to culinary success.
                    </p>

                    {/* -------email------  */}
                    <div className="flex gap-4 pt-6">
                      <p className="dark:text-white">Follow us on:</p>

                      <div className=" bg-[#28589c] hover:scale-125 cursor-pointer duration-300 text-white h-8 w-8 rounded-full flex items-center justify-center">
                        <FaFacebookF className="" />
                      </div>
                      <div className=" bg-[#E1306c] hover:scale-125 cursor-pointer duration-300 text-white h-8 w-8 rounded-full flex items-center justify-center">
                        <BsInstagram />
                      </div>
                      <div className=" bg-[#ff0000] hover:scale-125 cursor-pointer duration-300 text-white h-8 w-8 rounded-full flex items-center justify-center">
                        <AiFillYoutube />
                      </div>
                      <div className=" bg-blue-700 hover:scale-125 cursor-pointer duration-300 text-white h-8 w-8 rounded-full flex items-center justify-center">
                        <BiLogoLinkedin />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="grid md:grid-cols-3 grid-cols-1 md:pt-6 gap-4">
                    <div>
                      <p className="text-2xl font-bold pb-6 ">Get To Know Us</p>
                      <div className="space-y-2 text-[16px] font-medium cursor-pointer">
                        <div>
                          <Link onClick={topFunction} to="/">
                            Home
                          </Link>
                        </div>
                        <div>
                          <Link onClick={topFunction} to="/all-supplies">
                            All Supplies
                          </Link>
                        </div>
                        <div>
                          <Link onClick={topFunction} to="/contact">
                            Contact
                          </Link>
                        </div>

                        <div>Terms and Conditions</div>
                      </div>
                    </div>
                    <div>
                      <p className="text-2xl font-bold pb-6 ">
                        Let Us Help You
                      </p>
                      <div className="space-y-2 text-[16px] font-medium cursor-pointer">
                        <p>100% Prime Food </p>
                        <p>Ongoing Support </p>
                        <p>On time Delivery </p>
                        <p>Trusted Partner </p>
                      </div>
                    </div>
                    <div>
                      <p className="text-2xl font-bold pb-6 ">Contact Us</p>
                      <div className="space-y-4">
                        {/* -------phone------  */}
                        <div className="flex items-center gap-2">
                          <div
                            data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                            className="bg-[#023e8a] h-10 w-10 rounded-full flex justify-center items-center"
                          >
                            <AiTwotonePhone className="text-white" size={25} />
                          </div>
                          <div className="text-[16px] font-medium ">
                            <p>0179-3636735</p>
                          </div>
                        </div>

                        {/* -------location------  */}
                        <div className="flex items-center gap-2">
                          <div className="bg-[#023e8a] h-10 w-10 rounded-full flex justify-center items-center">
                            <GoLocation className="text-white" size={25} />
                          </div>
                          <div className="text-[16px] font-medium">
                            <p>Dhaka</p>
                            <p>Bangladesh</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-4  flex justify-center items-center flex-wrap">
                <div>
                  <p className="dark:text-white">
                    © Copyright {currentYear}, All Rights Reserved by BD Food
                    Flow
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
