// //this is validation file for change password.It's ckecking for fileds like current password, new password, confirm password should not be blank also current password must contain at least 8 characters, one uppercase, one lowercase, one digit, one special character,there all are same for new password. Additional thing is new password and current password should not be match also new password and confirm password should be match.

// function validation(values) {
//   const errors = {};
//   const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?!.*\s).{8,}$/;

//   // Validate current password
//   if (!values.currentPassword || !values.currentPassword.trim()) {
//       errors.currentPassword = "Current password is required.";
//   } else if (!passwordPattern.test(values.currentPassword)) {
//       errors.currentPassword =
//           "Password must contain at least 8 characters, including uppercase, lowercase, digits, and special characters";
//   }

//   // Validate new password
//   if (!values.newPassword || !values.newPassword.trim()) {
//       errors.newPassword = "New password is required.";
//   } else if (!passwordPattern.test(values.newPassword)) {
//       errors.newPassword =
//           "Password must contain at least 8 characters, including uppercase, lowercase, digits, and special characters";
//   }

//   // Validate confirm password
//   if (!values.confirmPassword || !values.confirmPassword.trim()) {
//       errors.confirmPassword = "Confirm password is required.";
//   } else if (values.newPassword !== values.confirmPassword) {
//       errors.confirmPassword = "Passwords do not match.";
//   }

//   // Validate that current password and new password are not the same
//   if (values.currentPassword && values.newPassword && values.currentPassword === values.newPassword) {
//       errors.newPassword = "New password should not be the same as the current password.";
//   }

//   console.log("Validation errors:", errors); // Log errors to the console

//   return errors;
// }

// export default validation;
interface FormValues {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
  }
  
  interface Errors {
    currentPassword?: string;
    newPassword?: string;
    confirmPassword?: string;
  }
  
  function validation(values: FormValues): Errors {
    const errors: Errors = {};
    const passwordPattern: RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?!.*\s).{8,}$/;
  
    // Validate current password
    if (!values.currentPassword || !values.currentPassword.trim()) {
      errors.currentPassword = "Current password is required.";
    } else if (!passwordPattern.test(values.currentPassword)) {
      errors.currentPassword =
        "Password must contain at least 8 characters, including uppercase, lowercase, digits, and special characters";
    }
  
    // Validate new password
    if (!values.newPassword || !values.newPassword.trim()) {
      errors.newPassword = "New password is required.";
    } else if (!passwordPattern.test(values.newPassword)) {
      errors.newPassword =
        "Password must contain at least 8 characters, including uppercase, lowercase, digits, and special characters";
    }
  
    // Validate confirm password
    if (!values.confirmPassword || !values.confirmPassword.trim()) {
      errors.confirmPassword = "Confirm password is required.";
    } else if (values.newPassword !== values.confirmPassword) {
      errors.confirmPassword = "Passwords do not match.";
    }
  
    // Validate that current password and new password are not the same
    if (values.currentPassword && values.newPassword && values.currentPassword === values.newPassword) {
      errors.newPassword = "New password should not be the same as the current password.";
    }
  
    console.log("Validation errors:", errors); // Log errors to the console
  
    return errors;
  }
  
  export default validation;
  