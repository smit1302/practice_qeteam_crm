//this forget password file, from which if user is forget their password then change from this file functionality.User have to fill the email field and it's valid then link for password will send to that email id.

import React, { useState } from "react";

import validation from "./Validation/ForgetPasswordValidation";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Link as MuiLink,
  SvgIcon,
  Avatar, // Add this line
  Checkbox, // Add this line
  FormControlLabel,
  Box,
  CssBaseline,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LockResetIcon from "@mui/icons-material/LockReset";
import Link from "@mui/material/Link";

export default function Auth_forgot_password_basic() {
  const [values, setValues] = useState({
    email: "",
  });
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));

    // Dynamic validation
    const validationErrors = validation({ ...values, [name]: value });
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validationErrors[name],
    }));
  };

  const defaultTheme = createTheme();

  const handleSubmit = async (event) => {
    if (event) {
      event.preventDefault();
    }

    const validationErrors = validation(values);
    setErrors(validationErrors);
    
    if (Object.keys(validationErrors).length === 0) {
      // Your logic for submitting the form (e.g., making an API call) goes here
      console.log("Form submitted:", values);
    }
  };

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Container maxWidth="s" component="main">
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
              Forgot Password?
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={handleInput}
                error={Boolean(errors.email)}
              helperText={errors.email}
              />
            
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Send Reset Link
              </Button>

              <Grid container>
                <Grid item xs>
                  <Link href="/login" variant="body2">
                    <ArrowBackIosIcon sx={{ height: "15px" }} />
                    Back to login
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
     
    </>
  );
}
