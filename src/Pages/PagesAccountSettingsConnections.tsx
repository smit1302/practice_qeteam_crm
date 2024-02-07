//this is account setting connection file which is third tab connections, user can able to connect their connected accounts as well as social-media accounts into the app.

import React from "react";
import Menu from "./Compoents/Menu";
import Navbar from "./Compoents/Navbar";
import { Link } from "react-router-dom";
import Footer from "./Compoents/Footer";

export default function pages_account_settings_connections() {
  return (
    <>
      {/* <!-- Layout wrapper --> */}
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          {/* <!-- Menu --> */}
          <Menu />
          {/* <!-- / Menu -->

            <!-- Layout container --> */}
          <div className="layout-page">
            {/* <!-- Navbar --> */}
            <Navbar />
            {/* <!-- / Navbar -->

          <!-- Content wrapper --> */}
            <div className="content-wrapper">
              {/* <!-- Content --> */}
              <div className="container-xxl flex-grow-1 container-p-y">
                <h4 className="py-3 mb-4">
                  <span className="text-muted fw-light">
                    Account Settings /{" "}
                  </span>{" "}
                  Connections
                </h4>

                <div className="row">
                  <div className="col-md-12">
                    <ul className="nav nav-pills flex-column flex-md-row mb-3">
                      <li className="nav-item">
                        <Link
                          to="/settings-account"
                          className="nav-link"
                        >
                          <i className="bx bx-user me-1"></i> Account
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/settings-notifications"
                          className="nav-link"
                        >
                          <i className="bx bx-bell me-1"></i> Notifications
                        </Link>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          href="javascript:void(0);"
                        >
                          <i className="bx bx-link-alt me-1"></i> Connections
                        </a>
                      </li>
                    </ul>
                    <div className="row">
                      <div className="col-md-6 col-12 mb-md-0 mb-4">
                        <div className="card">
                          <h5 className="card-header">Connected Accounts</h5>
                          <div className="card-body">
                            <p>
                              Display content from your connected accounts on
                              your site
                            </p>
                            {/* <!-- Connections --> */}
                            <div className="d-flex mb-3">
                              <div className="flex-shrink-0">
                                <img
                                  src="/assets/img/icons/brands/google.png"
                                  alt="google"
                                  className="me-3"
                                  height="30"
                                />
                              </div>
                              <div className="flex-grow-1 row">
                                <div className="col-9 mb-sm-0 mb-2">
                                  <h6 className="mb-0">Google</h6>
                                  <small className="text-muted">
                                    Calendar and contacts
                                  </small>
                                </div>
                                <div className="col-3 text-end">
                                  <div className="form-check form-switch">
                                    <input
                                      className="form-check-input float-end"
                                      type="checkbox"
                                      role="switch"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="d-flex mb-3">
                              <div className="flex-shrink-0">
                                <img
                                  src="/assets/img/icons/brands/slack.png"
                                  alt="slack"
                                  className="me-3"
                                  height="30"
                                />
                              </div>
                              <div className="flex-grow-1 row">
                                <div className="col-9 mb-sm-0 mb-2">
                                  <h6 className="mb-0">Slack</h6>
                                  <small className="text-muted">
                                    Communication
                                  </small>
                                </div>
                                <div className="col-3 text-end">
                                  <div className="form-check form-switch">
                                    <input
                                      className="form-check-input float-end"
                                      type="checkbox"
                                      role="switch"
                                      checked
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="d-flex mb-3">
                              <div className="flex-shrink-0">
                                <img
                                  src="/assets/img/icons/brands/github.png"
                                  alt="github"
                                  className="me-3"
                                  height="30"
                                />
                              </div>
                              <div className="flex-grow-1 row">
                                <div className="col-9 mb-sm-0 mb-2">
                                  <h6 className="mb-0">Github</h6>
                                  <small className="text-muted">
                                    Manage your Git repositories
                                  </small>
                                </div>
                                <div className="col-3 text-end">
                                  <div className="form-check form-switch">
                                    <input
                                      className="form-check-input float-end"
                                      type="checkbox"
                                      role="switch"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="d-flex mb-3">
                              <div className="flex-shrink-0">
                                <img
                                  src="/assets/img/icons/brands/mailchimp.png"
                                  alt="mailchimp"
                                  className="me-3"
                                  height="30"
                                />
                              </div>
                              <div className="flex-grow-1 row">
                                <div className="col-9 mb-sm-0 mb-2">
                                  <h6 className="mb-0">Mailchimp</h6>
                                  <small className="text-muted">
                                    Email marketing service
                                  </small>
                                </div>
                                <div className="col-3 text-end">
                                  <div className="form-check form-switch">
                                    <input
                                      className="form-check-input float-end"
                                      type="checkbox"
                                      role="switch"
                                      checked
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="d-flex">
                              <div className="flex-shrink-0">
                                <img
                                  src="/assets/img/icons/brands/asana.png"
                                  alt="asana"
                                  className="me-3"
                                  height="30"
                                />
                              </div>
                              <div className="flex-grow-1 row">
                                <div className="col-9 mb-sm-0 mb-2">
                                  <h6 className="mb-0">Asana</h6>
                                  <small className="text-muted">
                                    Communication
                                  </small>
                                </div>
                                <div className="col-3 text-end">
                                  <div className="form-check form-switch">
                                    <input
                                      className="form-check-input float-end"
                                      type="checkbox"
                                      role="switch"
                                      checked
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* <!-- /Connections --> */}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-12">
                        <div className="card">
                          <h5 className="card-header">Social Accounts</h5>
                          <div className="card-body">
                            <p>
                              Display content from social accounts on your site
                            </p>
                            {/* <!-- Social Accounts --> */}
                            <div className="d-flex mb-3">
                              <div className="flex-shrink-0">
                                <img
                                  src="/assets/img/icons/brands/facebook.png"
                                  alt="facebook"
                                  className="me-3"
                                  height="30"
                                />
                              </div>
                              <div className="flex-grow-1 row">
                                <div className="col-8 col-sm-7 mb-sm-0 mb-2">
                                  <h6 className="mb-0">Facebook</h6>
                                  <small className="text-muted">
                                    Not Connected
                                  </small>
                                </div>
                                <div className="col-4 col-sm-5 text-end">
                                  <button
                                    type="button"
                                    className="btn btn-icon btn-outline-secondary"
                                  >
                                    <i className="bx bx-link-alt"></i>
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="d-flex mb-3">
                              <div className="flex-shrink-0">
                                <img
                                  src="/assets/img/icons/brands/twitter.png"
                                  alt="twitter"
                                  className="me-3"
                                  height="30"
                                />
                              </div>
                              <div className="flex-grow-1 row">
                                <div className="col-8 col-sm-7 mb-sm-0 mb-2">
                                  <h6 className="mb-0">Twitter</h6>
                                  <a
                                    href="https://twitter.com/Theme_Selection"
                                    target="_blank"
                                  >
                                    @ThemeSelection
                                  </a>
                                </div>
                                <div className="col-4 col-sm-5 text-end">
                                  <button
                                    type="button"
                                    className="btn btn-icon btn-outline-danger"
                                  >
                                    <i className="bx bx-trash-alt"></i>
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="d-flex mb-3">
                              <div className="flex-shrink-0">
                                <img
                                  src="/assets/img/icons/brands/instagram.png"
                                  alt="instagram"
                                  className="me-3"
                                  height="30"
                                />
                              </div>
                              <div className="flex-grow-1 row">
                                <div className="col-8 col-sm-7 mb-sm-0 mb-2">
                                  <h6 className="mb-0">instagram</h6>
                                  <a
                                    href="https://www.instagram.com/themeselection/"
                                    target="_blank"
                                  >
                                    @ThemeSelection
                                  </a>
                                </div>
                                <div className="col-4 col-sm-5 text-end">
                                  <button
                                    type="button"
                                    className="btn btn-icon btn-outline-danger"
                                  >
                                    <i className="bx bx-trash-alt"></i>
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="d-flex mb-3">
                              <div className="flex-shrink-0">
                                <img
                                  src="/assets/img/icons/brands/dribbble.png"
                                  alt="dribbble"
                                  className="me-3"
                                  height="30"
                                />
                              </div>
                              <div className="flex-grow-1 row">
                                <div className="col-8 col-sm-7 mb-sm-0 mb-2">
                                  <h6 className="mb-0">Dribbble</h6>
                                  <small className="text-muted">
                                    Not Connected
                                  </small>
                                </div>
                                <div className="col-4 col-sm-5 text-end">
                                  <button
                                    type="button"
                                    className="btn btn-icon btn-outline-secondary"
                                  >
                                    <i className="bx bx-link-alt"></i>
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="d-flex">
                              <div className="flex-shrink-0">
                                <img
                                  src="/assets/img/icons/brands/behance.png"
                                  alt="behance"
                                  className="me-3"
                                  height="30"
                                />
                              </div>
                              <div className="flex-grow-1 row">
                                <div className="col-8 col-sm-7 mb-sm-0 mb-2">
                                  <h6 className="mb-0">Behance</h6>
                                  <small className="text-muted">
                                    Not Connected
                                  </small>
                                </div>
                                <div className="col-4 col-sm-5 text-end">
                                  <button
                                    type="button"
                                    className="btn btn-icon btn-outline-secondary"
                                  >
                                    <i className="bx bx-link-alt"></i>
                                  </button>
                                </div>
                              </div>
                            </div>
                            {/* <!-- /Social Accounts --> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* </div>
            <!-- / Content -->*/}
              </div>
              {/*<!-- Footer --> */}
              <Footer />
              {/* <!-- / Footer --> */}

              <div className="content-backdrop fade"></div>

              {/* <!-- Content wrapper --> */}
            </div>
            {/* <!-- / Layout page --> */}
          </div>

          {/* <!-- Overlay --> */}
          <div className="layout-overlay layout-menu-toggle"></div>
        </div>
        {/* <!-- / Layout wrapper -->*/}
        <div className="buy-now">
          <a
            href="https://themeselection.com/item/sneat-bootstrap-html-admin-template/"
            target="_blank"
            className="btn btn-danger btn-buy-now"
          >
            Upgrade to Pro
          </a>
        </div>
      </div>
    </>
  );
}
