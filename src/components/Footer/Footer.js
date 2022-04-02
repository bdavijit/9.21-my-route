import React from "react";
import { Link } from "react-router-dom";
import "./DarkFooter2.css";

const Footer = () => {
  return (
    <>
      <section>
        <div className="footerBox  w-full p-5">
          <div className="flex flex-col">
            <h1 className="text-4xl text-rose-400 mb-3" >About</h1>
            <Link className="text-xl" to="/AboutUs">
              About Us
            </Link>
            <Link className="text-xl" to="/PrivacyPolicy">
              Privacy Policy
            </Link>
            <Link className="text-xl" to="/WhywithUs">
              Why with Us
            </Link>
            <Link className="text-xl" to="/TermsConditions">
              Terms & Conditions
            </Link>
          </div>
          <div className="flex flex-col">
          <h1 className="text-4xl text-rose-400 mb-3">Contact</h1>
            <Link className="text-xl" to="/ContactUs">
            Contact Us
            </Link>
          </div>
          <div className="flex flex-col">
          <h1 className="text-4xl text-rose-400 mb-3">Address</h1>
          <p className="text-xl">
          Level-4, 34, Awal Centre, Banani, Dhaka
          </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
