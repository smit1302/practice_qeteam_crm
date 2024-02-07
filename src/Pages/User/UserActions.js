//this is user actions file from here user can add data, edit that data, view that data, delete that whole user.User have to aad filed like name, country, state, city, email and upload image also.

import React, { useRef, useState } from "react";
import { DeleteFilled, EditFilled, EyeOutlined } from "@ant-design/icons";
import { Country, State, City } from "country-state-city";
import Select from "react-select";
import { Carousel } from "react-responsive-carousel";
import { Layout, Button, Table, Image, Input, Modal, Space } from "antd";
import Menu from "../Compoents/Menu";
import Navbar from "../Compoents/Navbar";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from "../Compoents/Footer";
import Swal from "sweetalert";
import validation from "../Validation/UserActionValidation";
const { Content } = Layout;
const { Search } = Input;

export default function User_Actions() {
  //form fields State
 
  const [image, setImage] = useState([]);
  const imageInputRef = useRef([]);
  const [imagePreview, setImagePreview] = useState([]);
  
  //Pagination
  const [pageSize, setPageSize] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);

  //add update state
  const [edit, setEdit] = useState(false); //set button as update or add from this state
  const [active, setActive] = useState(null); //set current index into state
  const [users, setusers] = useState([]); //Add User
  const [isEdit, setIsEdit] = useState(false);

  //form open/close
  const [FormModalVisible, setFormModalVisible] = useState(false);
  const [viewModalVisible, setViewModalVisible] = useState(false);
  const [viewedUser, setViewedUser] = useState(null); //display data of particular record

  //openForm
  const showModal = () => {
    setIsEdit(false); // Set isEdit to false for add operation
  
    // Clear the form fields and errors before opening the form
    setValues({
      uname: "",
      images: "",
      uemail: "",
      country: null,
      state: null,
      city: null,
    });
  
    setImage([]);
    setImagePreview([]);
    setErrors({});
  
    setFormModalVisible(true);
  };
  
  const [values, setValues] = useState({
    uname: "",
    images: "",
    country: "",
    uemail: "",
  });

  const [errors, setErrors] = useState({});

  // Function to handle Country change
  const handleCountryChange = (item) => {
    // Dynamic validation
    const validationErrors = validation({ ...values, country: item });

    // Update error state dynamically
    setErrors((prevErrors) => ({
      ...prevErrors,
      country: validationErrors.country,
    }));

    setValues((prev) => ({
      ...prev,
      country: item,
      state: null, // Clear state on country change
      city: null, // Clear city on country change
    }));
  };

  // Function to handle State change
  const handleStateChange = (item) => {
    const validationErrors = validation({ ...values, state: item });

    // Update error state dynamically
    setErrors((prevErrors) => ({
      ...prevErrors,
      state: validationErrors.state,
    }));

    setValues((prev) => ({
      ...prev,
      state: item,
      city: null, // Clear city on state change
    }));
  };

  // Function to handle City change
  const handleCityChange = (item) => {
    const validationErrors = validation({ ...values, city: item });

    // Update error state dynamically
    setErrors((prevErrors) => ({
      ...prevErrors,
      city: validationErrors.city,
    }));
    
    setValues((prev) => ({
      ...prev,
      city: item,
    }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
  
    // Dynamic validation
    const validationErrors = validation({ ...values, [name]: value });
  
    // Update error state dynamically
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validationErrors[name],
    }));
  
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const OnEditClick = (index) => {
    const user = users[index];
  
    // Set form fields with the data of the selected user for editing
    setValues({
      uname: user.uname,
      country: user.country,
      state: user.state,
      city: user.city,
      images: user.images,
      uemail: user.uemail,
    });
  
    // Set image state for display
    setImage([...user.images]);
    setImagePreview([...user.images.map((image) => URL.createObjectURL(image))]);
  
    // Set the index of the user being edited
    setActive(index);
  
    // Set the edit mode to true
    setEdit(true);
  
    // Show the form modal
    setFormModalVisible(true);
    setIsEdit(true);
  };
  
  
  const handleOk = (e) => {
    e.preventDefault();
    const validationErrors = validation(values);
    setErrors(validationErrors);
  
    if (Object.keys(validationErrors).length === 0) {
      const updatedUser = {
        uname: values.uname,
        country: values.country,
        state: values.state,
        city: values.city,
        images: image,
        uemail: values.uemail,
      };
  
      if (edit && active !== null) {
        // If in edit mode and an active index is set, update the existing user
        setusers((prevUsers) => {
          const newUsers = [...prevUsers];
          newUsers[active] = updatedUser;
          return newUsers;
        });
  
        // Reset edit mode and active index
        setEdit(false);
        setActive(null);
      } else {
        // If not in edit mode or active index not set, add the new user to the users state
        setusers((prevUsers) => [...prevUsers, updatedUser]);
      }
  
      // Clear form fields and errors
      setValues({
        uname: "",
        country: null,
        state: null,
        city: null,
        images: "",
        uemail: "",
      });
      setImage([]);
      setImagePreview([]);
      setErrors({});
  
      // Close the form modal
      setFormModalVisible(false);
    }
  };

  //close the form and empty the form fields
  const handleCancel = () => {
    setValues({
      uname: "",
      images: "",
      uemail: "",
      country: null,
      state: null,
      city: null,
    });
  
    setImage([]);
    setImagePreview([]);
    setErrors({});
    setFormModalVisible(false);
  };
  
  // Single Image Uploading
  const handleImageChange = (event) => {
    const newImage = event.target.files[0];
    if (newImage) {
      setImage([newImage]);
      const newPreview = URL.createObjectURL(newImage);
      setImagePreview([newPreview]);
    }
  };

  const handleRemoveImage = () => {
    setImage([]);
    setImagePreview([]);
  };

  console.log(image);

  //View
  const handleViewModalCancel = () => {
    setViewModalVisible(false);
  };
  const onViewClick = (index) => {
    setViewedUser(users[index]);
    setViewModalVisible(true);
  };

  //DELETE
  const deleteuser = (user) => {
    Swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this user!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        let copy = users.filter((item) => item !== user);
        setusers([...copy]);
        Swal("Poof! The user has been deleted!", {
          icon: "success",
        });
      } else {
        Swal("The user is safe!");
      }
    });
  };
  //Search
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };
  const filteredUsers = users.filter((user) => {
    const searchFields = [
      user.uname,
      user.country?.name,
      user.state?.name,
      user.city?.name,
    ]; // Use optional chaining here
    const normalizedQuery = searchQuery.toLowerCase();
    return searchFields.some(
      (field) => field?.toLowerCase().includes(normalizedQuery) // Use optional chaining here
    );
  });

  //Table Columns
  const columns = [
    {
      title: "Sr. No",
      dataIndex: "serialNumber",
      style: { width: "10%", textAlign: "center" },
      render: (text, record, index) => {
        const continuousNumber = (currentPage - 1) * pageSize + index + 1;
        return continuousNumber;
      },
    },
    {
      title: "Profile Pic",
      dataIndex: "images",
      key: "images",
      style: { width: "10%", textAlign: "center" },
      render: (images) => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {images
            ? images.map((image, index) => (
                <Image
                  key={index}
                  src={URL.createObjectURL(image)}
                  alt="User Upload"
                  width={80}
                  height={80}
                  style={{ margin: "0 5px" }}
                />
              ))
            : "No Images"}
        </div>
      ),
    },

    {
      title: "User Name",
      dataIndex: "uname",
      key: "uname",
      style: { width: "10%", textAlign: "center" },
      sorter: (a, b) => a.uname.localeCompare(b.uname),
      sortDirections: ["ascend", "descend"],
    },
    {
      title: "Email Address",
      key: "uemail",
      dataIndex: "uemail",
      sorter: (a, b) => a.uemail.localeCompare(b.uemail),
      style: { width: "10%", textAlign: "center" },
      sortDirections: ["ascend", "descend"],
    },
    {
      title: "Country",
      dataIndex: "country",
      key: "country",
      render: (country) => country?.name || "",
      style: { width: "10%", textAlign: "center" },
      sorter: (a, b) => a.country.name.localeCompare(b.country.name),
      sortDirections: ["ascend", "descend"],
    },
    {
      title: "State",
      dataIndex: "state",
      key: "state",
      render: (state) => state?.name || "",
      style: { width: "10%", textAlign: "center" },
      sorter: (a, b) => {
        // Custom sorting function to handle empty state values
        if (!a.state && !b.state) return 0; // If both are empty, consider them equal
        if (!a.state) return -1; // If only a's state is empty, a comes first
        if (!b.state) return 1; // If only b's state is empty, b comes first
        return a.state.name.localeCompare(b.state.name); // Compare by state name
      },
      sortDirections: ["ascend", "descend"],
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
      render: (city) => city?.name || "",
      style: { width: "10%", textAlign: "center" },
      sorter: (a, b) => {
        // Custom sorting function to handle empty city values
        if (!a.city && !b.city) return 0; // If both are empty, consider them equal
        if (!a.city) return -1; // If only a's city is empty, a comes first
        if (!b.city) return 1; // If only b's city is empty, b comes first
        return a.city.name.localeCompare(b.city.name); // Compare by city name
      },
      sortDirections: ["ascend", "descend"],
    },
    {
      title: "Action",
      key: "action",
      style: { width: "10%", textAlign: "center" },
      render: (_, record, index) => (
        <Space size="middle">
          <Button type="primary" Primary onClick={() => OnEditClick(index)}>
            <EditFilled />
          </Button>
          <Button type="primary" danger onClick={() => deleteuser(record)}>
            <DeleteFilled />
          </Button>
          <Button type="primary" onClick={() => onViewClick(index)}>
            <EyeOutlined />
          </Button>
        </Space>
      ),
    },
  ];
  return (
    <>
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
                  <span className="text-muted fw-light">User /</span> User
                  Details
                </h4>

                <div className="card">
                  <h5 className="card-header">Details</h5>
                  <div className="table-responsive text-nowrap">
                    {/* Modal */}

                    <Modal
                      title={isEdit ? "Edit User" : "Add User"}
                      visible={FormModalVisible}
                      onOk={handleOk}
                      onCancel={handleCancel}
                      width={540}
                      style={{
                        marginLeft: "40%",
                        marginRight: "20%",
                      }}
                    >
                      <form onSubmit={handleOk} className="row g-3">
                        <div className="d-flex align-items-start align-items-sm-center gap-4">
                          <div style={{ position: "relative" }}>
                            <img
                              src={
                                imagePreview && imagePreview.length > 0
                                  ? imagePreview[0]
                                  : "../assets/img/avatars/1.png"
                              }
                              alt="user-avatar"
                              className="d-block rounded"
                              height="100"
                              width="100"
                              id="uploadedAvatar"
                            />
                          </div>
                          <div className="button-wrapper">
                            <label
                              htmlFor="upload"
                              className="btn btn-primary me-2 mb-4"
                              tabIndex="0"
                            >
                              <span className="d-none d-sm-block">
                                Upload new photo
                              </span>
                              <i className="bx bx-upload d-block d-sm-none"></i>
                              <input
                                type="file"
                                id="upload"
                                className="account-file-input"
                                hidden
                                accept="image/png, image/jpeg"
                                onChange={handleImageChange}
                              />
                            </label>
                            <button
                              type="button"
                              className="btn btn-outline-secondary account-image-reset mb-4"
                              onClick={() => handleRemoveImage(0)}
                            >
                              <i className="bx bx-reset d-block d-sm-none"></i>
                              <span className="d-none d-sm-block">Reset</span>
                            </button>
                            <p className="text-muted mb-0">
                              Allowed JPG, GIF, or PNG. Max size of 800K
                            </p>
                          </div>
                        </div>

                        <div className="row g-3">
                          <div className="col">
                            <label for="firstName" className="form-label">
                            User Name
                            </label>
                            <input
                              type="text"
                              id="uname"
                              name="uname"
                              className="form-control"
                              //value={uname}
                              onChange={handleChange}
                              placeholder="Enter user name"
                            />
                            {errors.uname && (
                            <p style={{ color: "red" }}>{errors.uname}</p>
                          )}
                          </div>
                        </div>

                        <div className="row g-3">
                          <div className="col">
                            <label for="country" className="form-label">
                              Country
                            </label>
                            <Select
                              placeholder="Country"
                              options={[...Country.getAllCountries()]}
                              getOptionLabel={(options) => options.name}
                              getOptionValue={(options) => options.isoCode}
                              value={values.country}
                              onChange={handleCountryChange}
                            />
                            {errors.country && (
                              <p style={{ color: "red" }}>{errors.country}</p>
                            )}
                          </div>
                          <div className="col">
                            <label for="state" className="form-label">
                              State
                            </label>
                            <Select
                              placeholder="State"
                              options={[
                                ...(State.getStatesOfCountry(
                                  values.country?.isoCode
                                ) || []),
                              ]}
                              getOptionLabel={(options) => options.name}
                              getOptionValue={(options) => options}
                              value={values.state}
                              onChange={handleStateChange}
                            />
                            {errors.state && (
                              <p style={{ color: "red" }}>{errors.state}</p>
                            )}
                          </div>
                          <div className="col">
                            <label for="city" className="form-label">
                              City
                            </label>
                            <Select
                              placeholder="City "
                              options={[
                                ...(City.getCitiesOfState(
                                  values.state?.countryCode,
                                  values.state?.isoCode
                                ) || []),
                              ]}
                              getOptionLabel={(options) => options.name}
                              getOptionValue={(options) => options}
                              value={values.city}
                              onChange={handleCityChange}
                            />
                            {errors.city && (
                              <p style={{ color: "red" }}>{errors.city}</p>
                            )}
                          </div>
                        </div>

                        <div className="row g-3">
                          <div className="col">
                            <label for="uemail" className="form-label">
                            Email
                            </label>
                            <input
                              type="text"
                              id="uemail"
                              name="uemail"
                              className="form-control"
                              //value={uname}
                              onChange={handleChange}
                              placeholder="Enter user email"
                            />
                            {errors.uemail && (
                            <p style={{ color: "red" }}>{errors.uemail}</p>
                          )}
                          </div>
                        </div>
                      </form>
                    </Modal>

                    <Modal
                      title="Details"
                      visible={viewModalVisible}
                      onCancel={handleViewModalCancel}
                      footer={null}
                      width={500}
                      style={{
                        marginTop: "10%",
                        marginLeft: "40%",
                        marginRight: "20%",
                      }}
                    >
                      {viewedUser && (
                        <div className="card shadow-0 border rounded-3">
                          <div class="card mb-3" style={{ maxwidth: "540px" }}>
                            <div class="row g-0">
                              <div class="col-md-4">
                                <Carousel>
                                  {viewedUser.images.map((image, index) => (
                                    <div key={index}>
                                      <Image
                                        src={URL.createObjectURL(image)}
                                        className="row g-3"
                                        style={{
                                          marginTop: "20%",
                                          width: "90%",
                                          height: "90%",
                                        }}
                                      />
                                    </div>
                                  ))}
                                </Carousel>
                              </div>
                              <div class="col-md-8">
                                <div class="card-body">
                                  <h5 class="card-title">User Details</h5>
                                  <p class="card-text">
                                    User Name: {viewedUser.uname}
                                  </p>
                                  <p class="card-text">
                                    E-Mail:{" "}
                                    {viewedUser.uemail || "No Data Found"}
                                  </p>
                                  <p class="card-text">
                                    Location:{" "}
                                    {viewedUser.country?.name ||
                                      "No Data Found"}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </Modal>
                  </div>

                  <Content>
                    <div
                      className="input-group"
                      style={{ justifyContent: "end", marginBottom: "10px" }}
                    >
                      <div
                        className="form-outline"
                        style={{
                          flex: 1,
                          maxWidth: "200px",
                          marginRight: "10px",
                        }}
                      >
                        <Search
                          id="search"
                          value={searchQuery}
                          onChange={handleSearch}
                          placeholder="Search by Country Name, UserName....."
                        />
                      </div>
                      <div>
                        <Button
                          onClick={showModal}
                          style={{ marginRight: "10px" }}
                        >
                          Add
                        </Button>
                      </div>
                    </div>

                    <div>
                      <Table
                        className="table"
                        dataSource={filteredUsers}
                        columns={columns}
                        pagination={
                          filteredUsers.length > pageSize
                            ? {
                                pageSize: pageSize,
                                onChange: (page) => setCurrentPage(page),
                              }
                            : false // Set pagination to false when there are 5 or fewer records
                        }
                        rowKey={(record, index) => index.toString()}
                      ></Table>
                    </div>
                  </Content>
                </div>
              </div>
              {/* <!-- Footer --> */}
              <Footer />
              {/* <!-- / Footer --> */}
            </div>
          </div>
        </div>
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
