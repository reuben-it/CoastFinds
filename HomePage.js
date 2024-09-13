import React from "react";
import { Link } from 'react-router-dom';
import './App.css';

function HomePage() {
    return (
      <>

      {/* Header Section */}
      <header>
          <div className="logo">
            <h1>Coast Finds</h1>
          </div>
          <nav>
            <ul>
              <li className="dropdown">
                <Link to="/" className="drop-button">Menu</Link>
                <div className="dropdown-content">
                  <Link to="#">Beach Locations</Link>
                  <Link to="#">Tour Planner</Link>
                  <Link to="#">Know your beach</Link>
                  <Link to="#">Activities</Link>
                  <Link to="#">Weather Map</Link>
                </div>
              </li>
              <li className="dropdown">
                <Link to="#" className="drop-button">Explore</Link>
                <div className="dropdown-content">
                  <Link to="#">Popular beaches</Link>
                  <Link to="#">Underrated Beaches</Link>
                </div>
              </li>
              <li><Link to="/states">Find Beaches</Link></li>
              <li><Link to="#">About Us</Link></li>
              <li><Link to="#">Contact Us</Link></li>
            </ul>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h2>Discover the Best Beaches in India</h2>
            <p>Find the perfect spot for your next adventure with up-to-date information on water quality, weather, and more.</p>
            <div className="search-bar">
              <input type="text" placeholder="Search for a location" />
              <button>Search</button>
            </div>
          </div>
        </section>
  
        {/* Beach Highlights Section */}
        <section className="beach-highlights">
          <h2>Popular Beaches</h2>
          <div className="carousel">
            <div className="carousel-item">
              <img src="https://clubmahindra.gumlet.io/blog/media/section_images/banner-db8279a268fd452.jpg?w=376&dpr=2.6" alt="Goa" />
              <h3>Goa</h3>
              <p>Sunny beach with great nightlife.</p>
            </div>
            <div className="carousel-item">
              <img src="https://deih43ym53wif.cloudfront.net/varkala-kerala-india-north-cliff-shutterstock_2140911963.jpg_27dbf53867.jpg" alt="Kerala" />
              <h3>Kerala</h3>
              <p>Beautiful backwaters and serene views.</p>
            </div>
            <div className="carousel-item">
              <img src="https://indiatrotter.com/wp-content/uploads/2020/08/andaman-nicobar-beach.jpg" alt="Andaman" />
              <h3>Andaman</h3>
              <p>Crystal clear water and adventure sports.</p>
            </div>
          </div>
        </section>

        <div className="App">

        {/* Footer Section */}
        <footer>
          <div className="footer-links">
            <Link to="#">Privacy Policy</Link>
            <Link to="#">Terms of Service</Link>
            <Link to="#">FAQs</Link>
            <Link to="#">Support</Link>
          </div>
          <div className="social-media">
            <Link to="#">Facebook</Link>
            <Link to="#">Twitter</Link>
            <Link to="#">Instagram</Link>
          </div>
          <div className="newsletter">
            <h3>Subscribe to our Newsletter</h3>
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </footer>
      </div>
      </>
    );
  }
  
  export default HomePage;