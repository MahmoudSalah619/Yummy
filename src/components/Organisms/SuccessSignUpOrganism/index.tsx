import { useNavigate } from "react-router-dom";
import Text from "@/src/components/Atoms/Text";
import styles from "./styles.module.scss";
import Button from "@/src/components/Atoms/Button";
import successJIF from "@/src/assets/images/successJIF.gif";
import Image from "@/src/components/Atoms/Image";

export default function SuccessSignUpOrganism() {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={successJIF}
          alt="success jif"
          width={225}
          height={225}
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <Text fontSize={18} fontFamily="font500" color="grey700">
          Account Registration Pending Review
        </Text>
        <Text fontSize={16} fontFamily="font400" color="grey700">
          Your merchant account is now under review by our team. We will notify
          you upon approval in your mail. Thank you for your patience!
        </Text>
      </div>
      <Button
        customStyle={styles.btn}
        isFullWidth
        title="Go Back"
        onClick={() => navigate("/merchant-info")}
      />
    </div>
  );
}
