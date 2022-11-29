import { Container } from "react-bootstrap";
const Footer = () => {
  return (
    <>
      <Container>
        <div id="footer">
          <h1 id="footer-h1" data-aos="zoom-in" data-aos-duration="1000">
            Thnks For Visite
          </h1>
        </div>
        <div className="container">
          <image
            className="rounded rounded-circle border border-warning"
            id="pp"
            alt="..."
          >
            <h5>Yoga Setiawan</h5>
          </image>
          <button id="wa">Whatsapp</button>
          <button id="ig">Instagram</button>
          <button id="fb">Facebook</button>
          <button id="ms">Messanger</button>
          <button id="em">My Github</button>
        </div>
        <div className="endfooter ">
          <h5>Created By : Yoga Setiawan</h5>
        </div>
      </Container>
    </>
  );
};

export default Footer;
