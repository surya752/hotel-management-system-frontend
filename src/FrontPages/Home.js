import Navbar from '../Navbar'
import React, { Component } from 'react';

import '../FrontPages/Home.css'
import Bed1 from "../Images/bed1.jpg";
import Bed2 from "../Images/bed2.jpg";
import Customer1 from"../Images/customer1.jpg";
import Customer2 from"../Images/customer2.jpg";
import Customer3 from"../Images/customer3.jpg";

function Home() {
  return (
    <div>
      <Navbar />

        <section className="rooms sec-width" id="rooms">
          <div className="title">
            <h2>Rooms</h2>
          </div>
          <div className="rooms-container">
            <article className="room">
              <div className="room-image">
                <img src={Bed1} alt="room image" />
              </div>
              <div className="room-text">
                <h3>Luxury Rooms</h3>
                <ul>
                  <li>
                    <i className="fas fa-arrow-alt-circle-right"></i>
                    These rooms are designed to provide a luxurious and indulgent experience for guests. 
                  </li>
                </ul>
               <p>Luxury rooms are typically furnished with high-end furniture, plush bedding, and premium materials to enhance comfort and aesthetics.</p>
               <p>You can often find state-of-the-art technology in luxury rooms, including large flat-screen TVs, high-speed internet access, and integrated entertainment systems.</p>
                      <p className="rate">
                  <span>Rs.8000.00 /</span> Per Night
                </p>
              {/* <a href='/Button'> <button type="button" className="btn">Book now</button></a> */}
              </div>
            </article>
            <article className="room">
              <div className="room-image">
                <img src={Bed2} alt="room image" />
              </div>
              <div className="room-text">
                <h3>Guest Rooms</h3>
                <ul>
                  <li>
                    <i className="fas fa-arrow-alt-circle-right"></i>
                    It’s common for hotels to list their rooms based on how many people the room is equipped to handle. Here’s what you can expect when you see rooms labeled in this way.
                  </li>
                </ul>
            <p>Single room: these rooms are assigned to one person or a couple. It may have one or more beds, but the size of the bed depends on the hotel. Some single rooms have a twin bed, most will have a double, few will have a queen bed.</p>
            <p>Quad room: a quad room is set up for four people to stay comfortably. This means the room will have two double beds. Some, however, may be set up dormitory-style with bunks or twins, so check with the property to make sure.</p>
               <p className="rate">
                  <span>Rs.3000.00/</span> Per Night
                </p>
              {/* <a href='/Button'> <button type="button" className="btn">Book now</button></a> */}
              </div>
        </article>
          </div>
        </section>


        <section className="customers" id="customers">
          <div className="sec-width">
            <div className="title">
              <h2>customers</h2>
            </div>
            <div className="customers-container">
            
              <div className="customer">
                <div className="rating">
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="far fa-star"></i></span>
                </div>
                <h3>We Loved it</h3>
                <p>It was great pleasure to spend my precious time in such a comfortable and friendly atmosphere.</p>
                <img src={Customer1} alt="customer image" />
                <span>Teja Rekhapalli, India</span>
              </div>
             
              <div className="customer">
                <div className="rating">
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="far fa-star"></i></span>
                </div>
                <h3>Comfortable Living</h3>
                <p>Below you will find a collection of motivating, happy, and encouraging living room quotes, living room sayings, and living room proverbs.</p>
                <img src={Customer2} alt="customer image" />
                <span>Naveen Nammu, India</span>
              </div>
              <div className="customer">
                <div className="rating">
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="far fa-star"></i></span>
                </div>
                <h3>Nice Place</h3>
                <p>Very clean rooms, very good shower & bathroom. Very comfortable beds, very nice owners. Decoration of rooms & breakfast room nice. We would stay here again.</p>
                <img src={Customer3} alt="customer image" />
                <span>Prasad, India</span>
              </div>
           
            </div>
          </div>
        </section>
        <div className="footer">
          <div className="footer-container">
            <div>
              <h2>About Us </h2>
              <p>A place that has rooms in which people can stay especially when they are traveling .</p>
              <p>place that provides food, lodging, and other services for paying guests. check into a hotel.</p>
            </div>

            <div>
              <h2>Useful Links</h2>
              <a href="#">facebook</a>
              <a href="#">Rooms</a>
              <a href="#">Subscription̥</a>
              <a href="#">Gift Card</a>
            </div>

            <div>
              <h2>Privacy</h2>
              <a href="#">Career</a>
              <a href="#">About Us</a>
              <a href="#">Contact Us</a>
              <a href="#">Services</a>
            </div>

            <div>
              <h2>Have A Question</h2>
              <div className="contact-item">
                <span>
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                <span>
                  Rajahmundry , East Godavari , Andhra Pradesh 
                </span>
              </div>
              <div className="contact-item">
                <span>
                  <i className="fas fa-phone-alt"></i>
                </span>
                <span>
                  +xxxxxxxxxxxxxxxxx
                </span>
              </div>
              <div className="contact-item">
                <span>
                  <i className="fas fa-envelope"></i>
                </span>
                <span>
                  suryarekhapalli752@gmail.com
                </span>
             
              </div>

            </div>
          </div>
        </div>
      <div className="footer-bottom">
        <p>copyright &copy; <a href="#"> Surya Rekhapalli</a>  </p>
       
      </div>

      </div>
      
   
  )
}

export default Home;