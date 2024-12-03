import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Checkbox, CheckboxProps } from "antd";
import { SubmitHandler, useForm } from "react-hook-form";
import Text from "@/src/components/Atoms/Text";
import styles from "./styles.module.scss";
import TextInput from "@/src/components/Atoms/TextInput";
import Button from "@/src/components/Atoms/Button";
import HyperLink from "@/src/components/Atoms/HyperLink";
import PasswordValidationRole from "@/src/components/Molecules/PasswordValidationRole";
import ValidationSchema, { Auth } from "@/constants/Validation";

export default function SignUpOrganism() {
  const [isChecked, setIsChecked] = useState(false); // Manage checkbox state

  const onCheckboxChange: CheckboxProps["onChange"] = (e) => {
    setIsChecked(e.target.checked); // Update the state when checkbox changes
  };
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Auth>();

  const password = watch("newPassword");

  const hasUppercase = (value: string) => {
    return /[A-Z]/.test(value);
  };

  const hasEightLetters = (value: string) => {
    return value?.length >= 8;
  };

  const hasNumber = (value: string) => {
    return /\d/.test(value);
  };

  const onSubmit: SubmitHandler<Auth> = (data) => {
    console.log("Password Changed Successfully:", data);
    navigate("/otp", {
      state: {
        forgetPassword: false,
      },
    }); // Redirect to a success page or another route
  };

  return (
    <div className={styles.container}>
      <Text className={styles.introText}>Create your merchant account</Text>

      <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          containerStyle={`${styles.input} ${styles.spaceTop}`}
          label="Brand Name"
          labelStyle={styles.labelStyle}
          inputStyle={styles.emailInput}
          status={errors.brandName ? "error" : "default"}
          reactHookFormProps={{
            ...register("brandName", ValidationSchema.brandName),
          }}
          errorMsg={errors.brandName?.message}
        />
        <TextInput
          containerStyle={`${styles.input} ${styles.spaceTop}`}
          label="Email Address"
          labelStyle={styles.labelStyle}
          inputStyle={styles.emailInput}
          status={errors.emailOrPhone?.message ? "error" : "default"}
          reactHookFormProps={{
            ...register("emailOrPhone", ValidationSchema.email),
          }}
          errorMsg={errors.emailOrPhone?.message}
        />
        <TextInput
          containerStyle={`${styles.input} ${styles.spaceTop}`}
          label="Phone Number"
          labelStyle={styles.labelStyle}
          inputStyle={styles.emailInput}
          status={errors.phoneNumber ? "error" : "default"}
          reactHookFormProps={{
            ...register("phoneNumber", ValidationSchema.phoneNumber),
          }}
          errorMsg={errors.phoneNumber?.message}
        />
        <TextInput
          containerStyle={`${styles.input} ${styles.passwordContainer}`}
          label="Password"
          isPasswordInput
          type="password"
          labelStyle={styles.labelStyle}
          inputStyle={styles.test}
          status={errors.newPassword ? "error" : "default"}
          reactHookFormProps={{
            ...register("newPassword", ValidationSchema.NewPassword),
          }}
          errorMsg={errors.newPassword?.message}
        />
        <div className={styles.validationContainer}>
          <Text fontSize={12} fontFamily="font500" color="grey900">
            Password Requirements
          </Text>
          <PasswordValidationRole
            title="Minimum 8 characters"
            isValid={hasEightLetters(password)}
          />
          <PasswordValidationRole
            title="At least 1 Number"
            isValid={hasNumber(password)}
          />
          <PasswordValidationRole
            title="At least 1 uppercase letter"
            isValid={hasUppercase(password)}
          />
        </div>
        <div className={styles.rowContainer}>
          <Checkbox
            className={styles.checkboxStyle}
            onChange={onCheckboxChange} // Handle checkbox change manually
          >
            I agree to the{" "}
            <HyperLink to="/" title="terms and conditions" fontSize={16} />
          </Checkbox>
        </div>
        {/* Buttton */}

        <div className={styles.btnContainer}>
          <Button
            disabled={!isChecked}
            title="Sign Up"
            isFullWidth
            type="submit"
          />
        </div>

        <div className={styles.signUpContainer}>
          <Text className={styles.signUpText}>
            Already have an account?
            <HyperLink
              to="/login"
              title="Sign In"
              fontSize={14}
              className={styles.space}
            />
          </Text>
        </div>
      </form>
    </div>
  );
}
