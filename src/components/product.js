import React from "react";
import "./product.css";
export const Product = () => {
  return (
    <section id="portfolio" class="portfolio sections-bg">
      <div class="container" data-aos="fade-up">
        <div class="section-header">
          <h2>Products</h2>
          <p>
            Quam sed id excepturi ccusantium dolorem ut quis dolores nisi llum
            nostrum enim velit qui ut et autem uia reprehenderit sunt deleniti
          </p>
        </div>

        <div
          class="portfolio-isotope"
          data-portfolio-filter="*"
          data-portfolio-layout="masonry"
          data-portfolio-sort="original-order"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div class="row gy-4 portfolio-container">
            <div class="col-xl-4 col-md-6 portfolio-item filter-app">
              <div class="portfolio-wrap">
                <a
                  href="./portfolio/app-1.jpg"
                  data-gallery="portfolio-gallery-app"
                  class="glightbox"
                >
                  <img
                    src={require("./portfolio/app-1.jpg")}
                    class="img-fluid"
                    alt=""
                  />
                </a>
                <div class="portfolio-info">
                  <h4>
                    <a href="portfolio-details.html" title="More Details">
                      App 1
                    </a>
                  </h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                </div>
              </div>
            </div>

            <div class="col-xl-4 col-md-6 portfolio-item filter-product">
              <div class="portfolio-wrap">
                <a
                  href="./portfolio/product-1.jpg"
                  data-gallery="portfolio-gallery-app"
                  class="glightbox"
                >
                  <img
                    src={require("./portfolio/product-1.jpg")}
                    class="img-fluid"
                    alt=""
                  />
                </a>
                <div class="portfolio-info">
                  <h4>
                    <a href="portfolio-details.html" title="More Details">
                      Product 1
                    </a>
                  </h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                </div>
              </div>
            </div>

            <div class="col-xl-4 col-md-6 portfolio-item filter-branding">
              <div class="portfolio-wrap">
                <a
                  href="./portfolio/branding-1.jpg"
                  data-gallery="portfolio-gallery-app"
                  class="glightbox"
                >
                  <img
                    src={require("./portfolio/branding-1.jpg")}
                    class="img-fluid"
                    alt=""
                  />
                </a>
                <div class="portfolio-info">
                  <h4>
                    <a href="portfolio-details.html" title="More Details">
                      Branding 1
                    </a>
                  </h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                </div>
              </div>
            </div>

            <div class="col-xl-4 col-md-6 portfolio-item filter-books">
              <div class="portfolio-wrap">
                <a
                  href="./portfolio/books-1.jpg"
                  data-gallery="portfolio-gallery-app"
                  class="glightbox"
                >
                  <img
                    src={require("./portfolio/books-1.jpg")}
                    class="img-fluid"
                    alt=""
                  />
                </a>
                <div class="portfolio-info">
                  <h4>
                    <a href="portfolio-details.html" title="More Details">
                      Books 1
                    </a>
                  </h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                </div>
              </div>
            </div>

            <div class="col-xl-4 col-md-6 portfolio-item filter-app">
              <div class="portfolio-wrap">
                <a
                  href="./portfolio/app-2.jpg"
                  data-gallery="portfolio-gallery-app"
                  class="glightbox"
                >
                  <img
                    src={require("./portfolio/app-2.jpg")}
                    class="img-fluid"
                    alt=""
                  />
                </a>
                <div class="portfolio-info">
                  <h4>
                    <a href="portfolio-details.html" title="More Details">
                      App 2
                    </a>
                  </h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                </div>
              </div>
            </div>

            <div class="col-xl-4 col-md-6 portfolio-item filter-product">
              <div class="portfolio-wrap">
                <a
                  href="./portfolio/product-2.jpg"
                  data-gallery="portfolio-gallery-app"
                  class="glightbox"
                >
                  <img
                    src={require("./portfolio/product-2.jpg")}
                    class="img-fluid"
                    alt=""
                  />
                </a>
                <div class="portfolio-info">
                  <h4>
                    <a href="portfolio-details.html" title="More Details">
                      Product 2
                    </a>
                  </h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                </div>
              </div>
            </div>

            <div class="col-xl-4 col-md-6 portfolio-item filter-branding">
              <div class="portfolio-wrap">
                <a
                  href="./portfolio/branding-2.jpg"
                  data-gallery="portfolio-gallery-app"
                  class="glightbox"
                >
                  <img
                    src={require("./portfolio/branding-2.jpg")}
                    class="img-fluid"
                    alt=""
                  />
                </a>
                <div class="portfolio-info">
                  <h4>
                    <a href="portfolio-details.html" title="More Details">
                      Branding 2
                    </a>
                  </h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                </div>
              </div>
            </div>

            <div class="col-xl-4 col-md-6 portfolio-item filter-books">
              <div class="portfolio-wrap">
                <a
                  href="./portfolio/books-2.jpg"
                  data-gallery="portfolio-gallery-app"
                  class="glightbox"
                >
                  <img
                    src={require("./portfolio/books-2.jpg")}
                    class="img-fluid"
                    alt=""
                  />
                </a>
                <div class="portfolio-info">
                  <h4>
                    <a href="portfolio-details.html" title="More Details">
                      Books 2
                    </a>
                  </h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                </div>
              </div>
            </div>

            <div class="col-xl-4 col-md-6 portfolio-item filter-app">
              <div class="portfolio-wrap">
                <a
                  href="./portfolio/app-3.jpg"
                  data-gallery="portfolio-gallery-app"
                  class="glightbox"
                >
                  <img
                    src={require("./portfolio/app-3.jpg")}
                    class="img-fluid"
                    alt=""
                  />
                </a>
                <div class="portfolio-info">
                  <h4>
                    <a href="portfolio-details.html" title="More Details">
                      App 3
                    </a>
                  </h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                </div>
              </div>
            </div>

            <div class="col-xl-4 col-md-6 portfolio-item filter-product">
              <div class="portfolio-wrap">
                <a
                  href="./portfolio/product-3.jpg"
                  data-gallery="portfolio-gallery-app"
                  class="glightbox"
                >
                  <img
                    src={require("./portfolio/product-3.jpg")}
                    class="img-fluid"
                    alt=""
                  />
                </a>
                <div class="portfolio-info">
                  <h4>
                    <a href="portfolio-details.html" title="More Details">
                      Product 3
                    </a>
                  </h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                </div>
              </div>
            </div>

            <div class="col-xl-4 col-md-6 portfolio-item filter-branding">
              <div class="portfolio-wrap">
                <a
                  href="./portfolio/branding-3.jpg"
                  data-gallery="portfolio-gallery-app"
                  class="glightbox"
                >
                  <img
                    src={require("./portfolio/branding-3.jpg")}
                    class="img-fluid"
                    alt=""
                  />
                </a>
                <div class="portfolio-info">
                  <h4>
                    <a href="portfolio-details.html" title="More Details">
                      Branding 3
                    </a>
                  </h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                </div>
              </div>
            </div>

            <div class="col-xl-4 col-md-6 portfolio-item filter-books">
              <div class="portfolio-wrap">
                <a
                  href="./portfolio/books-3.jpg"
                  data-gallery="portfolio-gallery-app"
                  class="glightbox"
                >
                  <img
                    src={require("./portfolio/books-3.jpg")}
                    class="img-fluid"
                    alt=""
                  />
                </a>
                <div class="portfolio-info">
                  <h4>
                    <a href="portfolio-details.html" title="More Details">
                      Books 3
                    </a>
                  </h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
