import { Checkbox, CheckboxProps } from "antd";
import Text from "@/src/components/Atoms/Text";
import styles from "./styles.module.scss";
import TextInputAtom from "@/src/components/Atoms/TextInput";
import Button from "@/src/components/Atoms/Button";
import HyperLink from "@/src/components/Atoms/HyperLink";

function Login() {
  const onChange: CheckboxProps["onChange"] = () => {};
  return (
    <div className={styles.container}>
      <Text className={styles.introText}>
        Welcome to ARDI Merchant Gateway, please sign in using your account or
        apply for a merchant account below
      </Text>

      <form className={styles.formContainer}>
        <TextInputAtom
          containerStyle={styles.input}
          label="Phone Number or Email Address"
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
        <div className={styles.rowContainer}>
          <Checkbox className={styles.checkboxStyle} onChange={onChange}>
            Remember Me
          </Checkbox>

          <HyperLink
            to="/forget-password"
            title="Forgot Password?"
            fontSize={12}
          />
        </div>
        {/* Buttton */}

        <div className={styles.btnContainer}>
          <Button title="Login" isFullWidth />
        </div>

        <div className={styles.signUpContainer}>
          <Text className={styles.signUpText}>
            Don’t have an account?
            <HyperLink
              to="/sign-up"
              title="Sign Up"
              fontSize={14}
              className={styles.space}
            />
          </Text>
        </div>
      </form>
    </div>
  );
}

export default Login;
