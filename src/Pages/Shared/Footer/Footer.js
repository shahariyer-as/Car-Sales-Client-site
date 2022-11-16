import React from "react";

const Footer = () => {
  return (
    <div className="">
      <div class=" my-5">
        <footer
          class="text-white text-center text-lg-start"
          style={{ backgroundColor: "#23242a" }}
        >
          <div class="container p-4">
            <div class="row mt-4">
              {/* <!--Grid column--> */}
              <div class="col-lg-4 col-md-12 mb-4 mb-md-0">
                <h5 class="text-uppercase mb-4">About company</h5>

                <p>
                  We buy and sale barand new car and also used car of any brand.
                  Find cars for sale, local dealers, and advice.
                </p>

                <p>Our servicing is very also get joibs good we try to best.</p>

                <div class="mt-5">
                  {/* <!-- Facebook --> */}
                  <li type="button" class="btn btn-floating btn-warning btn-lg">
                    <i class="fab fa-facebook-f"></i>
                  </li>
                  {/* <!-- Dribbble --> */}
                  <li type="button" class="btn btn-floating btn-warning btn-lg">
                    <i class="fab fa-dribbble"></i>
                  </li>
                  {/* <!-- Twitter --> */}
                  <li type="button" class="btn btn-floating btn-warning btn-lg">
                    <i class="fab fa-twitter"></i>
                  </li>
                  {/* <!-- Google + --> */}
                  <li type="button" class="btn btn-floating btn-warning btn-lg">
                    <i class="fab fa-google-plus-g"></i>
                  </li>
                  {/* <!-- Linkedin --> */}
                </div>
              </div>
              {/* <!--Grid column--> */}

              {/* <!--Grid column--> */}
              <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 class="text-uppercase mb-4 pb-1">Search something</h5>

                <div class="form-outline form-white mb-4">
                  <input
                    type="text"
                    id="formControlLg"
                    class="form-control form-control-lg"
                  />
                  <label
                    class="form-label"
                    for="formControlLg"
                    style={{ marginLeft: "0px" }}
                  >
                    Search
                  </label>
                  <div class="form-notch">
                    <div
                      class="form-notch-leading"
                      style={{ width: " 9px" }}
                    ></div>
                    <div
                      class="form-notch-middle"
                      style={{ width: " 48.8px" }}
                    ></div>
                    <div class="form-notch-trailing"></div>
                  </div>
                </div>

                <ul class="fa-ul" style={{ marginLeft: "1.65em" }}>
                  <li class="mb-3">
                    <span class="fa-li">
                      <i class="fas fa-home"></i>
                    </span>
                    <span class="ms-2"> B-11, Dhaka , Bangladesh</span>
                  </li>
                  <li class="mb-3">
                    <span class="fa-li">
                      <i class="fas fa-envelope"></i>
                    </span>
                    <span class="ms-2">shahriyer@info.com</span>
                  </li>
                  <li class="mb-3">
                    <span class="fa-li">
                      <i class="fas fa-phone"></i>
                    </span>
                    <span class="ms-2">+ 01 234 567 88</span>
                  </li>
                  <li class="mb-3">
                    <span class="fa-li">
                      <i class="fas fa-print"></i>
                    </span>
                    <span class="ms-2">+ 01 234 567 89</span>
                  </li>
                </ul>
              </div>
              {/* <!--Grid column--> */}

              {/* <!--Grid column--> */}
              <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 class="text-uppercase mb-4">Opening hours</h5>

                <table class="table text-center text-white">
                  <tbody class="font-weight-normal">
                    <tr>
                      <td>Mon - Thu:</td>
                      <td>8am - 9pm</td>
                    </tr>
                    <tr>
                      <td>Fri - Sat:</td>
                      <td>8am - 1am</td>
                    </tr>
                    <tr>
                      <td>Sunday:</td>
                      <td>9am - 10pm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* <!--Grid column--> */}
            </div>
            {/* <!--Grid row--> */}
          </div>
          {/* <!-- Grid container --> */}

          {/* <!-- Copyright --> */}
          <div
            class="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            <li class="text-white" href="">
              © 2022 Copyright: Car sales hop
            </li>
          </div>
          {/* <!-- Copyright --> */}
        </footer>
      </div>
    </div>
  );
};

export default Footer;
