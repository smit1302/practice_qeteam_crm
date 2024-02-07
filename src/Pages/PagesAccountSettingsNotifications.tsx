//this is the second tab notification from which user is able to give permission for notification.

import React from "react";
import Menu from "./Compoents/Menu";
import Navbar from "./Compoents/Navbar";
import { Link } from "react-router-dom";
import Footer from "./Compoents/Footer";

export default function pages_account_settings_notifications() {
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
                    Account Settings /
                  </span>{" "}
                  Notifications
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
                        <a className="nav-link active" href="#">
                          <i className="bx bx-bell me-1"></i> Notifications
                        </a>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/settings-connections"
                          className="nav-link"
                        >
                          <i className="bx bx-link-alt me-1"></i> Connections
                        </Link>
                      </li>
                    </ul>
                    <div className="card">
                      {/* <!-- Notifications --> */}
                      <h5 className="card-header">Recent Devices</h5>
                      <div className="card-body">
                        <span>
                          We need permission from your browser to show
                          notifications.
                          <span className="notificationRequest">
                            <span className="fw-medium">
                              Request Permission
                            </span>
                          </span>
                        </span>
                        <div className="error"></div>
                      </div>
                      <div className="table-responsive">
                        <table className="table table-striped table-borderless border-bottom">
                          <thead>
                            <tr>
                              <th className="text-nowrap">Type</th>
                              <th className="text-nowrap text-center">
                                ✉️ Email
                              </th>
                              <th className="text-nowrap text-center">
                                🖥 Browser
                              </th>
                              <th className="text-nowrap text-center">
                                👩🏻‍💻 App
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="text-nowrap">New for you</td>
                              <td>
                                <div className="form-check d-flex justify-content-center">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="defaultCheck1"
                                    checked
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="form-check d-flex justify-content-center">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="defaultCheck2"
                                    checked
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="form-check d-flex justify-content-center">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="defaultCheck3"
                                    checked
                                  />
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-nowrap">Account activity</td>
                              <td>
                                <div className="form-check d-flex justify-content-center">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="defaultCheck4"
                                    checked
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="form-check d-flex justify-content-center">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="defaultCheck5"
                                    checked
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="form-check d-flex justify-content-center">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="defaultCheck6"
                                    checked
                                  />
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-nowrap">
                                A new browser used to sign in
                              </td>
                              <td>
                                <div className="form-check d-flex justify-content-center">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="defaultCheck7"
                                    checked
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="form-check d-flex justify-content-center">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="defaultCheck8"
                                    checked
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="form-check d-flex justify-content-center">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="defaultCheck9"
                                  />
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-nowrap">
                                A new device is linked
                              </td>
                              <td>
                                <div className="form-check d-flex justify-content-center">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="defaultCheck10"
                                    checked
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="form-check d-flex justify-content-center">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="defaultCheck11"
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="form-check d-flex justify-content-center">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="defaultCheck12"
                                  />
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="card-body">
                        <h6>When should we send you notifications?</h6>
                        <form action="javascript:void(0);">
                          <div className="row">
                            <div className="col-sm-6">
                              <select
                                id="sendNotification"
                                className="form-select"
                                name="sendNotification"
                              >
                                <option selected>Only when I'm online</option>
                                <option>Anytime</option>
                              </select>
                            </div>
                            <div className="mt-4">
                              <button
                                type="submit"
                                className="btn btn-primary me-2"
                              >
                                Save changes
                              </button>
                              <button
                                type="reset"
                                className="btn btn-outline-secondary"
                              >
                                Discard
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                      {/* <!-- /Notifications --> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- / Content -->*/}

              {/* <!-- Footer -->  */}
              <Footer/>
              {/* <!-- / Footer --> */}

              <div className="content-backdrop fade"></div>
            </div>
            {/* <!-- Content wrapper --> */}
          </div>
          {/* <!-- / Layout page --> */}
        </div>

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

