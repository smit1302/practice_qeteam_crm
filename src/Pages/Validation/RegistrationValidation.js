//this is validation file for registration like username must start with an uppercase letter, and can only contain letters, numbers, underscores, and hyphens, Email should be in proper formate, Password must contain at least 8 characters, including uppercase, lowercase, digits, and special characters. Also these three are required.

function validation(values) {
  const errors = {};
  const firstnamePattern = /^[A-Z][a-zA-Z0-9_-]{2,19}$/; // First letter is uppercase, and total length is between 3 and 20 characters
  const lastnamePattern = /^[A-Z][a-zA-Z0-9_-]{2,19}$/; // First letter is uppercase, and total length is between 3 and 20 characters
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?!.*\s).{8,}$/;

  if (!values.firstname) {
    errors.firstname = "First_name is required";
  } else if (!firstnamePattern.test(values.firstname)) {
    errors.firstname = "First_name must start with an uppercase letter, and can only contain letters, numbers, underscores, and hyphens";
  }
  if (!values.lastname) {
    errors.lastname = "Last_name is required";
  } else if (!lastnamePattern.test(values.lastname)) {
    errors.lastname = "Last_name must start with an uppercase letter, and can only contain letters, numbers, underscores, and hyphens";
  }


  if (!values.email) {
    errors.email = "Email is required";
  } else if (!emailPattern.test(values.email)) {
    errors.email = "Invalid email format";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (!passwordPattern.test(values.password)) {
    errors.password = "Password must contain at least 8 characters, including uppercase, lowercase, digits, and special characters";
  }

  return errors;
}

export default validation;


  

