import React from "react";
import Banner from "../components/Homepage/Banner";
import Poster from "../components/Homepage/Poster";
import Showmore from "../components/Homepage/Showmore";
import BlogCards from "../components/Homepage/BlogCards";
import BigBFlex from "../components/Homepage/BigBFlex";

const Index = () => {
  return (
    <div>
      <Banner />
      <Poster />
      <div className="w-4/5 m-auto ">
        <Showmore title="Top Blogs" path="/" />
      </div>
      <BlogCards />
      <BigBFlex />
    </div>
  );
};

export default Index;
