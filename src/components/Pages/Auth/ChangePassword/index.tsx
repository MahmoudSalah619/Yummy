import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import Text from "@/src/components/Atoms/Text";
import styles from "./styles.module.scss";
import TextInputAtom from "@/src/components/Atoms/TextInput";
import Button from "@/src/components/Atoms/Button";
import PasswordValidationRole from "@/src/components/Molecules/PasswordValidationRole";
import ValidationSchema, { Auth } from "@/constants/Validation";

function ChangePassword() {
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

  // Handle Form Submission
  const onSubmit: SubmitHandler<Auth> = (data) => {
    console.log("Password Changed Successfully:", data);
    navigate("/success-changed-password"); // Redirect to a success page or another route
  };

  return (
    <div className={styles.container}>
      <Text className={styles.introText}>Reset Your Password</Text>

      <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
        <TextInputAtom
          containerStyle={styles.input}
          label="New Password"
          type="password"
          labelStyle={styles.labelStyle}
          inputStyle={styles.emailInput}
          status={errors.newPassword ? "error" : "default"}
          reactHookFormProps={{
            ...register("newPassword", ValidationSchema.NewPassword),
          }}
          errorMsg={errors.newPassword?.message}
        />

        <div className={styles.validationContainer}>
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

        <TextInputAtom
          containerStyle={styles.input}
          label="Confirm New Password"
          type="password"
          labelStyle={styles.labelStyle}
          inputStyle={styles.emailInput}
          status={errors.confirmPassword ? "error" : "default"}
          reactHookFormProps={{
            ...register(
              "confirmPassword",
              ValidationSchema.ConfirmPassword(watch)
            ),
          }}
          errorMsg={errors.confirmPassword?.message}
        />

        {/* Buttton */}

        <div className={styles.btnContainer}>
          <Button type="submit" title="Confirm" isFullWidth />
          <Button
            onClick={() => navigate(-1)}
            title="Go Back"
            isFullWidth
            variant="transparent-grey"
          />
        </div>
      </form>
    </div>
  );
}

export default ChangePassword;
