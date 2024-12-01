import { useNavigate } from "react-router-dom";
import Text from "@/src/components/Atoms/Text";
import styles from "./styles.module.scss";
import TextInputAtom from "@/src/components/Atoms/TextInput";
import Button from "@/src/components/Atoms/Button";

function ForgetPassword() {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <Text className={styles.introText}>
        To reset your password, please enter the email address of your ardi
        account
      </Text>

      <form className={styles.formContainer}>
        <TextInputAtom
          containerStyle={styles.input}
          label="Email Address"
          labelStyle={styles.labelStyle}
          inputStyle={styles.emailInput}
        />

        {/* Buttton */}

        <div className={styles.btnContainer}>
          <Button title="Reset Password" isFullWidth variant="dark" />
        </div>

        <div className={styles.btnContainer}>
          <Button
            onClick={() => navigate("/login")}
            title="Go Back"
            isFullWidth
            variant="transparent-grey"
          />
        </div>
      </form>
    </div>
  );
}

export default ForgetPassword;
