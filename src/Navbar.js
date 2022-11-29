import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      {" "}
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top"
        style={{ backgroundColor: "black", position: "relative" }}
      >
        <div className="container-fluid">
          <button
            className="navbar-brand text-light"
            style={{
              backgroundColor: "black",
              borderRadius: "10px",
              borderColor: "orange",
              borderWidth: "0.4mm",
              fontFamily: "Sofia",
            }}
          >
            Venom Music
          </button>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse fw-bold" id="navbarNav">
            <ul
              className="navbar-nav ms-auto"
              style={{ fontFamily: "'Source Serif Pro', serif" }}
            >
              <li className="nav-item">
                <Link exact to="/" className="nav-link text-light">
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link exact to="/about" className="nav-link text-light">
                  ABOUT
                </Link>
              </li>
              <li className="nav-item">
                <Link exact to="/blog" className="nav-link text-light">
                  BLOG
                </Link>
              </li>
              <li className="nav-item">
                <Link exact to="/Reservation" className="nav-link text-light">
                  RESERVATIONS
                </Link>
              </li>
              <li className="nav-item"></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
