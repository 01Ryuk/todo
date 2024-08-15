import React from "react";

const Footer = () => {
  return (
    <>
      <div class="container staticfooter bg-white">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <p class="col-md-4 mb-0 text-body-secondary">
            &copy; 2024 Company, Inc
          </p>


          <ul class="nav col-md-4 justify-content-end">
            <li class="nav-item">
              <a href="k" class="nav-link px-2 text-body-secondary">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a href="k" class="nav-link px-2 text-body-secondary">
                Features
              </a>
            </li>
            <li class="nav-item">
              <a href="i" class="nav-link px-2 text-body-secondary">
                Pricing
              </a>
            </li>
            <li class="nav-item">
              <a href="p" class="nav-link px-2 text-body-secondary">
                FAQs
              </a>
            </li>
            <li class="nav-item">
              <a href="u" class="nav-link px-2 text-body-secondary">
                About
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
};

export default Footer;
