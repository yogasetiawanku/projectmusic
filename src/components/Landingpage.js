import Container from "react-bootstrap/Container";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import { useRef } from "react";
const Landingpage = () => {
  const Scrollref = useRef(null);
  const gotoo = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Navbar />
      <div className="big">
        <Container>
          <div className="container">
            <h1 data-aos="zoom-in" data-aos-duration="1000">
              Welcome To Venom Music
            </h1>
            <h2 data-aos="zoom-in" data-aos-duration="2000">
              Music On 1990-2022
            </h2>
            <h3 data-aos="zoom-in" data-aos-duration="1500">
              FREE FOR LISTENING
            </h3>
          </div>
          <button
            data-aos="flip-up"
            data-aos-delay="1500"
            onClick={() => gotoo(Scrollref.current)}
          >
            Start Now
          </button>
        </Container>
      </div>
      <div ref={Scrollref}></div>
    </>
  );
};
export default Landingpage;
