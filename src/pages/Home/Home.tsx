import Hero from "../../components/home/Hero/Hero";
import Categories from "../../components/home/Categories/Categories";
import FeaturedPlaylists from "../../components/home/FeaturedPlaylists/FeaturedPlaylists";
import WhyChoose from "../../components/home/WhyChoose/WhyChoose";
import CTA from "../../components/home/CTA/CTA";

const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedPlaylists />
      <WhyChoose />
      <CTA />
    </>
  );
};

export default Home;
