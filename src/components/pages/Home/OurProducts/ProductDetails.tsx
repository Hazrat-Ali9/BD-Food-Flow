import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../../../redux/features/productApi";
import { getUserinfo } from "../../../../services/auth.services";
import DonateModal from "./DonateModal";

const ProductDetails = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetSingleProductQuery(id || "");

  const [showModal, setShowModal] = useState(false);
  const userInfo = getUserinfo();
  console.log("userInfo", userInfo);
  // const { auth } = useAuth()
  const navigate = useNavigate();

  const handleShowModal = () => {
    setShowModal(true);
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error......</div>;
  }

  if (!data) {
    return <div>Product not found</div>;
  }

  const handleProfileClick = () => {
    if (!userInfo) {
      // toast.error('To donate, you must first log in.', {
      //   position: toast.TOP_RIGHT,
      // })
      navigate("/login"); // Redirect to the login page if not authenticated
    } else {
      handleShowModal(); // Open modal only if the user is authenticated
    }
  };

  return (
    <>
      <div className="container pt-40">
        <div className="">
          <h1 className="text-center text-2xl font-bold">{data?.title}</h1>
          <div className="flex justify-center items-center mt-5">
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
              }}
              className="w-3/4 md:h-[450px]"
              src={data?.image}
              alt=""
            />
          </div>
          <div className="w-3/4 mx-auto mt-4 flex justify-between text-xl font-bold">
            <p>Category: {data?.category}</p>
            <p>Quantity: {data?.quantity}</p>
          </div>
          <p className="mt-5 w-3/4 mx-auto text-lg text-center">
            {data?.description}
          </p>
          <div className="flex  justify-center pt-5">
            <button
              onClick={() => {
                handleProfileClick();
                handleShowModal();
              }}
              className="btn "
            >
              Donate Now{" "}
            </button>
          </div>
        </div>
        {/* Add more details as needed */}

        {showModal && (
          <DonateModal
            onClose={() => {
              setShowModal(false);
            }}
          />
        )}
      </div>
    </>
  );
};

export default ProductDetails;
