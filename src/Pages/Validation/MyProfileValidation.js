//this is validation file for my profile page.Check for firstname and lastname should start with a capital letter, no digits, no special character.Email should be in proper format like there is @ and . then phone number should contain only digits and have a maximum length of 10 digits then these all fields and state, city, country are required 

function validation(values) {
  const errors = {};
  const namePattern = /^[A-Z][a-z']+$/;
  const phonePattern = /^\d{1,10}$/; // Updated phonePattern to allow 1 to 10 digits
  const emailPattern = /^\S+@\S+\.\S+$/;

  if (!values.firstName) {
    errors.firstName = "First name is required";
  } else if (!namePattern.test(values.firstName)) {
    errors.firstName = "First name should start with a capital letter, no digits, and no special characters.";
  }

  if (!values.lastName) {
    errors.lastName = "Last name is required";
  } else if (!namePattern.test(values.lastName)) {
    errors.lastName = "Last name should start with a capital letter, no digits, and no special characters.";
  }

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!emailPattern.test(values.email)) {
    errors.email = "Invalid email format";
  }


  if (!values.phoneNumber) {
    errors.phoneNumber = "Phone number is required";
  } else if (!phonePattern.test(values.phoneNumber)) {
    errors.phoneNumber = "Phone number should contain only digits and have a maximum length of 10 digits.";
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
