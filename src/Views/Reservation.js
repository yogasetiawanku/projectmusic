import Navbar from "../Navbar";
import Formemail from "../components/Formemail";
const Reservation = () => {
  return (
    <>
      <div className="bg-res-me">
        <Navbar />
        <center>
          <h1 id="text-reser">RESERVATIONS</h1>
          <h3 id="text-reser-h3">
            Explore More About Us
            <br />
            For Me
          </h3>
        </center>
        <center>
          <image className="profil-reser"></image>
        </center>
        <Formemail />
      </div>
      <div id="endres">
        <h5>Created By : Yoga Setiawan</h5>
      </div>
    </>
  );
};

export default Reservation;
