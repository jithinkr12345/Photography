import React from "react";
import { Link } from "react-router-dom";
import vid2 from "../assets/vid/contact.mp4"

function Contact() {
  return (
    <div className="">
      <div className="banner">
				<video autoPlay loop muted>
					<source src={vid2} type="video/mp4" />
				</video>
				<div className="content-overlay">
					<h1>Contact Us</h1>
					<p>Explore our amazing events.</p>
				</div>
			</div>
      {/* <div className="p-5 text-center contact-us-header">
        <div className="mask">
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white py-5">
              <h1 className="mb-3 py-5">Contact Us</h1>
            </div>
          </div>
        </div>
      </div> */}
      <div className="col-10 col-md-4 col-lg-4 pb-5 text-white order-0 mx-auto d-flex justify-content-center"></div>
      <h2 className="text-center">
        <strong>Call Us Or Visit</strong>
      </h2>
      <p className="d-flex justify-content-center pb-md-3 mx-auto">
        Visit our website to find our top photography.
      </p>
      <div className="d-md-flex d-block justify-content-center text-center mt-md-5 mt-2">
        <div className="col-12 col-md-2">
          <h5>
            <strong>Address</strong>
          </h5>
          <p>Waterloo,ON,Canada</p>
        </div>
        <div className="col-12 col-md-2">
          <h5>
            <strong>Email</strong>
          </h5>
          <p>photography@gmail.com</p>
        </div>
        <div className="col-12 col-md-2">
          <h5>
            <strong>Phone</strong>
          </h5>
          <p>226-789-8896 /&nbsp;966-578-9632</p>
        </div>
        <div className="col-12 col-md-2">
          <h5>
            <strong>Opening Time</strong>
          </h5>
          <p>Weekdays: 7am - 5pm Weekends: 10am – 6pm</p>
        </div>
      </div>
      <div className="row p-md-5" style={{ flexWrap: "wrap" }}>
        <div
          className="col-12 col-md-6 d-flex align-items-center "
          style={{ flex: 1, overflow: "hidden", maxHeight: "400px" }}
        >
          {/* Image source: https://unsplash.com/photos/SZtLK_W7vKo */}
          <img
            src="../photo-contact.jpg"
            alt="Photography"
            className="img-fluid"
          />
        </div>
        <div className="col-12 col-md-6 message-form p-2">
          <h1>
            <strong>Send Us A Text</strong>
          </h1>

          <form className="row g-3 ">
            <div className="mb-3 col-md-6">
              <label htmlFor="inputEmail4" className="form-label">
                Name
              </label>
              <input
                type="textr"
                className="form-control contact-input"
                id="inputEmail4"
                autoComplete="off"
              />
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="inputPassword4" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control contact-input"
                id="inputPassword4"
                autoComplete="off"
              />
            </div>
            <div className="mb-3 col-12">
              <label htmlFor="inputAddress" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control contact-input"
                id="inputAddress"
                placeholder="1234 Main St"
                autoComplete="off"
              />
            </div>

            <div className="mb-3 col-12">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">
                Write a Message
              </label>
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea"
              ></textarea>
            </div>

            <div className="col-12">
              <button type="submit" className="btn btn-info message-btn">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
