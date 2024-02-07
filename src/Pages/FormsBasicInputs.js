//this is basic input file in which user can fill text, serch, email, url, phone, password, number, datetime, date, month, week, time, color. User can redirect into this file to clicking on "Form Element" from sidebar.

import React from "react";
import Menu from "./Compoents/Menu";
import Navbar from "./Compoents/Navbar";
import Footer from "./Compoents/Footer";

export default function forms_basic_inputs() {
  return (
    <>
      {/* <!-- Layout wrapper --> */}
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          {/* <!-- Menu --> */}
          <Menu />
          {/* <!-- / Menu --> */}

          {/* <!-- Layout container --> */}
          <div className="layout-page">
            {/* <!-- Navbar --> */}
            <Navbar />
            {/* <!-- / Navbar --> */}

            {/* <!-- Content wrapper --> */}
            <div className="content-wrapper">
              {/* <!-- Content --> */}
              <div className="container-xxl flex-grow-1 container-p-y">
                <h4 className="py-3 mb-4">
                  <span className="text-muted fw-light">Forms /</span> Basic
                  Inputs
                </h4>
                <div className="row">
                  <div className="col-md-12">
                    <div className="custom_table">
                      <div className="card mb-4">
                        <h3 className="card-header">Basic Forms</h3>
                        <div className="card-body">
                          <div className="mb-3 row">
                            <label
                              for="html5-text-input"
                              className="col-md-12 col-form-label"
                            >
                              Text
                            </label>
                            <div className="col-md-12">
                              <input
                                className="form-control"
                                type="text"
                                value="Sneat"
                                id="html5-text-input"
                              />
                            </div>
                          </div>
                          <div className="mb-3 row">
                            <label
                              for="html5-search-input"
                              className="col-md-12 col-form-label"
                            >
                              Search
                            </label>
                            <div className="col-md-12">
                              <input
                                className="form-control"
                                type="search"
                                value="Search ..."
                                id="html5-search-input"
                              />
                            </div>
                          </div>
                          <div className="mb-3 row">
                            <label
                              for="html5-email-input"
                              className="col-md-12 col-form-label"
                            >
                              Email
                            </label>
                            <div className="col-md-12">
                              <input
                                className="form-control"
                                type="email"
                                value="john@example.com"
                                id="html5-email-input"
                              />
                            </div>
                          </div>
                          <div className="mb-3 row">
                            <label
                              for="html5-url-input"
                              className="col-md-12 col-form-label"
                            >
                              URL
                            </label>
                            <div className="col-md-12">
                              <input
                                className="form-control"
                                type="url"
                                value="https://themeselection.com"
                                id="html5-url-input"
                              />
                            </div>
                          </div>
                          <div className="mb-3 row">
                            <label
                              for="html5-tel-input"
                              className="col-md-12 col-form-label"
                            >
                              Phone
                            </label>
                            <div className="col-md-12">
                              <input
                                className="form-control"
                                type="tel"
                                value="90-(164)-188-556"
                                id="html5-tel-input"
                              />
                            </div>
                          </div>
                          <div className="mb-3 row">
                            <label
                              for="html5-password-input"
                              className="col-md-12 col-form-label"
                            >
                              Password
                            </label>
                            <div className="col-md-12">
                              <input
                                className="form-control"
                                type="password"
                                value="password"
                                id="html5-password-input"
                              />
                            </div>
                          </div>
                          <div className="mb-3 row">
                            <label
                              for="html5-number-input"
                              className="col-md-12 col-form-label"
                            >
                              Number
                            </label>
                            <div className="col-md-12">
                              <input
                                className="form-control"
                                type="number"
                                value="18"
                                id="html5-number-input"
                              />
                            </div>
                          </div>
                          <div className="mb-3 row">
                            <label
                              for="html5-datetime-local-input"
                              className="col-md-12 col-form-label"
                            >
                              Datetime
                            </label>
                            <div className="col-md-12">
                              <input
                                className="form-control"
                                type="datetime-local"
                                value="2021-06-18T12:30:00"
                                id="html5-datetime-local-input"
                              />
                            </div>
                          </div>
                          <div className="mb-3 row">
                            <label
                              for="html5-date-input"
                              className="col-md-12 col-form-label"
                            >
                              Date
                            </label>
                            <div className="col-md-12">
                              <input
                                className="form-control"
                                type="date"
                                value="2021-06-18"
                                id="html5-date-input"
                              />
                            </div>
                          </div>
                          <div className="mb-3 row">
                            <label
                              for="html5-month-input"
                              className="col-md-12 col-form-label"
                            >
                              Month
                            </label>
                            <div className="col-md-12">
                              <input
                                className="form-control"
                                type="month"
                                value="2021-06"
                                id="html5-month-input"
                              />
                            </div>
                          </div>
                          <div className="mb-3 row">
                            <label
                              for="html5-week-input"
                              className="col-md-12 col-form-label"
                            >
                              Week
                            </label>
                            <div className="col-md-12">
                              <input
                                className="form-control"
                                type="week"
                                value="2021-W25"
                                id="html5-week-input"
                              />
                            </div>
                          </div>
                          <div className="mb-3 row">
                            <label
                              for="html5-time-input"
                              className="col-md-12 col-form-label"
                            >
                              Time
                            </label>
                            <div className="col-md-12">
                              <input
                                className="form-control"
                                type="time"
                                value="12:30:00"
                                id="html5-time-input"
                              />
                            </div>
                          </div>
                          <div className="mb-3 row">
                            <label
                              for="html5-color-input"
                              className="col-md-12 col-form-label"
                            >
                              Color
                            </label>
                            <div className="col-md-12">
                              <input
                                className="form-control"
                                type="color"
                                value="#666EE8"
                                id="html5-color-input"
                              />
                            </div>
                          </div>
                          <div className="mb-3 row float_label_main">
                            <label className="col-md-12 form-label">
                              Float label
                            </label>
                            <div className="col-md-12 form-floating">
                              <input
                                type="text"
                                className="form-control"
                                id="floatingInput"
                                placeholder="John Doe"
                                aria-describedby="floatingInputHelp"
                              />
                              <label for="floatingInput">Name</label>
                            </div>
                          </div>
                          <div className="mb-3">
                            <label
                              for="exampleFormControlSelect1"
                              className="form-label"
                            >
                              Example select
                            </label>
                            <select
                              className="form-select"
                              id="exampleFormControlSelect1"
                              aria-label="Default select example"
                            >
                              <option selected>Open this select menu</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                          <div className="mb-3">
                            <label
                              for="exampleFormControlTextarea1"
                              className="form-label"
                            >
                              Example textarea
                            </label>
                            <textarea
                              className="form-control"
                              id="exampleFormControlTextarea1"
                              rows="3"
                            ></textarea>
                          </div>
                          <div className="mb-3">
                            <label
                              for="exampleFormControlSelect2"
                              className="form-label"
                            >
                              Example multiple select
                            </label>
                            <select
                              multiple
                              className="form-select"
                              id="exampleFormControlSelect2"
                              aria-label="Multiple select example"
                            >
                              <option selected>Open this select menu</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                          <div className="mb-3">
                            <label
                              for="exampleFormControlReadOnlyInput1"
                              className="form-label"
                            >
                              Read only
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              id="exampleFormControlReadOnlyInput1"
                              placeholder="Readonly input here..."
                              readonly
                            />
                          </div>
                          <div className="row gy-3 mb-3">
                            <div className="col-md">
                              <small className="text-light fw-medium">
                                Checkboxes
                              </small>
                              <div className="form-check mt-3">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="defaultCheck1"
                                />
                                <label
                                  className="form-check-label"
                                  for="defaultCheck1"
                                >
                                  {" "}
                                  Unchecked{" "}
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="defaultCheck3"
                                  checked
                                />
                                <label
                                  className="form-check-label"
                                  for="defaultCheck3"
                                >
                                  {" "}
                                  Checked{" "}
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="disabledCheck2"
                                  disabled
                                  checked
                                />
                                <label
                                  className="form-check-label"
                                  for="disabledCheck2"
                                >
                                  {" "}
                                  Disabled Checked{" "}
                                </label>
                              </div>
                            </div>
                            <div className="col-md">
                              <small className="text-light fw-medium">
                                Radio
                              </small>
                              <div className="form-check mt-3">
                                <input
                                  name="default-radio-1"
                                  className="form-check-input"
                                  type="radio"
                                  value=""
                                  id="defaultRadio1"
                                />
                                <label
                                  className="form-check-label"
                                  for="defaultRadio1"
                                >
                                  {" "}
                                  Unchecked{" "}
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  name="default-radio-1"
                                  className="form-check-input"
                                  type="radio"
                                  value=""
                                  id="defaultRadio2"
                                  checked
                                />
                                <label
                                  className="form-check-label"
                                  for="defaultRadio2"
                                >
                                  {" "}
                                  Checked{" "}
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  value=""
                                  id="disabledRadio2"
                                  disabled
                                  checked
                                />
                                <label
                                  className="form-check-label"
                                  for="disabledRadio2"
                                >
                                  {" "}
                                  Disabled checkbox{" "}
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="row mb-3">
                            <h5>Switches</h5>
                            <div className="form-check form-switch mb-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="flexSwitchCheckDefault"
                              />
                              <label
                                className="form-check-label"
                                for="flexSwitchCheckDefault"
                              >
                                Default switch checkbox input
                              </label>
                            </div>
                            <div className="form-check form-switch mb-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="flexSwitchCheckChecked"
                                checked
                              />
                              <label
                                className="form-check-label"
                                for="flexSwitchCheckChecked"
                              >
                                Checked switch checkbox input
                              </label>
                            </div>
                          </div>
                          <div className="mb-3">
                            <label
                              for="formFileMultiple"
                              className="form-label"
                            >
                              Multiple files input example
                            </label>
                            <input
                              className="form-control"
                              type="file"
                              id="formFileMultiple"
                              multiple
                            />
                          </div>
                          <div className="row">
                            <label
                              for="html5-range"
                              className="col-md-2 col-form-label"
                            >
                              Range
                            </label>
                            <div className="col-md-10">
                              <input
                                type="range"
                                className="form-range mt-3"
                                id="html5-range"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- / Content --> */}

              {/* <!-- Footer --> */}
              <Footer />
              {/* <!-- / Footer --> */}

              <div className="content-backdrop fade"></div>
            </div>
            {/* <!-- Content wrapper --> */}
          </div>
          {/* <!-- / Layout page --> */}
        </div>

        {/* <!-- Overlay --> */}
        <div className="layout-overlay layout-menu-toggle"></div>
      </div>
      {/* <!-- / Layout wrapper --> */}

      <div className="buy-now">
        <a
          href="https://themeselection.com/item/sneat-bootstrap-html-admin-template/"
          target="_blank"
          className="btn btn-danger btn-buy-now"
        >
          Upgrade to Pro
        </a>
      </div>
    </>
  );
}
