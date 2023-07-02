import React from "react";
import { Header } from "../../components/layout/Header.js";
import { Footer } from "../../components/layout/Footer.js";
import CustomCarousel from "../../components/carosuel/CustomCarousel.js";
import { useSelector } from "react-redux";
import CustomCard from "../../components/Cards/CustomCard.js";
const Home = () => {
  const { books } = useSelector((state) => state.bookInfo);
  return (
    <div>
      <Header />
      <section className="main">
        <CustomCarousel />
        <div className="book-list d-flex justify-content-between flex-wrap gap-3">
          {books.map((item) => (
            <CustomCard key={item._id} {...item} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
