import React from 'react';
import '../style/Footer.css';
function Footer(props) {
    return (
        <>
  <footer className="container-fluid mt-5 pd-5">
    <div className="footer container ">
      <div className="row">
        <div className="col-12 col-xl-3">
          <div className="app ">
            <h5 className="text-start text-light">ZANDO APP</h5>
            <img
              width="100px"
              src="https://zandokh.com/image/catalog/logo/qr_code_app.png"
              alt=""
            />
          </div>
        </div>
        <div className="col-12 col-xl-3">
          <div className="link">
            <h5 className="text-start text-light">FOLLOW US</h5>
            <ul className="text text-light  ">
              <li>
                <a href="">
                  <i className="bi bi-facebook" /> FaceBook
                </a>
              </li>
              <li>
                <a href="">
                  <i className="bi bi-instagram" /> Instagram
                </a>
              </li>
              <li>
                <a href="">
                  <i className="bi bi-tiktok" /> Tik Tok
                </a>
              </li>
              <li>
                <a href="">
                  <i className="bi bi-youtube" /> YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* CUSTOMER SERVICE */}
        <div className="col-12 col-xl-3">
          <div className="link">
            <h5 className="text-start text-light">CUSTOMER SERVICE</h5>
            <ul className="text-light">
              <li>
                <a href="">
                  <i className="bi bi-question-circle" /> Online exchange policy
                </a>
              </li>
              <li>
                <a href="">
                  <i className="bi bi-shield-shaded" /> Privacy Policy
                </a>
              </li>
              <li>
                <a href="">
                  <i className="bi bi-whatsapp" /> FAQs &amp; guides
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* We Accept */}
        <div className="col-12 col-xl-3">
          <div className="accept text-light">
            <h5>WE ACCEPT</h5>
            <img
              width="190px"
              src="https://zandokh.com/image/catalog/logo/web-footer/We-accept-payment%E2%80%93for-web-footer-1.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </footer>
  <div className="copyright bg-dark text-light text-center ">
    <p>© 2024 Copyright: ZANDO | All Right Reserve</p>
  </div>
</>

    );
}

export default Footer;