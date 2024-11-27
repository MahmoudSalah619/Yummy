import { ChangeEventHandler } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export interface TextInputAtomProps {
  name?: string;
  containerStyle?: string;
  inputStyle?: string;
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  value?: string;
  placeholder?: string;
  label?: string;
  isPasswordInput?: boolean;
  type?: "password" | "textarea" | "text" | "number";
  status?: "default" | "error" | "disabled";
  errorMsg?: string;
  reactHookFormProps?: UseFormRegisterReturn;
  prefixIcon?: string;
}
