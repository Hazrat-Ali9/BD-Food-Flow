import { motion } from "framer-motion";
import { useState } from "react";
import { FaRegQuestionCircle } from "react-icons/fa";
import { FaCircleCheck, FaHandHoldingHeart } from "react-icons/fa6";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import man1 from "../../../../assets/images/donor1.jpeg";
import questionPic1 from "../../../../assets/images/q4.avif";
import questionPic2 from "../../../../assets/images/q7.avif";

const AskQuestion = () => {
  const data = [
    {
      question: "How does BD Food Flow maintain food freshness?",
      answer:
        "BD Food Flow maintains strict quality control measures and utilizes advanced logistics to ensure that all food products are sourced, stored, and delivered under optimal conditions, guaranteeing freshness.",
    },
    {
      question: "What types of food products does BD Food Flow distribute?",
      answer:
        "BD Food Flow offers a diverse range of food products including fresh produce, meats, dairy, seafood, dry goods, and specialty items sourced from trusted suppliers.",
    },
    {
      question: "Can I customize my orders with BD Food Flow?",
      answer:
        "Yes, BD Food Flow provides customizable ordering options to meet specific customer needs, including bulk orders, special requests, and tailored delivery schedules.",
    },

    {
      question: "How can I track my orders placed with BD Food Flow?",
      answer:
        " BD Food Flow offers a user-friendly online platform or app where customers can track their orders in real-time, providing visibility into the status of deliveries and estimated arrival times.",
    },
    {
      question: "What payment methods are accepted by BD Food Flow?",
      answer:
        "BD Food Flow accepts various payment methods including credit/debit cards, electronic transfers, and invoicing for established corporate accounts, providing flexibility and convenience for customers.",
    },
    {
      question: " How does BD Food Flow handle food safety standards?",
      answer:
        " BD Food Flow adheres to stringent food safety protocols and complies with all relevant regulations to ensure the highest standards of quality and safety across its distribution process.",
    },
    {
      question: "Where does BD Food Flow provide distribution services?",
      answer:
        "BD Food Flow serves a wide geographical area, including urban, suburban, and rural regions, providing comprehensive distribution services tailored to the specific needs of each location.",
    },
    {
      question: "Is customer support available for BD Food Flow services?",
      answer:
        "Yes, BD Food Flow has a dedicated customer support team available to address any queries, concerns, or issues promptly, ensuring a seamless and satisfactory experience for all customers.",
    },
    {
      question: "What payment methods does BD Food Flow accept?",
      answer:
        "BD Food Flow accepts various payment methods including credit/debit cards, electronic transfers, and invoicing for established corporate accounts, providing flexibility and convenience for customers.",
    },
    {
      question: "Does BD Food Flow offer discounts for bulk orders?",
      answer:
        "Yes, BD Food Flow provides competitive pricing and offers special discounts and promotions for bulk orders, incentivizing larger purchases and fostering long-term partnerships with customers.",
    },
    {
      question: "What are the delivery times with BD Food Flow?",
      answer:
        "BD Food Flow offers efficient delivery services with flexible scheduling options, ensuring timely delivery of orders to meet customer requirements.",
    },
  ];

  // State to manage the open/close state of each question
  const [isOpen, setIsOpen] = useState(Array(data.length).fill(false));

  // Function to toggle the open/close state of a question
  const handleToggle = (index: number) => {
    const updatedState = isOpen.map((state, i) =>
      i === index ? !state : false
    );
    setIsOpen(updatedState);
  };
  return (
    <>
      <div className="md:mt-[178px] mt-[100px] container">
        <div className="text-center ">
          <h2>Frequently Ask Question</h2>

          <p className="mt-3  font-normal md:text-[18px]">
            Our Customer Some Frequently Ask Question.
          </p>
        </div>

        {/* Displaying event details and a question box */}

        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 md:pt-16">
          <div className="">
            <div className="md:flex">
              {/* doner  */}
              <div className="relative z-10 md:top-[350px] top-[400px] md:right-10 dark:text-white dark:bg-slate-900  bg-white shadow-xl rounded-lg px-2 py-4 md:w-96 w-64">
                <div className="flex space-x-3 ">
                  <div>
                    <img
                      src={man1}
                      className="h-14 w-14 rounded-full "
                      alt="questionPic1"
                    />
                    <FaCircleCheck className="text-[#023e8a] relative bottom-4" />
                  </div>
                  <div>
                    <h1 className="text-lg font-semibold">Wiliam Jon</h1>
                    <p>Donar</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center relative md:top-8 right-11 w-full">
                <div className="bg-white dark:text-white dark:bg-slate-900 md:ml-8  z-10 px-4 py-3 shadow-xl rounded-lg ">
                  <div className="flex items-center space-x-4 justify-between ">
                    <div>
                      <FaRegQuestionCircle
                        size={25}
                        className="text-[#023e8a]"
                      />
                    </div>
                    <div>
                      <h1 className="text-xl font-semibold">Get Your Answer</h1>
                      <p>Frequently Asked Questions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
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
                  className="rounded-lg md:h-96 h-72 inline-block w-full"
                  src={questionPic2}
                  alt=""
                />
              </div>
              <div className="relative bottom-6 ">
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
                  className="rounded-lg md:h-96 h-72 inline-block w-full"
                  src={questionPic1}
                  alt=""
                />
                <div className="bg-white  dark:bg-slate-900 md:block hidden p-4 shadow-lg relative bottom-12 right-12 w-24 rounded-lg">
                  <FaHandHoldingHeart size={50} className="text-[#023e8a]" />
                </div>
              </div>
            </div>
          </div>
          {/* question  */}
          <div>
            <div className="pt-10">
              <div className="md:p-4  h-[440px] overflow-y-scroll ">
                {/* Mapping through FAQ data */}
                {data.map((item, index) => (
                  <div
                    className="space-y-2 mb-3  rounded-lg border-b"
                    key={index}
                  >
                    <input
                      type="checkbox"
                      id={`toggle-${index}`}
                      className="hidden"
                      checked={isOpen[index]}
                      onChange={() => handleToggle(index)}
                    />
                    <label
                      htmlFor={`toggle-${index}`}
                      className="cursor-pointer text-lg"
                    >
                      {/* Styling for question */}
                      <div
                        className={`flex justify-between ${
                          isOpen[index]
                            ? "bg-[#023e8a] p-2 text-[#ffffff] rounded-lg duration-300 transition-all"
                            : " hover:bg-[#48cae4] rounded-lg p-2 hover:text-[#ffffff] duration-300"
                        }`}
                      >
                        <div className="flex items-center space-x-2">
                          {/* Icons for question */}
                          <div>
                            {isOpen[index] ? (
                              <FaRegQuestionCircle />
                            ) : (
                              <FaRegQuestionCircle className="text-[#023e8a]" />
                            )}
                          </div>
                          <div className="">{item.question}</div>
                        </div>
                        {isOpen[index] ? <IoIosArrowUp /> : <IoIosArrowDown />}
                      </div>
                    </label>
                    {/* Displaying answer if question is open */}
                    {isOpen[index] && (
                      <div className="mt-2 p-2 duration-300 transition-all">
                        <p>{item.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AskQuestion;
