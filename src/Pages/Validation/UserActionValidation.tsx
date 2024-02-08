// //this is validation file for user action page.Check for user name should start with a capital letter, no digits, no special character.Email should be in proper format like there is @ and state, city, country are required

// function validation(values) {
//   const errors = {};
//   const namePattern = /^[A-Z][a-z']+$/;
//   const emailPattern = /^\S+@\S+\.\S+$/;

//   if (!values.uname) {
//     errors.uname = "User name is required";
//   } else if (!namePattern.test(values.uname)) {
//     errors.uname =
//       "User name should start with a capital letter, no digits, and no special characters.";
//   }

//   if (!values.uemail) {
//     errors.uemail = "Email is required";
//   } else if (!emailPattern.test(values.uemail)) {
//     errors.uemail = "Invalid email format";
//   }

//   if (!values.country) {
//     errors.country = "Country is required";
//   }
//   if (!values.state) {
//     errors.state = "State is required";
//   }
//   if (!values.city) {
//     errors.city = "City  is required";
//   }

//   return errors;
// }

// export default validation;
interface FormValues {
  uname: string;
  uemail: string;
  country: string;
  state: string;
  city: string;
}

interface FormErrors {
  uname?: string;
  uemail?: string;
  country?: string;
  state?: string;
  city?: string;
}

function validation(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  const namePattern: RegExp = /^[A-Z][a-z']+$/;
  const emailPattern: RegExp = /^\S+@\S+\.\S+$/;

  if (!values.uname) {
    errors.uname = "User name is required";
  } else if (!namePattern.test(values.uname)) {
    errors.uname =
      "User name should start with a capital letter, no digits, and no special characters.";
  }

  if (!values.uemail) {
    errors.uemail = "Email is required";
  } else if (!emailPattern.test(values.uemail)) {
    errors.uemail = "Invalid email format";
  }

  if (!values.country) {
    errors.country = "Country is required";
  }

  if (!values.state) {
    errors.state = "State is required";
  }

  if (!values.city) {
    errors.city = "City  is required";
  }

  return errors;
}

export default validation;
