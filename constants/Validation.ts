const ValidationSchema = {
  emailOrPhone: {
    required: "This field is required",
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$|^\d{11}$/,
      message: "Enter a valid email address or a 11-digit phone number",
    },
  },
  passwordLogin: {
    required: "This field is required",
  },

  passwordLength: {
    required: "Password is required",
    minLength: {
      value: 8,
      message: "Password must be at least 8 characters long",
    },
    pattern: {
      value:
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&]{8,}$/,
      message:
        "Password must include uppercase, lowercase, number, and special character",
    },
  },
};

export default ValidationSchema;
