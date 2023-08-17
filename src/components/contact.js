import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div class="container-fluid">
      <div class="p-5 text-center contact-us-header">
        <div class="mask">
          <div class="d-flex justify-content-center align-items-center h-100">
            <div class="text-white py-5">
              <h1 class="mb-3 py-5">Contact Us</h1>
            </div>
          </div>
        </div>
      </div>
      <div class="col-10 col-md-4 col-lg-4 pb-5 text-white order-0 mx-auto d-flex justify-content-center"></div>
      <h2 class="text-center">
        <strong>Call Us Or Visit</strong>
      </h2>
      <p class="d-flex justify-content-center pb-md-3 mx-auto">
        Visit our website to find our top photography.
      </p>
      <div class="d-md-flex d-block justify-content-center text-center mt-md-5 mt-2">
        <div class="col-12 col-md-2">
          <h5>
            <strong>Address</strong>
          </h5>
          <p>Waterloo,ON,Canada</p>
        </div>
        <div class="col-12 col-md-2">
          <h5>
            <strong>Email</strong>
          </h5>
          <p>photography@gmail.com</p>
        </div>
        <div class="col-12 col-md-2">
          <h5>
            <strong>Phone</strong>
          </h5>
          <p>226-789-8896 /&nbsp;966-578-9632</p>
        </div>
        <div class="col-12 col-md-2">
          <h5>
            <strong>Opening Time</strong>
          </h5>
          <p>Weekdays: 7am - 5pm Weekends: 10am – 6pm</p>
        </div>
      </div>
      <div class="row p-md-5" style={{ flexWrap: "wrap" }}>
        <div
          class="col-12 col-md-6 d-flex align-items-center "
          style={{ flex: 1, overflow: "hidden", maxHeight: "400px" }}
        >
          {/* Image source: https://unsplash.com/photos/SZtLK_W7vKo */}
          <img
            src="../photo-contact.jpg"
            alt="Photography"
            className="img-fluid"
          />
        </div>
        <div class="col-12 col-md-6 message-form p-2">
          <h1>
            <strong>Send Us A Text</strong>
          </h1>

          <form class="row g-3 ">
            <div class="mb-3 col-md-6">
              <label for="inputEmail4" class="form-label">
                Name
              </label>
              <input
                type="textr"
                class="form-control contact-input"
                id="inputEmail4"
                autocomplete="off"
              />
            </div>
            <div class="mb-3 col-md-6">
              <label for="inputPassword4" class="form-label">
                Email
              </label>
              <input
                type="email"
                class="form-control contact-input"
                id="inputPassword4"
                autocomplete="off"
              />
            </div>
            <div class="mb-3 col-12">
              <label for="inputAddress" class="form-label">
                Address
              </label>
              <input
                type="text"
                class="form-control contact-input"
                id="inputAddress"
                placeholder="1234 Main St"
                autocomplete="off"
              />
            </div>

            <div class="mb-3 col-12">
              <label for="exampleFormControlTextarea1" class="form-label">
                Write a Message
              </label>
              <textarea
                class="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea"
              ></textarea>
            </div>

            <div class="col-12">
              <button type="submit" class="btn btn-info message-btn">
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
