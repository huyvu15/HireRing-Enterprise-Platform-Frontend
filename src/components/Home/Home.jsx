import React, { useContext } from "react";
import { Context } from "../../main";
import { Navigate } from "react-router-dom";
import JobCategory from "./JobCategory";
import ScrollToTop from "./ScrollToTop";
import Hero from "./Hero";
import Gallery from "./Gallery";

const Home = () => {
  const { isAuthorized } = useContext(Context);
  if (!isAuthorized) {
    return <Navigate to={"/login"} />;
  }
  return (
    <>
    <section className="max-w-screen-2xl container mx-auto xl:px-24 px-4 md:py-20 py-14">
      <Hero />
      <JobCategory />
      {/* <FeaturedJobs /> */}
      <Gallery />
      <ScrollToTop />
    </section>
    </>
  );
};

export default Home;
