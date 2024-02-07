//this is change password file from which you can change your password for that you have to fill current password , new password and confirm password field with validation like current password and new password should not match, there is 8 character max length, atleast one lowercase, one uppercase, one special character.Then new password and confirm password should be match.

import React, { useState } from "react";
import validation from "../Validation/ChangePasswordValidation";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LockResetIcon from "@mui/icons-material/LockReset";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Badge from "@mui/material/Badge";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { styled } from "@mui/material/styles";
import { mainListItems, secondaryListItems } from "../Dashboard/ListItems";
import Navbar from "../Compoents/Navbar";
import Menu from "../Compoents/Menu";


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const drawerWidth = 240;

export default function Profile_change_password() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const [values, setValues] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

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
  const resetForm = () => {
    setValues({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });

    setErrors({});
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validation(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Your logic for submitting the form (e.g., making an API call) goes here
      console.log("Form submitted:", values);
    }
  };

  //current password field visibility
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowCurrentPassword(
      (prevShowCurrentPassword) => !prevShowCurrentPassword
    );
  };

  const currentPasswordInputType = showCurrentPassword ? "text" : "password";

  //new password field visibility
  const [showNewPassword, setShowNewPassword] = useState(false);

  const handleToggleNewPassword = () => {
    setShowNewPassword((prevShowNewPassword) => !prevShowNewPassword);
  };

  const newPasswordInputType = showNewPassword ? "text" : "password";

  //confirm password field visibility
  const [showConfrimPassword, setShowConfrimPassword] = useState(false);

  const handleToggleConfrimPassword = () => {
    setShowConfrimPassword(
      (prevShowConfrimPassword) => !prevShowConfrimPassword
    );
  };

  const confrimPasswordInputType = showConfrimPassword ? "text" : "password";

  const defaultTheme = createTheme();

  return (
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
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockResetIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Change Password
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  fullWidth
                  id="currentPassword"
                  name="currentPassword"
                  label="Current Password"
                  value={values.currentPassword}
                  onChange={handleChange}
                  placeholder="Enter your current password"
                  error={Boolean(errors.currentPassword)}
                  helperText={errors.currentPassword}
                  type={currentPasswordInputType}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleTogglePassword} edge="end">
                          {showCurrentPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={{ mt: 2 }}
                />

                <TextField
                  fullWidth
                  id="newPassword"
                  name="newPassword"
                  label="New Password"
                  value={values.newPassword}
                  onChange={handleChange}
                  placeholder="Enter your new password"
                  error={Boolean(errors.newPassword)}
                  helperText={errors.newPassword}
                  type={newPasswordInputType}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleToggleNewPassword}
                          edge="end"
                        >
                          {showNewPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={{ mt: 2 }}
                />

                <TextField
                  fullWidth
                  id="confirmPassword"
                  name="confirmPassword"
                  label="Confirm Password"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  placeholder="Enter your confirm password"
                  error={Boolean(errors.confirmPassword)}
                  helperText={errors.confirmPassword}
                  type={confrimPasswordInputType}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleToggleConfrimPassword}
                          edge="end"
                        >
                          {showConfrimPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={{ mt: 2 }}
                />
              </Box>
              <Box mt={2}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{ marginRight: 2 }}
                  onClick={handleSubmit}
                >
                  Save changes
                </Button>
                <Button
                  type="button"
                  variant="outlined"
                  color="primary"
                  onClick={resetForm}
                >
                  Cancel
                </Button>
              </Box>
            </Box>
          </Container>
            
          </Container>
          <Copyright sx={{ pt: 4 }} />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
