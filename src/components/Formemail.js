import { Container } from "react-bootstrap";
const formemail = () => {
  function Share() {
    var element = document.getElementById("yellow");
    element.classList.toggle("bgyellow");
  }
  function Share2() {
    var element = document.getElementById("yellow");
    element.classList.toggle("bggreen");
  }
  function Share3() {
    var element = document.getElementById("yellow");
    element.classList.toggle("bggred");
  }
  return (
    <Container>
      <div id="formemail">
        <div className="box-email-one">
          <h1>Let's get in touch</h1>
          <span>
            Send us the feedback you want to give us
            <br /> via this email form, warm greetings from us .<br />
            Thnks...
          </span>
          <i class="bi bi-geo-alt">
            <span>Jln.Pradah Indah Gang Macan No 16</span>
          </i>
          <i class="bi bi-envelope-at">
            <span>yogas9079@gmail.com</span>
          </i>
          <i class="bi bi-telephone-inbound">
            <span>0858-5729-2852</span>
          </i>
          <h2>Connect with us :</h2>
          <div id="icon-box-one">
            <a href="p">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="p">
              <i className="bi bi-whatsapp "></i>
            </a>
            <a href="p">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="p">
              <i className="bi bi-messenger"></i>
            </a>
          </div>
        </div>
        <div
          className="box-email-two"
          data-descr="collection of words and punctuation"
          id="yellow"
        >
          <h1>Contact Us</h1>
          <form
            action="https://formsubmit.co/7a107c04ebd450d4fc60655d01cce42e"
            method="POST"
          >
            <input
              required
              placeholder="Username"
              type="text"
              id="exampleFormControlInput1"
              name="name"
              className="i-name"
            />
            <input
              required
              placeholder="Email"
              type="email"
              id="exampleFormControlInput2"
              name="email"
              className="i-email"
            />
            <input
              required
              placeholder="Phone"
              type="number"
              id="exampleFormControlInput3"
              name="Phone"
              className="i-phone"
            />
            <textarea
              required
              placeholder="Message"
              type="textarea"
              id="exampleFormControlInput5"
              name="message"
              className="i-message"
            />
            <input type="submit" value="Send Me" id="kirim" />
          </form>
          <input type="button" id="submitkuy" onClick={() => Share()} />
          <input type="button" id="submitkuyy" onClick={() => Share2()} />
          <input type="button" id="submitkuyyy" onClick={() => Share3()} />
        </div>{" "}
      </div>
      <div id="testi-page-res">
        <div className="container" id="intro-testi">
          <div id="atur-intro-testi">
            <h5>Serenity exists in reliable music listeners</h5>
            <h4>Testimonials</h4>
          </div>
          <span id="span1">
            <i
              class="bi bi-person-circle"
              style={{ fontSize: "40px", color: "lightorange" }}
            ></i>
            <br />
            <span style={{ color: "yellow", fontSize: "20px" }}>☆☆☆☆☆</span>
            <br />
            Musik Mudah Akses Dan Nyaman Didengar Oleh Pengguna/User
            <br /> Dan Penggunaan Kuota Yang Sangat Irit,Dapat Juga Digunakan
            Saat Layar Mati
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
            <br /> Dan Menjadi Relatifitas Pengisi Di Waktu Kosong Atau Sedang
            Galau Joss
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
            Intinya Tetap Trus MengUpdate Fitur Fitur Yang Baru Baru Agar Lebih
            Dari Komplit
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
      </div>
    </Container>
  );
};

export default formemail;
{
  /* <form
          action="https://formsubmit.co/7a107c04ebd450d4fc60655d01cce42e"
          method="POST"
        >
          <label for="exampleFormControlInput1" id="labelnaame">
            Name :
          </label>
          <input
            required
            placeholder="Your Name"
            type="text"
            id="exampleFormControlInput1"
            name="name"
            className="i-email border-info"
          />
          <br />
          <label for="email" id="labelemail">
            Email :
          </label>
          <input
            required
            type="email"
            placeholder="Your Email"
            id="email"
            name="i-email"
            className="i-email border-info"
          />
          <br />
          <label for="message" id="labelemail">
            Pesan :
          </label>
          <textarea
            required
            placeholder="Your Message"
            type="text"
            id="message"
            name="message"
            className="message border-info"
          />
          <br />
          <input
            type="submit"
            value="Send Me"
            id="send"
            onClick={() => kirim()}
          />
          <div
            id="clickloading"
            className="spinner-border text-info loadingof"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </form> */
}
