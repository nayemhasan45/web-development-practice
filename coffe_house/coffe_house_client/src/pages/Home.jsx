import React from "react";
import bg from "../assets/images/more/6.jpeg";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import AddCoffeeCom from "../components/AddCoffeeCom";
import { useLoaderData } from "react-router";
import InstagramGallery from "../components/InstagramGallery";

const Home = () => {
  const coffees = useLoaderData();
  // console.log(coffees);
  return (
    <div>
      <HeroSection bg={bg} />
      <FeaturesSection></FeaturesSection>
      <AddCoffeeCom coffees={coffees}></AddCoffeeCom>
      <InstagramGallery></InstagramGallery>
    </div>
  );
};

export default Home;
