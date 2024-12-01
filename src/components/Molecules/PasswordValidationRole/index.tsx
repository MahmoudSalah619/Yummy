import Image from "../../Atoms/Image";
import Text from "../../Atoms/Text";
import styles from "./styles.module.scss";
// import correct from "@/src/assets/images/correct.png";
import wrong from "@/src/assets/images/wrong.png";

function PasswordValidationRole({ title }: { title: string }) {
  return (
    <div className={styles.container}>
      {/* Icon */}
      <Image src={wrong} alt="" width={16} height={16} />
      <Text fontSize={12} fontFamily="font500" color="grey600">
        {title}
      </Text>
    </div>
  );
}

export default PasswordValidationRole;
