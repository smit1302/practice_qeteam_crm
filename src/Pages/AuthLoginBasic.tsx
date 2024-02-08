// // SignIn.js

// import { useState } from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import InputAdornment from "@mui/material/InputAdornment";
// import IconButton from "@mui/material/IconButton";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";


// // Import validation functions
// import validation from './Validation/LoginValidation';

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const defaultTheme = createTheme();

// export default function SignIn() {
//   const [values, setValues] = useState({
//     email: "",
//     password: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [rememberMe, setRememberMe] = useState(false);

//   const handleInput = (event) => {
//     const { name, value } = event.target;
//     setValues((prev) => ({ ...prev, [name]: value }));

//     // Dynamic validation
//     const validationErrors = validation({ ...values, [name]: value });
//     setErrors((prevErrors) => ({ ...prevErrors, [name]: validationErrors[name] }));
//   };

//   const handleCheckboxChange = (event) => {
//     setRememberMe(event.target.checked);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const validationErrors = validation(values);
//     setErrors(validationErrors);

//     if (Object.keys(validationErrors).length === 0 && rememberMe) {
//       // Your logic for submitting the form (e.g., making an API call) goes here
//       console.log("Form submitted:", values);
//     }
//   };

//   const [showPassword, setShowPassword] = useState(false);

//   const handleTogglePassword = () => {
//     setShowPassword(
//       (prevShowPassword) => !prevShowPassword
//     );
//   };

//   const showPasswordInputType = showPassword ? "text" : "password";
 

//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign in
//           </Typography>
//           <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               label="Email Address"
//               autoComplete="email"
//               autoFocus
//               id="email"
//               name="email"
//               onChange={handleInput}
//               error={Boolean(errors.email)}
//               helperText={errors.email}
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               id="password"
//               onChange={handleInput}
//               autoComplete="current-password"
//               error={Boolean(errors.password)}
//               helperText={errors.password}
//               type={showPasswordInputType}
//               InputProps={{
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <IconButton
//                       onClick={handleTogglePassword}
//                       edge="end"
//                     >
//                       {showPassword ? (
//                         <Visibility />
//                       ) : (
//                         <VisibilityOff />
//                       )}
//                     </IconButton>
//                   </InputAdornment>
//                 ),
//               }}
//             />
//             <FormControlLabel
//               control={<Checkbox value="remember" color="primary" checked={rememberMe} onChange={handleCheckboxChange} />}
//               label="Remember me"
//             />
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Sign In
//             </Button>
//             <Grid container>
//               <Grid item xs>
//                 <Link href="/forgot-password" variant="body2">
//                   Forgot password?
//                 </Link>
//               </Grid>
//               <Grid item>
//                 <Link  href="/register"  variant="body2">
//                   {"Don't have an account? Sign Up"}
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//         <Copyright sx={{ mt: 8, mb: 4 }} />
//       </Container>
//     </ThemeProvider>
//   );
// }

import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

// Import validation functions
import validation, { ValidationErrors } from './Validation/LoginValidation.tsx';

interface FormValues {
  email: string;
  password: string;
}

interface FormErrors {
  email?: string;
  password?: string;
}

function Copyright(props: any) {
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

const defaultTheme = createTheme();

export default function SignIn() {
  const [values, setValues] = useState<FormValues>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));

    // Dynamic validation
    const validationErrors: ValidationErrors = validation({ ...values, [name]: value });
    setErrors((prevErrors) => ({ ...prevErrors, [name]: validationErrors[name] }));
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRememberMe(event.target.checked);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors: ValidationErrors = validation(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0 && rememberMe) {
      // Your logic for submitting the form (e.g., making an API call) goes here
      console.log("Form submitted:", values);
    }
  };

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleTogglePassword = () => {
    setShowPassword(
      (prevShowPassword) => !prevShowPassword
    );
  };

  const showPasswordInputType: string = showPassword ? "text" : "password";
 

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Email Address"
              autoComplete="email"
              autoFocus
              id="email"
              name="email"
              onChange={handleInput}
              error={Boolean(errors.email)}
              helperText={errors.email}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              id="password"
              onChange={handleInput}
              autoComplete="current-password"
              error={Boolean(errors.password)}
              helperText={errors.password}
              type={showPasswordInputType}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleTogglePassword}
                      edge="end"
                    >
                      {showPassword ? (
                        <Visibility />
                      ) : (
                        <VisibilityOff />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" checked={rememberMe} onChange={handleCheckboxChange} />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/forgot-password" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link  href="/register"  variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
