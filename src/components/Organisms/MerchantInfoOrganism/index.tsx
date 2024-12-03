import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import Text from "@/src/components/Atoms/Text";
import styles from "./styles.module.scss";
import vector from "@/src/assets/images/vector.png";
import Button from "@/src/components/Atoms/Button";
import Image from "@/src/components/Atoms/Image";
import { Auth } from "@/constants/Validation";

function MerchantInfoOrganism() {
  const navigate = useNavigate();

  const {
    // register,
    handleSubmit,
    // formState: { errors },
  } = useForm<Auth>();

  const onSubmit: SubmitHandler<Auth> = (data) => {
    console.log("Form Submitted:", data);

    navigate("/");
  };

  return (
    <div className={styles.container}>
      <Text className={styles.introText}>Start your brand now</Text>

      <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.imgContainer}>
          <Image src={vector} alt="vector" width={83} height={83} />
        </div>

        {/* Buttton */}

        <div className={styles.btnContainer}>
          <Button title="Upload" isFullWidth />
        </div>
      </form>
    </div>
  );
}

export default MerchantInfoOrganism;
