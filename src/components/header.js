import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav class="navbar  navbar-expand-lg py-3 navbar-dark bg-primary">
      <div class="container">
        <Link to={"/"} className="nav-link no-hvr-link">
          <img
            src="http://www.virtualtechnology.com//wp-content/uploads/2020/05/logo-8.png"
            class="img-fluid"
            alt="logo"
          />

          {/* <img src={require("./logo-light.png")} class="img-fluid" alt="logo" /> */}
        </Link>{" "}
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a
                class="nav-link no-hvr-link active"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li class="nav-item">
              <Link to={"/about"} className="nav-link no-hvr-link">
                About us
              </Link>
            </li>
            <li class="nav-item">
              <Link to={"/products"} className="nav-link no-hvr-link">
                Products
              </Link>
            </li>
            <li class="nav-item">
              <Link to={"/contact"} className="nav-link no-hvr-link">
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
