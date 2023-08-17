import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer class="border-top footer text-muted">
      <div class="container-fluid bg-secondary">
        <div class="row p-3">
          <div class="col-10 col-md-5 col-lg-3  pb-5 mx-auto">
            <a class="navbar-brand text-white " href="/">
              <strong>Photography </strong>
            </a>
            <p class="text-white small pt-3 ">
              Hey! We are a group that develops and produces products of the
              highest calibre and standards.
            </p>
            <div class="d-flex flex-column text-white justify-content-center">
              <p class="align-self-center ">Need Help?</p>
              <h3 class="align-self-center">909-899-8889</h3>
            </div>
            <div
              style={{ cursor: "pointer" }}
              class=" Footer-Icon text-white d-flex pt-3 justify-content-evenly"
            ></div>
          </div>
          <div class="col-4 col-md-2 text-white p-2 mx-auto">
            <h6>Information</h6>
            <hr />
            <ul class="list-group small">
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
          <div class="col-4 col-md-2 text-white p-2 mx-auto">
            <h6>Group 7</h6>
            <hr />
            <ul class="list-group small">
              <li>Kaitlin Bouopda - 8812719</li>
              <li>Jithin</li>
              <li>Libron</li>
              <li>Ayushi</li>
            </ul>
          </div>
          <div class="col-10 col-md-6 col-lg-4 text-white p-2 mx-auto">
            <h6>Newsletter</h6>
            <hr />

            <p class="small pt-2">
              You can unsubscribe any time. For that purpose please visit our
              contact page.
            </p>
          </div>
        </div>
        <div class="row ">
          <div class="col-10 col-md-5 col-lg-4 text-white order-1 mx-auto d-flex ">
            <p class="small para text-center">
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
