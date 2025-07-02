import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ProductCardProps } from "./OurProducts";

interface Product {
  product: ProductCardProps;
}

const ProductCard: React.FC<Product> = ({ product }) => {
  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 250 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            ease: "easeInOut",
          },
        }}
        viewport={{ once: false }}
        className="bg-[#ffffff] dark:bg-slate-900 shadow-xl rounded-lg"
      >
        <img
          className="bg-gray-300 rounded-t-lg h-64 w-full"
          src={product?.image}
          alt="image"
        />
        <div className="px-5 pt-10 pb-8">
          <h3 className="text-xl font-bold">{product?.title}</h3>
          <div className="flex justify-between items-center pt-4 font-semibold">
            <h4 className=" text-lg "> {product?.category}</h4>
            <h4>Quantity</h4>
          </div>

          <div className="flex  justify-center pt-5">
            <Link onClick={topFunction} to={`/products/${product?._id}`}>
              <button className="btn ">View Details</button>
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ProductCard;
