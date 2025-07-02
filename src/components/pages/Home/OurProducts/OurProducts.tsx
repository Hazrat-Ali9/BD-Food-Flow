import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../../../../redux/features/productApi";
import ProductCard from "./ProductCard";

export interface ProductCardProps {
  _id: string;
  image: string;
  category: string;
  title: string;
}
const OurProducts = () => {
  const { data, isLoading, error } = useGetProductsQuery("");

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>error...</div>;
  }

  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <>
      <div className="md:mt-[100px] mt-[100px] container">
        <div className="text-center ">
          <h2>Our Products</h2>

          <p className="mt-3  font-normal md:text-[18px]">
            Celebrate culinary excellence with Our Products' seamless food flow,{" "}
            <br /> ensuring quality & Transform your dining experience with Food{" "}
            <br />
            Flow Distributor's unparalleled product range
          </p>
        </div>

        {/* card  */}
        <div className="mt-20 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 ">
          {data?.slice(0, 6).map((product) => (
            <ProductCard product={product} key={product._id} />
          ))}
        </div>
        <div className="flex  justify-center pt-10">
          <Link to="/all-supplies">
            <button onClick={topFunction} className="btn ">
              View All
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default OurProducts;
