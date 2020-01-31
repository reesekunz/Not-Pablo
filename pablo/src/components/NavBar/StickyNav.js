import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./StickyNav.scss";

// When the event DOMContentLoaded occurs, it is safe to access the DOM
document.addEventListener("DOMContentLoaded", function() {
  // When the user scrolls the page, execute stickyNav function
  window.addEventListener("scroll", stickyNav);

  // Get the nav bar items
  var navbar = document.querySelector(".nav-items");

  // Get the offset position of the navbar
  var sticky = navbar.offsetTop;

  // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function stickyNav() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }
});

function TopNavBar() {
  return (
    <div>
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <div className="nav-items">
            <div className="nav-item">
              <Link
                activeClass="active"
                to="trending"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Trending
              </Link>
            </div>
            <div className="nav-item">
              <Link
                activeClass="active"
                to="featured"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Featured
              </Link>
            </div>

            <div className="nav-item">
              <Link
                activeClass="active"
                to="latest"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Latest
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default TopNavBar;
