import { useNavigate } from "react-router-dom";
import { Checkbox, CheckboxProps } from "antd";
import { SubmitHandler, useForm } from "react-hook-form";
import Text from "@/src/components/Atoms/Text";
import TextInput from "@/src/components/Atoms/TextInput";
import Button from "@/src/components/Atoms/Button";
import HyperLink from "@/src/components/Atoms/HyperLink";
import ValidationSchema, { Auth } from "@/constants/Validation";
import styles from "./styles.module.scss";
// import { login } from "@/reducers/authReducer";
import loginHandler from "@/utils/loginHandler";
import useAutoCompleteTranslation from "@/hooks/useAutoCompleteTranslation";
import { User } from "@/src/apis/types/auth";
import loginImage from "@/src/assets/images/pexels-shantanu-pal-938952-2802527.jpg";

export default function LoginOrganism() {
  const { t } = useAutoCompleteTranslation();
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
    const user_type =
      data.emailOrPhone === "admin@gmail.com" ? "admin" : "seller";
    const dummy_data = {
      user_type,
    };
    loginHandler({
      token: "skshdj36su3h77",
      data: dummy_data as User,
    });
    navigate("/");
    // dispatch(login("skshdj36su3h77"));
  };
  return (
    <div className={styles.container}>
      <div>
        <Text
          className={styles.introText}
          i18nKey="Welcome to Yummy, please sign in using your account to check our products and stuff"
        />

        <form
          className={styles.formContainer}
          onSubmit={handleSubmit(onSubmit)}
        >
          <TextInput
            containerStyle={styles.input}
            label="email_or_phone_label"
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
              {t("remember_me")}
            </Checkbox>

            <HyperLink
              to="/forget-password"
              title={t("forgot_password")}
              fontSize={12}
            />
          </div>
          {/* Buttton */}

          <div className={styles.btnContainer}>
            <Button title="Login" isFullWidth type="submit" />
          </div>
        </form>
      </div>
      {/* <div className={styles.imageContainer}>
        <img src={loginImage} alt="login" />
      </div> */}
    </div>
  );
}
