import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { useGetTestimonialQuery } from "../../../../redux/features/testimonialsApi";

const Testimonials = () => {
  const { data, isLoading, error } = useGetTestimonialQuery("");
  //   console.log(data);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>error...</div>;
  }
  return (
    <>
      <div className="md:mt-[100px] mt-[100px] container">
        <div className="text-center ">
          <h2>Donate Testimonials</h2>

          <p className="mt-3 w-1/2 mx-auto font-normal md:text-[18px]">
            Bd Food Flow Distribution and Supplies Management System, we are
            dedicated to orchestrating efficient channels for the seamless
            delivery of essential provisions, championing solidarity and
            sustenance for all.
          </p>
        </div>
        {/* Testimonials  */}
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
              {/* testimonial 1 */}
              {data?.map((product) => (
                <SwiperSlide key={product._id} className="py-5 ">
                  <div className="rounded cursor-pointer   overflow-hidden shadow-lg bg-[#ffffff] dark:bg-slate-900 h-[500px]">
                    <div className=" items-center space-x-3">
                      <img
                        className="w-full h-48 duration-300 transition-all hover:scale-105"
                        src={product?.image}
                        alt="donor1"
                      />
                      <div>
                        <div>
                          <h1 className="text-2xl text-center pt-5 font-semibold">
                            {product?.title}
                          </h1>
                        </div>
                      </div>
                    </div>
                    <div className="px-6 py-4">
                      <div className="mb-2 ">
                        <p className="text-lg">{product?.description}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
