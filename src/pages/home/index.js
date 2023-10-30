import React from "react";
import "./index.css";
import SpiralImage from "../../assets/images/IntroductionSpiral.svg";
import ProfileImage from "../../assets/images/ProfileImage.png";

function index() {
  return (
    <div className="home-page">
      <section className="intro-section">
        <div className="spiral-image">
          <img src={SpiralImage} alt="" />
        </div>
        <div className="greeting-side">
          <p>Hello, I’m Maftunabonu,</p>
          <p>Front-End Developer</p>
          <p>based in Seoul, Korea.</p>
        </div>
        <div className="profile-side">
          <div className="liquid-frame">
            <div className="profile-image">
              <img src={ProfileImage} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="about-section">
        <h1>about.</h1>
        <p>
          An adept front-end developer, I specialize in crafting interactive and
          responsive user interfaces using React JS. With a keen eye for design
          and an unwavering commitment to creating intuitive user experiences, I
          blend the art of design with the science of programming to bring web
          concepts to life. I am passionate about staying updated with the
          latest in front-end technologies, ensuring that my projects are always
          at the forefront of the digital landscape.
        </p>
      </section>
      <section className="contact-section">
        <div>
          <h1>contact.</h1>
          <div>
            <div>
              <img src="" alt="" />
            </div>
            <p></p>
          </div>
        </div>
        <div></div>
      </section>
    </div>
  );
}

export default index;
