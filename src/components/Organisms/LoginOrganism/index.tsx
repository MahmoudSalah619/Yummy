import { useNavigate } from "react-router-dom";
import { Checkbox, CheckboxProps } from "antd";
import { SubmitHandler, useForm } from "react-hook-form";
// import { useDispatch } from "react-redux";
import Text from "@/src/components/Atoms/Text";
import TextInput from "@/src/components/Atoms/TextInput";
import Button from "@/src/components/Atoms/Button";
import HyperLink from "@/src/components/Atoms/HyperLink";
import ValidationSchema, { Auth } from "@/constants/Validation";
import styles from "./styles.module.scss";
// import { login } from "@/reducers/authReducer";
import loginHandler from "@/utils/loginHandler";

export default function LoginOrganism() {
  const onChange: CheckboxProps["onChange"] = () => {};
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Auth>();

  const onSubmit: SubmitHandler<Auth> = (data) => {
    console.log("Form Submitted:", data);
    loginHandler({ token: "skshdj36su3h77" });
    navigate("/");
    // dispatch(login("skshdj36su3h77"));
  };
  return (
    <div className={styles.container}>
      <Text className={styles.introText}>
        Welcome to ARDI Merchant Gateway, please sign in using your account or
        apply for a merchant account below
      </Text>

      <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          containerStyle={styles.input}
          label="Phone Number or Email Address"
          status={errors.emailOrPhone?.message ? "error" : "default"}
          reactHookFormProps={{
            ...register("emailOrPhone", ValidationSchema.emailOrPhone),
          }}
          errorMsg={errors.emailOrPhone?.message}
        />
        <TextInput
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
