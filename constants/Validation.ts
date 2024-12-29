import { RcFile } from "antd/es/upload";

export interface Auth {
  emailOrPhone: string;
  password: string;
  otp: string;
  newPassword: string;
  confirmPassword: string;
  brandName: string;
  phoneNumber: number;
  bio: string;
  brandIcon: RcFile | undefined | File;
  commercialRegister: RcFile | undefined;
  taxId: RcFile | undefined;
}
export interface MerchantInfo {
  name: string;
  password: string;
  confirmPassword: string;
  email: string;
  phoneNumber: number;
  bio: string;
}

const ValidationSchema = {
  emailOrPhone: {
    required: "This field is required",
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$|^\d{11}$/,
      message: "Enter a valid email address or a 11-digit phone number",
    },
  },
  email: {
    required: "This field is required",
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message:
        "The email address you entered is not found, please enter the correct email address.",
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
  otp: {
    required: "OTP is required",
    pattern: {
      value: /^\d{4}$/,
      message: "OTP must be a 4-digit number",
    },
  },
  NewPassword: {
    required: "New password is required",
    validate: {
      hasUppercase: (value: string) =>
        /[A-Z]/.test(value) ||
        "Password must include at least one uppercase letter",
      hasEightCharacters: (value: string) =>
        value?.length >= 8 || "Password must be at least 8 characters long",
      hasNumber: (value: string) =>
        /\d/.test(value) || "Password must include at least one number",
    },
  },
  ConfirmPassword: (watch: (field: string) => string) => ({
    required: "Confirm password is required",
    validate: {
      matchesPassword: (value: string) =>
        value === watch("newPassword") || "Passwords do not match",
    },
  }),

  brandName: {
    required: "Brand name is required",
    minLength: {
      value: 2,
      message: "Brand name must be at least 2 characters long",
    },
    maxLength: {
      value: 50,
      message: "Brand name cannot exceed 50 characters",
    },
  },

  phoneNumber: {
    required: "Phone number is required",
    pattern: {
      value: /^\d{11}$/,
      message: "Phone number must be 11 digits",
    },
  },

  bio: {
    required: "Bio is required",
  },
  brandIcon: {
    required: "Brand icon is required",
  },
  commercialRegister: {
    required: "Commercial Register document is required",
  },
  taxId: {
    required: "Tax ID document is required",
  },
};

export default ValidationSchema;
