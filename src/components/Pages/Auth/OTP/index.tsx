import { useEffect, useState } from "react";
import { Input } from "antd";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import Text from "@/src/components/Atoms/Text";
import styles from "./styles.module.scss";
import Button from "@/src/components/Atoms/Button";
import ValidationSchema, { Auth } from "@/constants/Validation";

function OTP() {
  const navigate = useNavigate();

  const [timer, setTimer] = useState(0); // Timer state in seconds
  const location = useLocation();
  const forgetPassword = location.state?.forgetPassword || false;
  console.log("🚀 ~ OTP ~ forgetPassword:", forgetPassword);

  const otpContainerStyle = {
    columnGap: 16,
    width: 328,
    height: 57,
    marginBottom: 20,
  };

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(interval); // Cleanup interval when the timer stops
    }

    // Return undefined explicitly when timer === 0
    return undefined;
  }, [timer]);

  const handleRequestNewCode = () => {
    setTimer(60); // Start 1-minute timer
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Auth>();

  const onSubmit: SubmitHandler<Auth> = (data) => {
    console.log("Form Submitted:", data);
    if (forgetPassword) {
      navigate("/change-password");
    }
  };

  return (
    <div className={styles.container}>
      <Text className={styles.introText}>
        An authentication code has been sent to your email.
      </Text>

      <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="otp"
          control={control}
          defaultValue=""
          rules={ValidationSchema.otp}
          render={({ field }) => (
            <Input.OTP
              {...field}
              formatter={(str) => str.toUpperCase()}
              length={4}
              className={styles.otpInput}
              type="number"
              size="large"
              status={errors.otp ? "error" : ""}
              style={otpContainerStyle}
            />
          )}
        />

        {timer === 0 ? (
          <Button
            customStyle={styles.sendOTP}
            title="You can request a new code now"
            variant="transparet"
            onClick={handleRequestNewCode}
          />
        ) : (
          <Text
            fontSize={11}
            fontFamily="font500"
            // color="black800"
          >
            {timer > 0
              ? `Request a new code after ${String(Math.floor(timer / 60)).padStart(2, "0")}:${String(timer % 60).padStart(2, "0")}`
              : "You can request a new code now"}
          </Text>
        )}

        <div className={styles.btnContainer}>
          <Button title="Submit" isFullWidth />
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

export default OTP;
