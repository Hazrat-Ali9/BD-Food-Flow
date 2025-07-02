import AskQuestion from "../AskQuestion/AskQuestion";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import OurProducts from "../OurProducts/OurProducts";
import Testimonials from "../Testimonial/Testimonials";
import TopDonor from "../TopDonor/TopDonor";
import WhatWeDo from "../WhatWeDo/WhatWeDo";
import Feature from "./../Feature/Feature";
import Supply from "./../Supply/Supply";

const Home = () => {
  return (
    <>
      <Banner />
      <Feature />
      <OurProducts />
      <TopDonor />
      <WhatWeDo />
      <Gallery />
      <Supply />
      <Testimonials />
      <AskQuestion />
    </>
  );
};

export default Home;
