import { useNavigate } from "react-router-dom";
import Text from "@/src/components/Atoms/Text";
import styles from "./styles.module.scss";
import TextInputAtom from "@/src/components/Atoms/TextInput";
import Button from "@/src/components/Atoms/Button";
import PasswordValidationRole from "@/src/components/Molecules/PasswordValidationRole";

function ChangePassword() {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <Text className={styles.introText}>Reset Your Password</Text>

      <form className={styles.formContainer}>
        <TextInputAtom
          containerStyle={styles.input}
          label="New Password"
          type="password"
          labelStyle={styles.labelStyle}
          inputStyle={styles.emailInput}
        />

        <div className={styles.validationContainer}>
          <PasswordValidationRole title="Minimum 8 characters" />
          <PasswordValidationRole title="At least 1 Number" />
          <PasswordValidationRole title="At least 1 uppercase letter" />
        </div>

        <TextInputAtom
          containerStyle={styles.input}
          label="Confirm New Password"
          type="password"
          labelStyle={styles.labelStyle}
          inputStyle={styles.emailInput}
        />

        {/* Buttton */}

        <div className={styles.btnContainer}>
          <Button title="Confirm" isFullWidth />
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
