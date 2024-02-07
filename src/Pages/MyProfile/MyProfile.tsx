// this is my profile file in which you can see your profile data like firstname, lastname, email, phone numner, country, state, city and profile pic.

import React, {ChangeEvent, useState} from "react";
import { Country, State, City } from "country-state-city";
import {
    Select,
    MenuItem,
    TextField,
    Button,
    InputLabel,
    FormControl,
    Grid,
    Typography,
    ThemeProvider,
    CssBaseline,
    Avatar,
    Box,
    Link,
    Checkbox,
    Container,
} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import IconButton from "@mui/material/IconButton";
import CancelIcon from "@mui/icons-material/Cancel";
import { styled } from "@mui/system";
import validation from "../Validation/MyProfileValidation";
import { createTheme } from "@mui/material/styles";
// import Chart from "../Dashboard/Chart";
// import Deposits from "../Dashboard/Diposits";
// import Orders from "../Dashboard/Orders";
import Autocomplete from "@mui/material/Autocomplete";
import Navbar from "../Components/Navbar";
import Menu from "../Components/Menu";

function Copyright(props) {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {"Copyright © "}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}
const ImageUploadButton = styled("label")({
    backgroundColor: "#3f51b5",
    color: "white",
    padding: "10px",
    borderRadius: "5px",
    cursor: "pointer",
    "&:hover": {
        backgroundColor: "#2d3a8c",
    },
});

const ResetButton = styled("label")({
    backgroundColor: "#3f51b5",
    color: "white",
    padding: "10px",
    borderRadius: "5px",
    cursor: "pointer",
    "&:hover": {
        backgroundColor: "#2d3a8c",
    },
});

const defaultTheme = createTheme();

interface ValidUser{
    firstName?: string,
    lastName?: string,
    email?: string,
    phoneNumber?: string
}


interface CountryType {
    name: string;
    isoCode: string;
}

interface StateType {
    name: string;
    isoCode: string;
    countryCode: string;
}

interface CityType {
    name: string;
    id: number;
}


interface Value extends ValidUser{
    state?: StateType | null,
    country?: CountryType | null,
    city?: CityType | null,
    image? : ArrayBuffer | null
}

interface Error extends ValidUser{
    state?: string,
    country?: string,
    city?: string,
    image?: string
}

const MyProfile = () => {
    const [values, setValues] = useState<Value>({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        country: null,
        state: null,
        city: null,
        image: null, // Add image property
    });

    const [errors, setErrors] = useState<Error>({});
    const [image, setImage] = useState(null);

    const handleImageChange = (e : ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                    setImage(reader.result);
                setValues((prev) => ({ ...prev, image: reader.result })); // Set image in values
            };
            reader.readAsDataURL(file);
        }
    };

    const handleResetImage = () => {
        setImage(null);
        setValues((prev) => ({ ...prev, image: null })); // Reset image in values
    };

    // Function to handle Country change
    const handleCountryChange = (item : CountryType) => {
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

        console.log("Country", Country);
    };

    // Function to handle State change
    const handleStateChange = (item : StateType) => {
        // Dynamic validation
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
    const handleCityChange = (item : CityType) => {
        // Dynamic validation
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
    const handleChange = (event : ChangeEvent<HTMLInputElement>) => {
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
    const resetForm = () => {
        setValues({
            country: null,
            state: null,
            city: null,
        });

        setErrors({});
    };

    const handleSubmit = async (event :  ChangeEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const validationErrors = validation(values);
        setErrors(validationErrors);

        console.log("Validation errors:", validationErrors); // Add this line for debugging

        if (Object.keys(validationErrors).length === 0) {
            // Your logic for submitting the form (e.g., making an API call) goes here
            console.log("Form submitted:", values);
        }
    };
    // TODO remove, this demo shouldn't need to reset the theme.
    const defaultTheme = createTheme();
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <>
            <ThemeProvider theme={defaultTheme}>
                <Box sx={{ display: "flex" }}>
                    <CssBaseline />
                    {/* Header */}
                    <Navbar />
                    {/* Sidebar */}
                    <Menu />
                    <Box
                        component="main"
                        sx={{
                            backgroundColor: (theme) =>
                                theme.palette.mode === "light"
                                    ? theme.palette.grey[100]
                                    : theme.palette.grey[900],
                            flexGrow: 1,
                            height: "100vh",
                            overflow: "auto",
                        }}
                    >
                        <Toolbar />
                        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <Paper
                                        sx={{ p: 2, display: "flex", flexDirection: "column" }}
                                    >
                                        <div className="card-body">
                                            <div className="d-flex align-items-start align-items-sm-center gap-4">
                                                {image ? (
                                                    <Avatar
                                                        sx={{
                                                            m: 1,
                                                            bgcolor: "secondary.main",
                                                            width: 100,
                                                            height: 100,
                                                        }}
                                                    >
                                                        <img
                                                            src={image}
                                                            alt="user-avatar"
                                                            className="d-block rounded"
                                                            height="100"
                                                            width="100"
                                                            id="uploadedAvatar"
                                                        />
                                                    </Avatar>
                                                ) : (
                                                    <Avatar
                                                        sx={{
                                                            m: 1,
                                                            bgcolor: "secondary.main",
                                                            width: 100,
                                                            height: 100,
                                                        }}
                                                    >
                                                        <img
                                                            src="../assets/img/avatars/1.png"
                                                            alt="user-avatar"
                                                            className="d-block rounded"
                                                            height="100"
                                                            width="100"
                                                            id="uploadedAvatar"
                                                        />
                                                    </Avatar>
                                                )}

                                                <div className="button-wrapper">
                                                    <ImageUploadButton
                                                        htmlFor="upload"
                                                        className="btn me-2 mb-4"
                                                        tabIndex="0"
                                                        component="label"
                                                        sx={{
                                                            backgroundColor: "#0d6efd",
                                                            "&:hover": {
                                                                backgroundColor: "gray",
                                                                color: "white",
                                                            },
                                                        }}
                                                    >
                            <span className="d-none d-sm-block">
                              Upload new photo
                            </span>
                                                        <CloudUploadIcon sx={{ marginLeft: "8px" }} />
                                                        <input
                                                            type="file"
                                                            id="upload"
                                                            className="account-file-input"
                                                            hidden
                                                            accept=".jpeg, .jpg, .png"
                                                            onChange={handleImageChange}
                                                        />
                                                    </ImageUploadButton>

                                                    <ResetButton
                                                        type="button"
                                                        className="btn account-image-reset mb-4"
                                                        onClick={handleResetImage}
                                                        component="button"
                                                        sx={{
                                                            backgroundColor: "white",
                                                            color: "#0d6efd",
                                                            boxShadow: "0 0 0 1px #0d6efd",
                                                            "&:hover": {
                                                                backgroundColor: "#f0f0f0",
                                                                boxShadow: "0 0 0 1px #0d6efd",
                                                            },
                                                        }}
                                                    >
                                                        <CancelIcon />
                                                        <span className="d-none d-sm-block">Reset</span>
                                                    </ResetButton>

                                                    <Typography className="text-muted mb-0">
                                                        Allowed JPG, GIF, or PNG. Max size of 800K
                                                    </Typography>
                                                </div>
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
                                            My Profile Details
                                        </Typography>
                                        <form
                                            id="formAccountSettings"
                                            method="POST"
                                            onSubmit={handleSubmit}
                                        >
                                            <Grid container spacing={2}>
                                                <Grid item xs={12} sm={6}>
                                                    <TextField
                                                        fullWidth
                                                        label="First Name"
                                                        name="firstName"
                                                        placeholder="Enter your First Name"
                                                        value={values.firstName}
                                                        onChange={handleChange}
                                                        error={Boolean(errors.firstName)}
                                                        helperText={errors.firstName}
                                                    />
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    <TextField
                                                        fullWidth
                                                        label="Last Name"
                                                        name="lastName"
                                                        placeholder="Enter your Last Name"
                                                        value={values.lastName}
                                                        onChange={handleChange}
                                                        error={Boolean(errors.lastName)}
                                                        helperText={errors.lastName}
                                                    />
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    <TextField
                                                        fullWidth
                                                        label="E-mail"
                                                        name="email"
                                                        placeholder="john.doe@example.com"
                                                        value={values.email}
                                                        onChange={handleChange}
                                                        error={Boolean(errors.email)}
                                                        helperText={errors.email}
                                                    />
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    <FormControl fullWidth>
                                                        <div className="input-group input-group-merge">
                              <span
                                  className="input-group-text"
                                  style={{ height: "55px" }}
                              >
                                IN (+91)
                              </span>
                                                            <TextField
                                                                type="text"
                                                                id="phoneNumber"
                                                                name="phoneNumber"
                                                                className="form-control"
                                                                placeholder="xxx xxx xxxx"
                                                                value={values.phoneNumber}
                                                                onChange={handleChange}
                                                                error={Boolean(errors.phoneNumber)}
                                                                helperText={errors.phoneNumber}
                                                            />
                                                        </div>
                                                    </FormControl>
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    <FormControl fullWidth>
                                                        <InputLabel htmlFor="country-select">
                                                            Country
                                                        </InputLabel>
                                                        <Select
                                                            label="Country"
                                                            value={values.country || ""}
                                                            onChange={(e) =>
                                                                handleCountryChange(e.target.value)
                                                            }
                                                            error={Boolean(errors.country)}
                                                            helperText={errors.country}
                                                            inputProps={{
                                                                name: "country",
                                                                id: "country-select",
                                                            }}
                                                        >
                                                            {Country.getAllCountries().map((country) => (
                                                                <MenuItem key={country.isoCode} value={country}>
                                                                    {country.name}
                                                                </MenuItem>
                                                            ))}
                                                        </Select>
                                                    </FormControl>
                                                </Grid>

                                                <Grid item xs={12} sm={6}>
                                                    <FormControl fullWidth>
                                                        <InputLabel htmlFor="state-select">
                                                            State
                                                        </InputLabel>
                                                        <Select
                                                            label="State"
                                                            value={values.state || ""}
                                                            onChange={(e) =>
                                                                handleStateChange(e.target.value)
                                                            }
                                                            error={Boolean(errors.state)}
                                                            helperText={errors.state || ''}
                                                        >
                                                            {values.country &&
                                                                State.getStatesOfCountry(
                                                                    values.country.isoCode
                                                                ).map((state) => (
                                                                    <MenuItem key={state.isoCode} value={state}>
                                                                        {state.name}
                                                                    </MenuItem>
                                                                ))}
                                                        </Select>
                                                    </FormControl>
                                                </Grid>

                                                <Grid item xs={12} sm={6}>
                                                    <FormControl fullWidth>
                                                        <InputLabel htmlFor="city-select">City</InputLabel>
                                                        <Select
                                                            label="city"
                                                            value={values.city || ""}
                                                            onChange={(e) => handleCityChange(e.target.value)}
                                                            error={Boolean(errors.city)}
                                                            helperText={errors.city || ''}
                                                        >
                                                            {values.state &&
                                                                City.getCitiesOfState(
                                                                    values.state.countryCode,
                                                                    values.state.isoCode
                                                                ).map((city) => (
                                                                    <MenuItem key={city.id} value={city}>
                                                                        {city.name}
                                                                    </MenuItem>
                                                                ))}
                                                        </Select>
                                                    </FormControl>
                                                </Grid>
                                            </Grid>

                                            <div
                                                className="mt-2"
                                                style={{ display: "flex", gap: "10px" }}
                                            >
                                                <Button
                                                    type="submit"
                                                    variant="contained"
                                                    color="primary"
                                                >
                                                    Save changes
                                                </Button>
                                                <Button
                                                    type="reset"
                                                    variant="outlined"
                                                    color="primary"
                                                    onClick={() => resetForm()}
                                                >
                                                    Cancel
                                                </Button>
                                            </div>
                                        </form>
                                    </Paper>
                                </Grid>
                            </Grid>
                            <Copyright sx={{ pt: 4 }} />
                        </Container>
                    </Box>
                </Box>
            </ThemeProvider>
        </>
    );
};

export default MyProfile;
