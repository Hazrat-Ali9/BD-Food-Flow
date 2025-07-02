import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import { BiSolidQuoteRight } from "react-icons/bi";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import donor1 from "../../../../assets/images/donor1.jpeg";
import donor2 from "../../../../assets/images/donor2.jpeg";
import donor3 from "../../../../assets/images/donor3.jpeg";
import donor4 from "../../../../assets/images/donor4.jpeg";
import donor5 from "../../../../assets/images/donor5.jpeg";
import donor6 from "../../../../assets/images/donor6.jpeg";

const TopDonor = () => {
  return (
    <>
      <div className="md:mt-[100px] mt-[100px] container">
        <div className="text-center ">
          <h2>Top Donor</h2>

          <p className="mt-3  font-normal md:text-[18px]">
            Celebrate culinary excellence with Our Products' seamless food flow,{" "}
            <br /> ensuring quality & Transform your dining experience with Food{" "}
            <br />
            Flow Distributor's unparalleled product range
          </p>
        </div>
        {/* donor  */}
        <div>
          <div className="flex space-x-4 mb-4 justify-end pr-4 md:pt-0 pt-6">
            <div className="custom-prev-button ">
              <MdOutlineKeyboardArrowLeft className="text-2xl duration-300 bg-gray-300 hover:bg-[#023e8a] hover:text-white text-[#023e8a] h-10 w-10 rounded-full" />
            </div>
            <div className="custom-next-button">
              <MdOutlineKeyboardArrowRight className="text-2xl bg-gray-300 duration-300 hover:bg-[#023e8a] hover:text-white text-[#023e8a] h-10 w-10 rounded-full" />
            </div>
          </div>
          <div className="px-4">
            <Swiper
              // install Swiper modules
              slidesPerView={1}
              spaceBetween={10}
              navigation={{
                nextEl: ".custom-next-button",
                prevEl: ".custom-prev-button",
              }}
              // pagination={{
              //   clickable: true,
              // }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
              modules={[Pagination, Navigation, Scrollbar, A11y]}
              className="mySwiper"
            >
              {/* donr 1 */}
              <SwiperSlide className="py-5">
                <div className="rounded  overflow-hidden shadow-lg bg-[#ffffff] dark:bg-slate-900">
                  <div className="flex justify-end w-full pr-4">
                    <BiSolidQuoteRight className="text-[#023e8a] " size={40} />
                  </div>
                  <div className="pl-6 flex items-center space-x-3">
                    <img
                      className="w-20 h-20 rounded-full"
                      src={donor1}
                      alt="donor1"
                    />
                    <div>
                      <div>
                        <h1 className="text-xl font-semibold">
                          Alexander Grant
                        </h1>
                        <p className="text-lg">Donor</p>
                      </div>
                    </div>
                  </div>
                  <div className="px-6 py-4">
                    <div className="mb-2 ">
                      <p className="text-lg">
                        Our organization is incredibly grateful for the generous
                        supply contributions from Alexander Grant. Their support
                        has enabled us to meet the needs of countless restored
                        faith in humanity individuals and families, ensuring
                        they have access to essential resources during
                        challenging times.
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {/* donr2  */}
              <SwiperSlide className="py-5">
                <div className="rounded  overflow-hidden shadow-lg bg-[#ffffff] dark:bg-slate-900">
                  <div className="flex justify-end w-full pr-4">
                    <BiSolidQuoteRight className="text-[#023e8a] " size={40} />
                  </div>
                  <div className="pl-6 flex items-center space-x-3">
                    <img
                      className="w-20 h-20 rounded-full"
                      src={donor2}
                      alt="donor2"
                    />
                    <div>
                      <div>
                        <h1 className="text-xl font-semibold">Emily Johnson</h1>
                        <p className="text-lg">Donor</p>
                      </div>
                    </div>
                  </div>
                  <div className="px-6 py-4">
                    <div className="mb-2 ">
                      <p className="text-lg">
                        Celebrating the invaluable support of Emily Johnson,
                        whose contributions have been the cornerstone of our
                        relief efforts, and relief to countless individuals
                        facing adversity. Their commitment to humanitarian aid
                        continues to inspire us, reinforcing our mission to
                        serve with compassion and dignity
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {/* donr3  */}
              <SwiperSlide className="py-5">
                <div className="rounded  overflow-hidden shadow-lg bg-[#ffffff] dark:bg-slate-900">
                  <div className="flex justify-end w-full pr-4">
                    <BiSolidQuoteRight className="text-[#023e8a] " size={40} />
                  </div>
                  <div className="pl-6 flex items-center space-x-3">
                    <img
                      className="w-20 h-20 rounded-full"
                      src={donor3}
                      alt="donor3"
                    />
                    <div>
                      <div>
                        <h1 className="text-xl font-semibold">
                          William Thompson
                        </h1>
                        <p className="text-lg">Donor</p>
                      </div>
                    </div>
                  </div>
                  <div className="px-6 py-4">
                    <div className="mb-2 ">
                      <p className="text-lg">
                        Thanks to the generous contributions of William
                        Thompson, our organization has been able to provide
                        essential supplies to those in need, making a tangible
                        difference in our community. Their support has been in
                        our efforts to ensure no one goes without basic
                        necessities during difficult times.
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {/* donr 4 */}
              <SwiperSlide className="py-5">
                <div className="rounded  overflow-hidden shadow-lg bg-[#ffffff] dark:bg-slate-900">
                  <div className="flex justify-end w-full pr-4">
                    <BiSolidQuoteRight className="text-[#023e8a] " size={40} />
                  </div>
                  <div className="pl-6 flex items-center space-x-3">
                    <img
                      className="w-20 h-20 rounded-full"
                      src={donor4}
                      alt="donor4"
                    />
                    <div>
                      <div>
                        <h1 className="text-xl font-semibold">Jackson Patel</h1>
                        <p className="text-lg">Donor</p>
                      </div>
                    </div>
                  </div>
                  <div className="px-6 py-4">
                    <div className="mb-2 ">
                      <p className="text-lg">
                        In times of crisis, the support of Jackson Patel has
                        shone brightly, illuminating the path towards relief and
                        recovery for countless individuals. Their compassionate
                        contributions have not only supplied essential needs but
                        also faith in humanity, showing that together, we can
                        make a profound impact.
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {/* dont =r 5  */}
              <SwiperSlide className="py-5">
                <div className="rounded  overflow-hidden shadow-lg bg-[#ffffff] dark:bg-slate-900">
                  <div className="flex justify-end w-full pr-4">
                    <BiSolidQuoteRight className="text-[#023e8a] " size={40} />
                  </div>
                  <div className="pl-6 flex items-center space-x-3">
                    <img
                      className="w-20 h-20 rounded-full"
                      src={donor5}
                      alt="donor5"
                    />
                    <div>
                      <div>
                        <h1 className="text-xl font-semibold">Ethan Garcia</h1>
                        <p className="text-lg">Donor</p>
                      </div>
                    </div>
                  </div>
                  <div className="px-6 py-4">
                    <div className="mb-2 ">
                      <p className="text-lg">
                        "Deep appreciation to Ethan Garcia for their invaluable
                        contributions, which have become the heartbeat of our
                        mission to serve the underserved countless . Their
                        dedication to providing essential supplies has not only
                        met immediate needs but also ignited a beacon of hope
                        for a brighter tomorrow
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {/* donor6  */}
              <SwiperSlide className="py-5">
                <div className="rounded  overflow-hidden shadow-lg bg-[#ffffff] dark:bg-slate-900">
                  <div className="flex justify-end w-full pr-4">
                    <BiSolidQuoteRight className="text-[#023e8a] " size={40} />
                  </div>
                  <div className="pl-6 flex items-center space-x-3">
                    <img
                      className="w-20 h-20 rounded-full"
                      src={donor6}
                      alt="donor6"
                    />
                    <div>
                      <div>
                        <h1 className="text-xl font-semibold">Mia Martinez</h1>
                        <p className="text-lg">Donor</p>
                      </div>
                    </div>
                  </div>
                  <div className="px-6 py-4">
                    <div className="mb-2 ">
                      <p className="text-lg">
                        Humbled by the generosity of Mia Martinez, whose support
                        has been a beacon of light in times of darkness,
                        providing essential supplies and restoring faith in our
                        shared humanity. Their commitment to making a touched
                        countless lives, reminding us of the can have on those
                        facing adversity
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopDonor;
