
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {

  // Booking form submission
  const handleBookingSearch = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const checkIn = formData.get("checkIn");
    const checkOut = formData.get("checkOut");
    const guests = formData.get("guests");
    const roomType = formData.get("roomType");

    if (checkIn >= checkOut) {
      alert("Check-out date must be after check-in date.");
      return;
    }

    alert(
      `Booking Search\n\n` +
      `Check-in: ${checkIn}\n` +
      `Check-out: ${checkOut}\n` +
      `Guests: ${guests}\n` +
      `Room Type: ${roomType}`
    );
  };

  // Room details
  const rooms = [
    {
      name: "Deluxe Room",
      description: "Spacious room with modern amenities.",
      price: 120,
      image:
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Executive Suite",
      description: "Premium comfort with elegant interiors.",
      price: 200,
      image:
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Family Room",
      description: "Comfortable stay for the whole family.",
      price: 180,
      image:
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="home-page">

      {/* ================= NAVBAR ================= */}

      <nav className="home-navbar">

        <Link to="/" className="home-logo">
          <h2>Grand Horizon</h2>
          <span>HOTEL & RESORT</span>
        </Link>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#rooms">Rooms</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="nav-buttons">

          <Link to="/login" className="login-link">
            Login
          </Link>

          <Link to="/signup" className="signup-link">
            Sign Up
          </Link>

        </div>

      </nav>


      {/* ================= HERO SECTION ================= */}

      <section className="hero-section" id="home">

        <div className="hero-content">

          <span className="hero-subtitle">
            WELCOME TO GRAND HORIZON
          </span>

          <h1>
            Experience Luxury.
            <br />
            Experience Comfort.
          </h1>

          <p>
            Discover a perfect blend of elegance, comfort,
            and exceptional hospitality. Your unforgettable
            stay begins here.
          </p>

          <a href="#rooms" className="hero-button">
            Explore Our Rooms
          </a>

        </div>

      </section>


      {/* ================= BOOKING SECTION ================= */}

      <section className="booking-section">

        <h2>Book Your Stay</h2>

        <form
          className="booking-form"
          onSubmit={handleBookingSearch}
        >

          {/* Check-in Date */}
          <div className="booking-field">

            <label htmlFor="checkIn">
              Check-in
            </label>

            <input
              type="date"
              id="checkIn"
              name="checkIn"
              required
            />

          </div>


          {/* Check-out Date */}
          <div className="booking-field">

            <label htmlFor="checkOut">
              Check-out
            </label>

            <input
              type="date"
              id="checkOut"
              name="checkOut"
              required
            />

          </div>


          {/* Guests */}
          <div className="booking-field">

            <label htmlFor="guests">
              Guests
            </label>

            <select
              id="guests"
              name="guests"
              defaultValue="2"
            >
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5">5+ Guests</option>
            </select>

          </div>


          {/* Room Type */}
          <div className="booking-field">

            <label htmlFor="roomType">
              Room Type
            </label>

            <select
              id="roomType"
              name="roomType"
              defaultValue="All Rooms"
            >
              <option value="All Rooms">
                All Rooms
              </option>

              <option value="Deluxe Room">
                Deluxe Room
              </option>

              <option value="Executive Suite">
                Executive Suite
              </option>

              <option value="Family Room">
                Family Room
              </option>
            </select>

          </div>


          {/* Search Button */}
          <button
            type="submit"
            className="search-button"
          >
            Search Rooms
          </button>

        </form>

      </section>


      {/* ================= ABOUT SECTION ================= */}

      <section className="about-section" id="about">

        <div className="about-image">

          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80"
            alt="Grand Horizon hotel exterior"
          />

        </div>


        <div className="about-content">

          <span className="section-subtitle">
            ABOUT GRAND HORIZON
          </span>

          <h2>
            A Premier Destination
            for Your Perfect Stay
          </h2>

          <p>
            At Grand Horizon, we believe every stay should
            be an unforgettable experience. We combine
            luxurious accommodation, exceptional service,
            and modern facilities to make your visit
            truly special.
          </p>

          <a
            href="#services"
            className="about-button"
          >
            Discover More
          </a>

        </div>

      </section>


      {/* ================= SERVICES SECTION ================= */}

      <section className="services-section" id="services">

        <div className="section-heading">

          <span className="section-subtitle">
            EXPERIENCE MORE
          </span>

          <h2>Our Services</h2>

          <p>
            Enjoy exceptional facilities designed for
            your comfort and relaxation.
          </p>

        </div>


        <div className="services-grid">

          <div className="service-card">

            <div className="service-icon">
              🍽️
            </div>

            <h3>Fine Dining</h3>

            <p>
              Enjoy delicious meals prepared by our
              experienced chefs.
            </p>

          </div>


          <div className="service-card">

            <div className="service-icon">
              🏊
            </div>

            <h3>Swimming Pool</h3>

            <p>
              Relax and refresh yourself in our
              beautiful swimming pool.
            </p>

          </div>


          <div className="service-card">

            <div className="service-icon">
              💆
            </div>

            <h3>Spa & Wellness</h3>

            <p>
              Experience relaxation and rejuvenation
              through our wellness services.
            </p>

          </div>


          <div className="service-card">

            <div className="service-icon">
              🛎️
            </div>

            <h3>Room Service</h3>

            <p>
              Enjoy convenient and attentive service
              throughout your stay.
            </p>

          </div>

        </div>

      </section>


      {/* ================= ROOMS SECTION ================= */}

      <section className="rooms-section" id="rooms">

        <div className="section-heading">

          <span className="section-subtitle">
            FIND YOUR PERFECT STAY
          </span>

          <h2>Our Featured Rooms</h2>

          <p>
            Choose from our comfortable and elegant
            accommodations.
          </p>

        </div>


        <div className="rooms-grid">

          {rooms.map((room, index) => (

            <div className="room-card" key={index}>

              <img
                src={room.image}
                alt={room.name}
              />

              <div className="room-content">

                <h3>{room.name}</h3>

                <p>{room.description}</p>

                <div className="room-bottom">

                  <div className="room-price">

                    <span>${room.price}</span>

                    <small>/ night</small>

                  </div>

                  <Link
                    to="/login"
                    className="room-button"
                  >
                    Book Now
                  </Link>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="home-footer" id="contact">

        <div className="footer-grid">


          {/* Hotel Information */}
          <div className="footer-brand">

            <h2>Grand Horizon</h2>

            <span>HOTEL & RESORT</span>

            <p>
              Experience luxury, comfort, and
              unforgettable hospitality.
            </p>

          </div>


          {/* Quick Links */}
          <div className="footer-column">

            <h3>Quick Links</h3>

            <a href="#home">Home</a>

            <a href="#about">About Us</a>

            <a href="#rooms">Rooms</a>

            <a href="#services">Services</a>

          </div>


          {/* Contact Information */}
          <div className="footer-column">

            <h3>Contact Us</h3>

            <p>
              Phone: +91 98765 43210
            </p>

            <p>
              Email: info@grandhorizon.com
            </p>

            <p>
              Address: Pune, Maharashtra, India
            </p>

          </div>

        </div>


        {/* Copyright */}
        <div className="footer-bottom">

          <p>
            © 2026 Grand Horizon Hotel & Resort.
            All rights reserved.
          </p>

        </div>

      </footer>

    </div>
  );
}

export default Home;
