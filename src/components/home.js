import React from 'react';
import video1 from "../assets/vid/nature.mp4";
import img1 from "../assets/img/destination-1.jpg";
import img2 from "../assets/img/destination-2.jpg";
import img3 from "../assets/img/destination-3.jpg";
import img4 from "../assets/img/destination-4.jpg";
import img5 from "../assets/img/destination-5.jpg";
import img6 from "../assets/img/destination-6.jpg";
import img7 from "../assets/img/advent1.webp";
import img8 from "../assets/img/advent2.webp";
import img9 from "../assets/img/advent3.webp";
import img10 from "../assets/img/advent4.webp";
import img11 from "../assets/img/advent5.webp";
import img12 from "../assets/img/advent6.webp";
import "../assets/css/home.css";

function Home(){
	return(
		<>
			<div className="banner">
				<video autoPlay loop muted>
					<source src={video1} type="video/mp4" />
				</video>
				<div className="content-overlay">
					<h1>Welcome to Photography Events</h1>
					<p>Explore our amazing events.</p>
				</div>
			</div>
			<section className="destination">
				<div className="container-fluid py-5">
					<div className="container pt-5 pb-3">
						<div className="dest-header text-center mb-3 pb-3">
							<h6 className="text-primary text-uppercase">Event Locations</h6>
							<h1>Explore Top Events in Various Countries</h1>
						</div>
						<div className="row">
							<div className="col-lg-4 col-md-6 mb-4">
								<div className="destination-item position-relative overflow-hidden mb-2">
									<img className="img-fluid" src={img1} alt=""/>
									<a className="destination-overlay text-white text-decoration-none" href="">
										<h5 className="text-white">United States</h5>
										<span>100 Cities</span>
									</a>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 mb-4">
								<div className="destination-item position-relative overflow-hidden mb-2">
									<img className="img-fluid" src={img2} alt=""/>
									<a className="destination-overlay text-white text-decoration-none" href="">
										<h5 className="text-white">United Kingdom</h5>
										<span>60 Cities</span>
									</a>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 mb-4">
								<div className="destination-item position-relative overflow-hidden mb-2">
									<img className="img-fluid" src={img3} alt=""/>
									<a className="destination-overlay text-white text-decoration-none" href="">
										<h5 className="text-white">Australia</h5>
										<span>30 Cities</span>
									</a>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 mb-4">
								<div className="destination-item position-relative overflow-hidden mb-2">
									<img className="img-fluid" src={img4} alt=""/>
									<a className="destination-overlay text-white text-decoration-none" href="">
										<h5 className="text-white">India</h5>
										<span>85 Cities</span>
									</a>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 mb-4">
								<div className="destination-item position-relative overflow-hidden mb-2">
									<img className="img-fluid" src={img5} alt=""/>
									<a className="destination-overlay text-white text-decoration-none" href="">
										<h5 className="text-white">South Africa</h5>
										<span>25 Cities</span>
									</a>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 mb-4">
								<div className="destination-item position-relative overflow-hidden mb-2">
									<img className="img-fluid" src={img6} alt=""/>
									<a className="destination-overlay text-white text-decoration-none" href="">
										<h5 className="text-white">Indonesia</h5>
										<span>20 Cities</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="adventure reveal">
					<div className="container">
						<div className="title text-center">
							<h6>Our Clients Choice</h6>
							<h1 className="title-blue">Adventure Event Travel</h1>
						</div>
						<div className="container">
							<div className="row">
								<div className="col-sm-6 col-lg-4 img-div">
									<div className="media">
										<img className="mr-4 img-adv" src={img7} alt="Web Development"/>
										<div className="media-body">
											<h4><strong>Trekking/Hiking</strong></h4>
											Traveling on foot through remote locations has always been at the core of adventure travel.
										</div>
									</div>
								</div>
								<div className="col-sm-6 col-lg-4 img-div">
									<div className="media">
										<img className="mr-4 img-adv" src={img8} alt="Web Development"/>
										<div className="media-body">
											<h4><strong>Cycling/Mountain Biking</strong></h4>
											Cycling trips are another popular method of transportation and category for adventure travel.
										</div>
									</div>
								</div>
								<div className="col-sm-6 col-lg-4 img-div">
									<div className="media">
										<img className="mr-4 img-adv" src={img9} alt="Web Development"/>
										<div className="media-body">
											<h4><strong>Canoe/Kayaking</strong></h4>
											Canoeing and kayaking trips are another popular way to experience a destination, granting travelers access to lakes, rivers, and even oceans.
										</div>
									</div>
								</div>
								<div className="col-sm-6 col-lg-4 img-div">
									<div className="media">
										<img className="mr-4 img-adv" src={img10} alt="Web Development"/>
										<div className="media-body">
											<h4><strong>Climbing/Mountaineering</strong></h4>
											While not often viewed as a form of adventure travel, mountaineering and climbing expeditions still fall under the same very broad umbrella.
										</div>
									</div>
								</div>
								<div className="col-sm-6 col-lg-4 img-div">
									<div className="media">
										<img className="mr-4 img-adv" src={img11} alt="Web Development"/>
										<div className="media-body">
											<h4><strong>Skiing/Snowshoeing</strong></h4>
											Some of the best adventures take place in the snow, with skiing, snowboarding, and snowshoeing offering great experiences for travelers who don't mind colder weather.
										</div>
									</div>
								</div>
								<div className="col-sm-6 col-lg-4 img-div">
									<div className="media">
										<img className="mr-4 img-adv" src={img12} alt="Web Development"/>
										<div className="media-body">
											<h4><strong>Dogsledding</strong></h4>
											Horses aren't the only animals that get to join us on our adventurous travels. Dogsledding is another exciting activity that travelers can indulge in if so inclined.
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

		</>
		);
}

export default Home;