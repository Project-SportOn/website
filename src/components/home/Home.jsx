import React from "react";
import "./home.css";
import Header from "../header/Header";

const Home = () => {
  return (
    <section className="home" id="home">
      <Header />
      <div className="home-container container">
        <div className="home-content">
          <div className="home-box">
            <div className="box1"></div>
            <div className="box2"></div>
          </div>
          <div className="home-data">
            <h1>Join Us Now!</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo
              nesciunt aperiam velit est nemo! Odit iusto aut reperitatis?
            </p>
            <button className="home-btn">
              Join Now{" "}
              <i>
                <box-icon name="chevron-right"></box-icon>
              </i>{" "}
            </button>
          </div>
          <div className="home-social">
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-youtube"></i>{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;