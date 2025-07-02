import Marquee from "react-fast-marquee";
// import { FaAmbulance } from 'react-icons/fa'
import { FaCarSide } from "react-icons/fa";
import {
  FaBuildingCircleCheck,
  FaPeopleGroup,
  FaUserDoctor,
} from "react-icons/fa6";
import { GiFoodTruck } from "react-icons/gi";
import { MdPriceCheck } from "react-icons/md";
import food1 from "../../../../assets/images/food2.jpeg";
import food2 from "../../../../assets/images/food4.jpeg";
import food3 from "../../../../assets/images/food4.png";
// import food3 from '../../../../assets/images/food4.jpeg'
// import food4 from '../../../../assets/images/food4.jpeg'
import { motion } from "framer-motion";

const WhatWeDo = () => {
  return (
    <>
      <div className="md:mt-[180px] mt-[100px] border-b  dark:border-gray-600 border-gray-200">
        <div className="text-center container">
          <h2>What We Do</h2>

          <p className="mt-3 font-normal md:text-[18px]">
            Celebrate culinary excellence with Our Products' seamless food flow,{" "}
            <br /> ensuring quality & Transform your dining experience with BD
            Food <br />
            Flow Distributor's unparalleled product range
          </p>
        </div>

        <div className="bg-gray-100 dark:bg-black mt-48">
          <div className="container">
            {/* Vision & Mission */}
            <div className="md:flex relative bottom-24">
              <div className=" bg-[#48cae4] text-[#ffffff] p-6 space-y-3">
                <h1 className="text-2xl font-semibold">Our Vision</h1>
                <p>
                  BD Food Flow envisions revolutionizing the food industry by
                  seamlessly connecting producers with consumers through an
                  efficient and transparent supply chain. We aim to empower
                  local farmers and producers while providing consumers with
                  access to fresh, high-quality food products directly from the
                  source. Our vision encompasses fostering sustainability,
                  reducing food waste, and enhancing food security for
                  communities across Bangladesh
                </p>
              </div>
              <div className="bg-[#023e8a] text-[#ffffff] p-6 space-y-3">
                <h1 className="text-2xl font-semibold">Our Mission</h1>
                <p>
                  Our mission at BD Food Flow is to streamline the food
                  distribution process, leveraging technology to ensure fair
                  prices for farmers and affordable, high-quality products for
                  consumers. We are committed to promoting economic empowerment
                  among local producers and fostering sustainable agricultural
                  practices throughout Bangladesh. Through our innovative
                  platform, we strive to create a more resilient and inclusive
                  food ecosystem, benefiting both producers and consumers alike
                </p>
              </div>
            </div>

            <div className="pb-20 ">
              <div className="grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-2 space-y-4">
                <div className="space-y-6 h-[570px] overflow-y-scroll p-4">
                  {/* Food Service Distributors */}
                  <div className="flex space-x-6">
                    <div className="hidden md:block">
                      <div className="bg-[#48cae4] -rotate-45 h-16 w-16 flex justify-center items-center rounded-es-3xl rounded-ss-3xl rounded-se-3xl">
                        <h1 className="rotate-45 text-white font-bold text-lg">
                          1
                        </h1>
                      </div>
                    </div>

                    <div className="shadow-xl dark:bg-slate-900 rounded-lg p-6">
                      <div>
                        <GiFoodTruck size={40} className="text-[#023e8a]" />
                      </div>
                      <h1 className="text-2xl font-semibold">
                        Food Service Distributors
                      </h1>
                      <p className="pt-3">
                        Pellentesque in ipsum id orci porta dapibus. Vivamus
                        magna justo, lacinia eget consectetur sed, convallis at
                        tellus.
                      </p>
                    </div>
                  </div>
                  {/* Chain Supermarkets */}
                  <div className="flex space-x-6">
                    <div className="hidden md:block">
                      <div className="bg-[#48cae4] -rotate-45 h-16 w-16 flex justify-center items-center rounded-es-3xl rounded-ss-3xl rounded-se-3xl">
                        <h1 className="rotate-45 text-white font-bold text-lg">
                          2
                        </h1>
                      </div>
                    </div>

                    <div className="shadow-xl rounded-lg p-6 dark:bg-slate-900">
                      <div>
                        <FaUserDoctor size={40} className="text-[#023e8a]" />
                      </div>
                      <h1 className="text-2xl font-semibold">
                        Chain Supermarkets
                      </h1>
                      <p className="pt-3">
                        Pellentesque in ipsum id orci porta dapibus. Vivamus
                        magna justo, lacinia eget consectetur sed, convallis at
                        tellus.
                      </p>
                    </div>
                  </div>
                  {/* Independent Grocers*/}
                  <div className="flex space-x-6">
                    <div className="hidden md:block">
                      <div className="bg-[#48cae4] -rotate-45 h-16 w-16 flex justify-center items-center rounded-es-3xl rounded-ss-3xl rounded-se-3xl">
                        <h1 className="rotate-45 text-white font-bold text-lg">
                          3
                        </h1>
                      </div>
                    </div>

                    <div className="shadow-xl rounded-lg p-6 dark:bg-slate-900">
                      <div>
                        <FaBuildingCircleCheck
                          size={40}
                          className="text-[#023e8a]"
                        />
                      </div>
                      <h1 className="text-2xl font-semibold">
                        Independent Grocers
                      </h1>
                      <p className="pt-3">
                        Pellentesque in ipsum id orci porta dapibus. Vivamus
                        magna justo, lacinia eget consectetur sed, convallis at
                        tellus.
                      </p>
                    </div>
                  </div>
                  {/* Food Manufacturers & Processors*/}
                  <div className="flex space-x-6">
                    <div className="hidden md:block">
                      <div className="bg-[#48cae4] -rotate-45 h-16 w-16 flex justify-center items-center rounded-es-3xl rounded-ss-3xl rounded-se-3xl">
                        <h1 className="rotate-45 text-white font-bold text-lg">
                          4
                        </h1>
                      </div>
                    </div>

                    <div className="shadow-xl rounded-lg p-6 dark:bg-slate-900">
                      <div>
                        <FaPeopleGroup size={40} className="text-[#023e8a]" />
                      </div>
                      <h1 className="text-2xl font-semibold">
                        Food Manufacturers & Processors
                      </h1>
                      <p className="pt-3">
                        Pellentesque in ipsum id orci porta dapibus. Vivamus
                        magna justo, lacinia eget consectetur sed, convallis at
                        tellus.
                      </p>
                    </div>
                  </div>
                  {/* Club Stores*/}
                  <div className="flex space-x-6">
                    <div className="hidden md:block">
                      <div className="bg-[#48cae4] -rotate-45 h-16 w-16 flex justify-center items-center rounded-es-3xl rounded-ss-3xl rounded-se-3xl">
                        <h1 className="rotate-45 text-white font-bold text-lg">
                          5
                        </h1>
                      </div>
                    </div>

                    <div className="shadow-xl rounded-lg p-6 dark:bg-slate-900">
                      <div>
                        <MdPriceCheck size={40} className="text-[#023e8a]" />
                      </div>
                      <h1 className="text-2xl font-semibold">Club Stores</h1>
                      <p className="pt-3">
                        Pellentesque in ipsum id orci porta dapibus. Vivamus
                        magna justo, lacinia eget consectetur sed, convallis at
                        tellus.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="md:pl-6 relative">
                  <div>
                    <div className="grid md:grid-rows-4 md:grid-flow-col gap-4">
                      <div className="row-span-4 ">
                        <motion.img
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{
                            opacity: 1,
                            scale: 1,
                            transition: {
                              duration: 1,
                              ease: "easeInOut",
                            },
                          }}
                          viewport={{ once: false }}
                          className="h-full w-full rounded-lg"
                          src={food1}
                          alt=""
                        />
                      </div>
                      <div className="row-span-2  ">
                        <motion.img
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{
                            opacity: 1,
                            scale: 1,
                            transition: {
                              duration: 1,
                              ease: "easeInOut",
                            },
                          }}
                          viewport={{ once: false }}
                          className="h-full w-full rounded-lg"
                          src={food2}
                          alt=""
                        />
                      </div>
                      <div className="row-span-2 ">
                        <motion.img
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{
                            opacity: 1,
                            scale: 1,
                            transition: {
                              duration: 1.5,
                              ease: "easeInOut",
                            },
                          }}
                          viewport={{ once: false }}
                          className="h-full w-full rounded-lg"
                          src={food3}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-48">
                    <div className="bg-white dark:bg-slate-900 py-4 px-5 flex space-x-4">
                      <div>
                        <h1 className="text-xl font-semibold dark:text-white text-[#023e8a]">
                          24/7 Hours Service
                        </h1>
                        <p className="text-lg font-medium">99-885-665-2022</p>
                      </div>
                      {/* <FaAmbulance size={50} className="text-[#0165ff]" /> */}
                      <FaCarSide
                        size={50}
                        className="text-[#023e8a] dark:text-white"
                      />
                    </div>
                  </div>
                  {/* marquery  */}
                  <div className="relative ">
                    <div className="text-2xl bg-[#48cae4] py-4 text-white">
                      <Marquee speed={30}>
                        BD Food Flow's mission is to streamline food
                        distribution, ensuring fair prices for farmers and
                        affordable, high-quality products for consumers. Through
                        technology, we empower local producers, foster
                        sustainable practices, and create a resilient food
                        ecosystem. Our vision is to revolutionize the industry,
                        connecting producers with consumers for sustainability
                        and enhanced food security in Bangladesh.
                      </Marquee>
                    </div>
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

export default WhatWeDo;
