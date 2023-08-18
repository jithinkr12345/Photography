import React from "react";
import { Link } from "react-router-dom";
import vid3 from "../assets/vid/about.mp4";
import "../assets/css/about.css";

function About() {
  return (
    <>
      <div className="banner">
        <video autoPlay loop muted>
          <source src={vid3} type="video/mp4" />
        </video>
        <div className="content-overlay">
          <h1>About Us</h1>
          <p>Explore who we are.</p>
        </div>
      </div>
      <section>
        <div className="about-div container">
          <h3>More than a Decade of Service to the Creative Industry</h3>
          <p>
            We have been dedicated to supporting the creative spirit within the
            photographic community for over a decade. Our continuous commitment
            to excellence has established us as a pillar in the world of visual
            arts, serving as a beacon for both aspiring photographers and
            seasoned professionals. We have translated many dreams into
            spectacular reality via a legacy of innovation and collaboration.
          </p>
          <p>
            A genuine admiration for beauty and vision sits at the heart of our
            quest. We have been curating photographic events that showcase the
            convergence of art and technology for over ten years. We have given
            a canvas for photographers to express their distinct viewpoints,
            exchange stories, and explore the medium's limitless possibilities
            through exhibitions, workshops, and interactive activities.
          </p>
          <p>
            We encourage you to join us on this extraordinary trip that has
            lasted more than a decade. Our events provide an immersive
            experience that offers growth, discovery, and inspiration, whether
            you're an aspiring photographer looking for inspiration or a
            seasoned professional looking to connect. Stay up to speed on our
            upcoming events, workshops, and exhibitions by following us on
            Instagram. Let us all come together to celebrate photography's
            creativity, ingenuity, and transformational power.
          </p>
        </div>
      </section>
      <section>
        <div className="container">
          <h2 className="test-title">What Our Clients Say</h2>
          <div className="row test-div">
            <div className="test-card">
              <div className="test-content">
                <p className="test-text">
                  "Working with you has been a fantastic opportunity. Their
                  professionalism, inventiveness, and attention to detail
                  definitely distinguish them. I'm overjoyed with the outcome!"
                </p>
                <p className="test-author">
                  <span className="test-author-name">Kaitlin</span>
                  <span className="test-author-role">Manager, ABC</span>
                </p>
              </div>
            </div>
            <div className="test-card">
              <div className="test-content">
                <p className="test-text">
                  "I'm astounded by the caliber of their services. They
                  precisely caught the essence of our event and gave amazing
                  outcomes. Strongly recommended!"
                  <br />
                  <br />
                </p>
                <p className="test-author">
                  <span className="test-author-name">Libron</span>
                  <span className="test-author-role">
                    Marketing Manger, LibronTech
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="signup">
        <div className="container">
          <h2 className="test-title">Sign Up with Us</h2>
          <p className="subtitle">
            Keep up to date with the latest news and events.
          </p>
          <form className="form">
            <div className="form-group">
              <label for="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="Email"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default About;
