import { Container } from "react-bootstrap";
import Images from "./Images";
// import Form from "./Form";

const IntroPage = () => {
  return (
    <div className="open">
      <div data-aos={"fade-up"} className="div2">
        <Container>
          <div className="container">
            <div id="aboutme">
              <h4 className="h4-intro">
                Hey, This is the Place for Various Music
              </h4>
              <h4 className="h4-intro-2 fw-bold">Welcome To Our Music</h4>
            </div>
          </div>
          <div className="container">
            <div className="div-about">
              <h3>About</h3>
              <h4 className="fw-bold">
                TEMPAT BERKUMPULNYA MUSIC DARI TAHUN KETAHUN
              </h4>
              <h5>
                Music Pop,Dangdut,Regaae,Ska,Rock Dll Semua Akan Diupdate Setiap
                Harinya.
                <br />
                <br />
                Terus Selalu Pantau Updatannya Tiap Harinya,Never Give Up To
                You.
              </h5>
              <a href="www.google.com">
                <i class="bi bi-music-note-beamed"></i>
                <h5>LEARN MORE ABOUT US</h5>
              </a>
            </div>
            <center>
              <div className="container" id="containerr">
                <h3>More peace of mind</h3>
                <h2>Come Down & Listen Your Music</h2>
              </div>
            </center>
            <div className="container" id="vieralate">
              <h4>Widy Soediro Nichlany</h4>
              <h3 data-aos="fade-right" data-aos-duration="500">
                Music On The vierratale Band
              </h3>
              <div className="long1"></div>
              <h5>First Upload Music</h5>
              <div className="long2"></div>
            </div>
            <div className="container" id="lastchild">
              <h4>Virgoun Tambunan</h4>
              <h3
                data-aos="fade-left"
                data-aos-easing="ease-in-sine"
                data-aos-duration="500"
              >
                Music On The Last Child Band
              </h3>
              <div className="long3"></div>
              <h5>Update Upload Music</h5>
              <div className="long4"></div>
            </div>

            <div className="container" id="text-stay">
              <h3>stay on your my music venom</h3>
              <div className="atur-text-stay">
                <div className="long5"></div>
                <h4 className="fw-bold">Relaxing music</h4>
                <div className="long6"></div>
                <h1>1000+ Album On Music</h1>
              </div>
              <div className="atur-posisi-img">
                <image className="image-music-viera"></image>
                <image className="image-music-lastchild"></image>
                <image className="image-intro"></image>
                <image className="image-album-walker"></image>
                <image className="image-album-marsmellow"></image>
                <image className="image-album-tulus"></image>
                <image className="image-album-nikeardila"></image>
                <image className="image-album-denny"></image>
                <image className="image-album-four"></image>
              </div>
            </div>
            <div className="container" id="text-alanxmars">
              <h3>World Music Collaborations</h3>
              <div className="long7"></div>
              <h4 className="fw-bold">Alan Walker X Marsmellow</h4>
              <div className="long8"></div>
              <h1 data-aos="zoom-in">
                a mix of two of the coolest and most inspired musicians
              </h1>
            </div>
            <div className="container" id="saran">
              <h3>National Music Day Every Day</h3>
              <h4>Join Our Music Club</h4>
              <h5>& DAPATKAN PEMBARUAN PADA ACARA KHUSUS</h5>
              <input className="saran-input"></input>{" "}
              <button>PINT ME UP</button>
              <input id="checkbox" type={"checkbox"}></input>
              <h2>Accept GDPR Terms</h2>
            </div>
            <image className="image-saran-music"></image>
            {/* <div className="container" id="saran">
              <h3>Explore More About Us</h3>
              <h4>Give Feedback About Us </h4>
            </div> */}
            {/* <Form /> */}
            <div className="container" id="intro-testi">
              <h5>Serenity exists in reliable music listeners</h5>
              <h4>Testimonials</h4>
              <span id="span1">
                <i
                  class="bi bi-person-circle"
                  style={{ fontSize: "40px", color: "lightorange" }}
                ></i>
                <br />
                <span style={{ color: "yellow", fontSize: "20px" }}>☆☆☆☆☆</span>
                <br />
                Musik Mudah Akses Dan Nyaman Didengar Oleh Pengguna/User
                <br /> Dan Penggunaan Kuota Yang Sangat Irit,Dapat Juga
                Digunakan Saat Layar Mati
                <br /> Sangat Rekomended.
                <br />
              </span>
              <span id="span2">
                <i
                  class="bi bi-person-circle"
                  style={{ fontSize: "40px", color: "lightblue" }}
                ></i>
                <br />
                <span style={{ color: "yellow", fontSize: "20px" }}>☆☆☆☆☆</span>
                <br />
                Fitur Sangat Komplit Mudah Dipahami Mudah Diakses
                <br /> Dan Menjadi Relatifitas Pengisi Di Waktu Kosong Atau
                Sedang Galau Joss
                <br /> Sangat Rekomended.
                <br />
              </span>
              <span id="span3">
                <i
                  class="bi bi-person-circle"
                  style={{ fontSize: "40px", color: "lightgreen" }}
                ></i>
                <br />
                <span style={{ color: "yellow", fontSize: "20px" }}>☆☆☆☆☆</span>
                <br />
                Intinya Tetap Trus MengUpdate Fitur Fitur Yang Baru Baru Agar
                Lebih Dari Komplit
                <br /> Intinya Sangat Enak Bangat Saat Didengar
                <br /> Sangat Rekomended.
                <br />
              </span>
              <span id="span4">
                <i
                  class="bi bi-person-circle"
                  style={{ fontSize: "40px", color: "yellow" }}
                ></i>
                <br />
                <span style={{ color: "yellow", fontSize: "20px" }}>☆☆☆☆☆</span>
                <br />
                Tidak Ada Lawan Nich Website
                <br /> Intinya Sangat Sangat Rekomendasi Buat Kaum Rebahan Atau
                Gabut,Yuhuu.
                <br /> Sangat Rekomended.
                <br />
              </span>
            </div>
            <Images />
          </div>
          <div>
            <video
              className="rmp-object-fit-contain rmp-video"
              style={{
                position: "absolute",
                width: "200px",
                height: "200px",
                marginTop: "2000px",
              }}
              src="blob:https://www.reykjavik.pro/be362bad-391b-4183-8f52-135bda2c9360"
            />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default IntroPage;
