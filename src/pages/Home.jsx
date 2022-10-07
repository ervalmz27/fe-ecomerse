import React from "react";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";
import styled from "styled-components";

const Center = styled.h1`
  text-align: center;
`;
const Home = () => {
  return (
    <div>
      {/* <Announcement /> */}
      <Navbar />
      <Slider />
      {/* <Categories /> */}
      <Center>
        <h1>Product</h1>
      </Center>

      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
