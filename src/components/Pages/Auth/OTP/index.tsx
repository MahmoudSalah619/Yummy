import { OTPProps } from "antd/es/input/OTP";
import { useEffect, useState } from "react";
import { Input } from "antd";
import { useNavigate } from "react-router-dom";
import Text from "@/src/components/Atoms/Text";
import styles from "./styles.module.scss";
import Button from "@/src/components/Atoms/Button";

function OTP() {
  const navigate = useNavigate();

  const [timer, setTimer] = useState(0); // Timer state in seconds

  const sharedProps: OTPProps = {
    // onChange,
    // onInput,
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

  return (
    <div className={styles.container}>
      <Text className={styles.introText}>
        An authentication code has been sent to your email.
      </Text>

      <form className={styles.formContainer}>
        <Input.OTP
          formatter={(str) => str.toUpperCase()}
          {...sharedProps}
          length={4}
          className={styles.otpInput}
          type="number"
          size="large"
          style={{
            backgroundColor: "red",
            columnGap: 16,
            width: 328,
            height: 57,
            marginBottom: 20,
          }}
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
