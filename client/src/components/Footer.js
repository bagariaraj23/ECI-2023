import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";
import "../App.css";
const Footer = () => {
  return (
    <>
      <footer className="py-4 drk">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4" style={{marginLeft:70}}>
              <h4 className="text-white mb-4">Contact Us</h4>
              <div >
                <address className="text-white fs-6">
                Nirvachan Sadan, <br />Ashoka Road, New Delhi <br />
                  PinCode: 110001
                </address>
                <a
                  href="tel: 23052220, 23052221"
                  className="mt-3 d-block mb-1 text-white"
                >
                   23052220, 23052221
                </a>
                <a
                  href="mailto:complaints@eci.gov.in"
                  className="mt-2 d-block mb-0 text-white"
                >
                 complaints@eci.gov.in
                </a>
                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <a className="text-white" href="#">
                    <BsLinkedin className="fs-4" />
                  </a>
                  <a className="text-white" href="#">
                    <BsInstagram className="fs-4" />
                  </a>
                  <a className="text-white" href="#">
                    <BsGithub className="fs-4" />
                  </a>
                  <a className="text-white" href="#">
                    <BsYoutube className="fs-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-link d-flex flex-column">
                <Link to="/privacy-policy" className="text-white py-2 mb-1">
                  Privacy Policy
                </Link>
                <Link to="/term-conditions" className="text-white py-2 mb-1">
                  Terms & Conditions
                </Link>
                <Link className="text-white py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-3" style={{marginLeft:125}}>
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">About Us</Link>
                <Link className="text-white py-2 mb-1">Blog</Link>
                <Link className="text-white py-2 mb-1">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4 drk">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}; Powered by Developer's Corner
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
