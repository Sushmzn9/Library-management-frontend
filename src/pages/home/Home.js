import React, { useEffect } from "react";
import { Header } from "../../components/layout/Header.js";
import { Footer } from "../../components/layout/Footer.js";
import CustomCarousel from "../../components/carosuel/CustomCarousel.js";
import { Col, Container, Row, Form } from "react-bootstrap";
import { useState } from "react";
import { useSelector } from "react-redux";
import CustomCard from "../../components/Cards/CustomCard.js";
import { Link } from "react-router-dom";
const Home = () => {
  const [display, setDisplay] = useState([]);
  const { books } = useSelector((state) => state.bookInfo);
  useEffect(() => {
    setDisplay(books);
  }, [books]);
  const handleOnSearch = (e) => {
    const { value } = e.target;
    const filteredBook = books.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );
    setDisplay(filteredBook);
  };
  return (
    <div>
      <Header />
      <section className="main">
        <CustomCarousel />

        <Container className="mt-5">
          <Row>
            <Col>
              <div className="d-flex justify-content-between">
                <div className="left">{display?.length} books found</div>
                <div className="right">
                  <Form.Control
                    onChange={handleOnSearch}
                    placeholder="serach book by name"
                  />
                </div>
              </div>
              <hr />
              <div
                className="book-list d-flex justify-content-center
 flex-wrap gap-4 mt-5"
              >
                {display.map((item) => (
                  <Link to={`/book/${item._id}`}>
                    <CustomCard key={item._id} {...item} />
                  </Link>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </div>
  );
};
export default Home;
