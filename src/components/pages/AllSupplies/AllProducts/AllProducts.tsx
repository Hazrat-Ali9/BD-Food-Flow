import { useGetProductsQuery } from "../../../../redux/features/productApi";
import ProductCard from "../../Home/OurProducts/ProductCard";

const AllProducts = () => {
  const { data, error, isLoading } = useGetProductsQuery("");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error......</div>;
  }

  return (
    <>
      <div className="md:pt-[180px] pt-[150px] container">
        <div className="text-center ">
          <h2>ALl Products</h2>

          <p className="mt-3  font-normal md:text-[18px]">
            Celebrate culinary excellence with Our Products' seamless food flow,{" "}
            <br /> ensuring quality & Transform your dining experience with Food{" "}
            <br />
            Flow Distributor's unparalleled product range
          </p>
        </div>

        {/* card  */}
        <div className="mt-20 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 ">
          {data?.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AllProducts;
