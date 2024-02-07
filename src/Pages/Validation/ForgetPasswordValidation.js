//this is validation file for forget password functionality, here in this file check that email should not be blank and it should be in proper format.

function validation(values) {
    const errors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!emailPattern.test(values.email)) {
      errors.email = "Invalid email format";
    }
  
    return errors;
  }
  
  export default validation;
  
    
  
  