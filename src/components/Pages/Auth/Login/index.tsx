import { useNavigate } from "react-router-dom";
import { Checkbox, CheckboxProps } from "antd";
import { SubmitHandler, useForm } from "react-hook-form";
import Text from "@/src/components/Atoms/Text";
import styles from "./styles.module.scss";
import TextInputAtom from "@/src/components/Atoms/TextInput";
import Button from "@/src/components/Atoms/Button";
import HyperLink from "@/src/components/Atoms/HyperLink";
import ValidationSchema, { Auth } from "@/constants/Validation";

function Login() {
  const onChange: CheckboxProps["onChange"] = () => {};
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Auth>();

  const onSubmit: SubmitHandler<Auth> = (data) => {
    console.log("Form Submitted:", data);

    navigate("/");
  };

  return (
    <div className={styles.container}>
      <Text className={styles.introText}>
        Welcome to ARDI Merchant Gateway, please sign in using your account or
        apply for a merchant account below
      </Text>

      <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
        <TextInputAtom
          containerStyle={styles.input}
          label="Phone Number or Email Address"
          status={errors.emailOrPhone?.message ? "error" : "default"}
          reactHookFormProps={{
            ...register("emailOrPhone", ValidationSchema.emailOrPhone),
          }}
          errorMsg={errors.emailOrPhone?.message}
        />
        <TextInputAtom
          containerStyle={`${styles.input} ${styles.passwordContainer}`}
          label="Password"
          isPasswordInput
          type="password"
          labelStyle={styles.labelStyle}
          inputStyle={styles.test}
          status={errors.password?.message ? "error" : "default"}
          reactHookFormProps={{
            ...register("password", ValidationSchema.passwordLogin),
          }}
          errorMsg={errors.password?.message}
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
          <Button title="Login" isFullWidth type="submit" />
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
