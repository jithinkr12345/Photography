import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-top footer text-muted">
      <div className="container-fluid bg-secondary">
        <div className="row p-3">
          <div className="col-10 col-md-5 col-lg-3  pb-5 mx-auto">
            <a className="navbar-brand text-white " href="/">
              <strong>Photography </strong>
            </a>
            <p className="text-white small pt-3 ">
            Hey! We are a group who organize photographic events and trips..
            </p>
            <div className="d-flex flex-column text-white justify-content-center">
              <p className="align-self-center ">Need Help?</p>
              <h3 className="align-self-center">909-899-8889</h3>
            </div>
            <div
              style={{ cursor: "pointer" }}
              className=" Footer-Icon text-white d-flex pt-3 justify-content-evenly"
            ></div>
          </div>
          <div className="col-4 col-md-2 text-white p-2 mx-auto">
            <h6>Information</h6>
            <hr />
            <ul className="list-group small">
              <li>
                <Link className="text-white" to="/about">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="text-white" to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-4 col-md-2 text-white p-2 mx-auto">
            <h6>Group 7</h6>
            <hr />
            <ul className="list-group small">
              <li>Kaitlin Bouopda</li>
              <li>Jithin</li>
              <li>Libron</li>
              <li>Ayushi</li>
            </ul>
          </div>
          <div className="col-10 col-md-6 col-lg-4 text-white p-2 mx-auto">
            <h6>Newsletter</h6>
            <hr />

            <p className="small pt-2">
              You can unsubscribe any time. For that purpose please visit our
              contact page.
            </p>
          </div>
        </div>
        <div className="row ">
          <div className="col-10 col-md-5 col-lg-4 text-white order-1 mx-auto d-flex ">
            <p className="small para text-center">
              Copyright 2023 <strong> Photography.</strong> All rights reserved.
              Powerd by Group7.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
