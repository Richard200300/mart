import Navbar from "@/component/navbar";
import Hero from "@/component/Hero";
import Footer from "@/component/Footer";
import Category from "@/component/Category";
import Trendingads from "@/component/Trendingads";
import Services from "@/component/Services";
import Newlisting from "@/component/Newlisting";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Category />
      <Trendingads />
      <Services />
      <Newlisting />
      <Footer />
     
    </>
  );
};

export default Homepage;
