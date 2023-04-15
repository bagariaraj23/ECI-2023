import React from "react";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import Container from "../components/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import { Banner } from "../components/Banner";
import { Skills } from "../components/Skills";
import { Contact } from "../components/Contact";
import { Foooter } from "../components/Foooter";
import "../App.css";

const Home = () => {
  return (
    <>
      <Banner />
      <Skills />
      <Container class1="-5">
        <Container class1="marque-wrapper py-5">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4">NOTICE: ELECTIONS ARE ONNNNN!!</div>
                  <div className="mx-4">NOTICE: ELECTIONS ARE ONNNNN!!</div>
                  <div className="mx-4">NOTICE: ELECTIONS ARE ONNNNN!!</div>
                </Marquee>
              </div>
            </div>
          </div>
        </Container>

        <Container class1="Blog-wrapper py-5">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Know More About Voting!!</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
          </div>
        </Container>
      </Container>
      <Contact />
      <Foooter />
    </>
  );
};
export default Home;
