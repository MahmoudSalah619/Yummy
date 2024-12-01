import { useNavigate } from "react-router-dom";
import { Checkbox, CheckboxProps } from "antd";
import Text from "@/src/components/Atoms/Text";
import styles from "./styles.module.scss";
import TextInputAtom from "@/src/components/Atoms/TextInput";
import Button from "@/src/components/Atoms/Button";
import HyperLink from "@/src/components/Atoms/HyperLink";
import PasswordValidationRole from "@/src/components/Molecules/PasswordValidationRole";

function SignUp() {
  const onChange: CheckboxProps["onChange"] = () => {};
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <Text className={styles.introText}>Create your merchant account</Text>

      <form className={styles.formContainer}>
        <TextInputAtom
          containerStyle={`${styles.input} ${styles.spaceTop}`}
          label="Brand Name"
          labelStyle={styles.labelStyle}
          inputStyle={styles.emailInput}
        />
        <TextInputAtom
          containerStyle={`${styles.input} ${styles.spaceTop}`}
          label="Email Address"
          labelStyle={styles.labelStyle}
          inputStyle={styles.emailInput}
        />
        <TextInputAtom
          containerStyle={`${styles.input} ${styles.spaceTop}`}
          label="Phone Number"
          labelStyle={styles.labelStyle}
          inputStyle={styles.emailInput}
        />
        <TextInputAtom
          containerStyle={`${styles.input} ${styles.passwordContainer}`}
          label="Password"
          isPasswordInput
          type="password"
          labelStyle={styles.labelStyle}
          inputStyle={styles.test}
        />
        <div className={styles.validationContainer}>
          <Text fontSize={12} fontFamily="font500" color="grey900">
            Password Requirements
          </Text>
          <PasswordValidationRole title="Minimum 8 characters" />
          <PasswordValidationRole title="At least 1 Number" />
          <PasswordValidationRole title="At least 1 uppercase letter" />
        </div>
        <div className={styles.rowContainer}>
          <Checkbox className={styles.checkboxStyle} onChange={onChange}>
            I agree to the{" "}
            <HyperLink to="/" title="terms and conditions" fontSize={16} />
          </Checkbox>
        </div>
        {/* Buttton */}

        <div className={styles.btnContainer}>
          <Button
            title="Sign Up"
            isFullWidth
            onClick={() => navigate("/otp")}
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

export default SignUp;
