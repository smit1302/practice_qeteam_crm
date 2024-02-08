import React, { useRef, useState, ChangeEvent, FormEvent } from "react";
import { DeleteFilled, EditFilled, EyeOutlined } from "@ant-design/icons";
import { Country, State, City } from "country-state-city";
//import Select from "react-select";
import { Layout, Button, Table, Image, Input, Modal, Space } from "antd";
import Menu from "../Components/Menu.tsx";
import Navbar from "../Components/Navbar.tsx";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from "../Components/Footer.tsx";
import Swal from "sweetalert";
import validation from "../Validation/UserActionValidation.tsx";
import { Select } from 'antd';


const { Content } = Layout;
const { Search } = Input;

interface User {
  uname: string;
  images: File[];
  country: string | null;
  state: String | null;
  city: string | null;
  uemail: string;
}

export default function User_Actions(): JSX.Element {
  // Form fields State
  const [image, setImage] = useState<File[]>([]);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const [imagePreview, setImagePreview] = useState<string[]>([]);

  // Pagination
  const [pageSize, setPageSize] = useState<number>(3);
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Add update state
  const [edit, setEdit] = useState<boolean>(false);
  const [active, setActive] = useState<number | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  // Form open/close
  const [FormModalVisible, setFormModalVisible] = useState<boolean>(false);
  const [viewModalVisible, setViewModalVisible] = useState<boolean>(false);
  const [viewedUser, setViewedUser] = useState<User | null>(null);

  // Clear the form fields and errors before opening the form
  const [values, setValues] = useState<User>({
    uname: "",
    images: [],
    country: null,
    state: null,
    city: null,
    uemail: "",
  });
  const [errors, setErrors] = useState<Partial<User>>({});

  // Function to handle Country change
  const handleCountryChange = (item: Country): void => {
    // Update error state dynamically
    const validationErrors = validation({ ...values, country: item });
    setErrors((prevErrors) => ({
      ...prevErrors,
      country: validationErrors.country,
    }));

    // Set Values
    setValues((prev) => ({
      ...prev,
      country: item,
      state: null, // Clear state on country change
      city: null, // Clear city on country change
    }));
  };

  // Function to handle State change
  const handleCityChange = (item: City): void => {
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

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
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

  const OnEditClick = (index: number): void => {
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
    setImage([...user.images]); // Set image state for display
    setImagePreview([...user.images.map((image) => URL.createObjectURL(image))]);

    // Set the index of the user being edited
    setActive(index);

    // Set the edit mode to true
    setEdit(true);

    // Show the form modal
    setFormModalVisible(true);
    setIsEdit(true);
  };

  const handleOk = (e: FormEvent): void => {
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

      // If in edit mode and an active index is set, update the existing user
      if (edit && active !== null) {
        setUsers((prevUsers) => {
          const newUsers = [...prevUsers];
          newUsers[active] = updatedUser;
          return newUsers;
        });
        // Reset edit mode and active index
        setEdit(false);
        setActive(null);
      } else {
        // If not in edit mode or active index not set, add the new user to the users state
        setUsers((prevUsers) => [...prevUsers, updatedUser]);
      }
      // Clear form fields and errors
      setValues({
        uname: "",
        country: null,
        state: null,
        city: null,
        images: [],
        uemail: "",
      });
      setImage([]);
      setImagePreview([]);
      setErrors({});


      // Close the form modal
      setFormModalVisible(false);
    }
  };

  // Close the form and empty the form fields
  const handleCancel = (): void => {
    setValues({
      uname: "",
      images: [],
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
  const handleImageChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const newImage = event.target.files?.[0];
    if (newImage) {
      setImage([newImage]);
      const newPreview = URL.createObjectURL(newImage);
      setImagePreview([newPreview]);
    }
  };

  const handleRemoveImage = (): void => {
    setImage([]);
    setImagePreview([]);
  };

  // View
  const handleViewModalCancel = (): void => {
    setViewModalVisible(false);
  };

  const onViewClick = (index: number): void => {
    setViewedUser(users[index]);
    setViewModalVisible(true);
  };

  // DELETE
  const deleteuser = (user: User): void => {
    Swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this user!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        const copy = users.filter((item) => item !== user);
        setUsers([...copy]);
        Swal("Poof! The user has been deleted!", {
          icon: "success",
        });
      } else {
        Swal("The user is safe!");
      }
    });
  };

  // Search
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = (e: ChangeEvent<HTMLInputElement>): void => {
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
    return searchFields.some((field) =>
      field?.toLowerCase().includes(normalizedQuery)
    ); // Use optional chaining here
  });

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
          {images ? (
            images.map((image, index) => (
              <Image
                key={index}
                src={URL.createObjectURL(image)}
                alt="User Upload"
                width={80}
                height={80}
                style={{ margin: "0 5px" }}
              />
            ))
          ) : (
            "No Images"
          )}
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
          <Button
            type="primary"
            Primary
            onClick={() => OnEditClick(index)}
          >
            <EditFilled />
          </Button>
          <Button
            type="primary"
            danger
            onClick={() => deleteuser(record)}
          >
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
          {/* Menu */}
          <Menu />
          {/* / Menu */}

          {/* Layout container */}
          <div className="layout-page">
            {/* Navbar */}
            <Navbar />
            {/* / Navbar */}

            {/* Content wrapper */}
            <div className="content-wrapper">
              {/* Content */}
              <div className="container-xxl flex-grow-1 container-p-y">
                <h4 className="py-3 mb-4">
                  <span className="text-muted fw-light">User /</span>{" "}
                  User Details
                </h4>

                <div className="card">
                  <h5 className="card-header">Details</h5>
                  <div className="table-responsive text-nowrap">
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
                        {/* Form inputs */}
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
                              tabIndex={0}
                            >
                              <span className="d-none d-sm-block">
                                Upload new photo
                              </span>
                              <input
                                id="upload"
                                type="file"
                                ref={imageInputRef}
                                accept=".jpg,.jpeg,.png"
                                style={{ display: "none" }}
                                onChange={handleImageChange}
                              />
                            </label>
                            <button
                              className="btn btn-outline-danger mb-4"
                              type="button"
                              onClick={handleRemoveImage}
                            >
                              Remove
                            </button>
                          </div>
                        </div>

                        <div className="col-sm-6">
                          <label className="form-label">User Name</label>
                          <input
                            type="text"
                            className="form-control"
                            name="uname"
                            value={values.uname}
                            onChange={handleChange}
                          />
                          {errors.uname && (
                            <p className="text-danger">{errors.uname}</p>
                          )}
                        </div>

                        <div className="col-sm-6">
                          <label className="form-label">Email</label>
                          <input
                            type="text"
                            className="form-control"
                            name="uemail"
                            value={values.uemail}
                            onChange={handleChange}
                          />
                          {errors.uemail && (
                            <p className="text-danger">{errors.uemail}</p>
                          )}
                        </div>

                        <div className="col-sm-6">
                          <label className="form-label">Country</label>
                          <Select
                            options={Country.getAllCountries().map(
                              (country) => ({
                                label: country.name,
                                value: country,
                              })
                            )}
                            onChange={(option) => handleCountryChange(option.value)}
                          />
                          {errors.country && (
                            <p className="text-danger">{errors.country}</p>
                          )}
                        </div>

                        <div className="col-sm-6">
                          <label className="form-label">State</label>
                          <Select
                            options={
                              values.country
                                ? State.getStatesOfCountry(values.country.isoCode)
                                  .map((state) => ({
                                    label: state.name,
                                    value: state,
                                  }))
                                : []
                            }
                            onChange={(option) => handleCityChange(option.value)}
                          />
                          {errors.city && (
                            <p className="text-danger">{errors.city}</p>
                          )}
                        </div>

                        <div className="col-sm-6">
                          <label className="form-label">City</label>
                          <Select
                            options={
                              values.state
                                ? City.getCitiesOfState(values.state.countryCode, values.state.isoCode)
                                  .map((city) => ({
                                    label: city.name,
                                    value: city,
                                  }))
                                : []
                            }
                            onChange={(option) => setValues({ ...values, city: option.value })}
                          />
                          {errors.city && (
                            <p className="text-danger">{errors.city}</p>
                          )}
                        </div>

                        <div className="col-12">
                          <div className="modal-footer mt-4">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-bs-dismiss="modal"
                              onClick={handleCancel}
                            >
                              Close
                            </button>
                            <button type="submit" className="btn btn-primary">
                              Save changes
                            </button>
                          </div>
                        </div>
                      </form>
                    </Modal>
                  </div>
                  <div className="card-body">
                    <div className="container">
                      <Search
                        placeholder="input search text"
                        onChange={handleSearch}
                        style={{ width: 200, float: "right" }}
                      />
                    </div>
                    <Table
                      columns={columns}
                      dataSource={filteredUsers}
                      pagination={{
                        pageSize: pageSize,
                        total: users.length,
                        onChange: (page) => setCurrentPage(page),
                      }}
                      rowKey={(record) => record.uname}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* / Content */}
          </div>
          {/* / Layout container */}
        </div>
      </div>
      {/* / Page content */}
      <Footer />
    </>
  );
}
