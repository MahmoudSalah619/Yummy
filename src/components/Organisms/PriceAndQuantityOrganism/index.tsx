import styles from "./styles.module.scss";
import Text from "../../Atoms/Text";
import CardWrapper from "../../Wrappers/CardWrapper";
import Image from "../../Atoms/Image";
import Avatar from "@/src/assets/icons/navbar/avatar.svg";
import TextInput from "../../Atoms/TextInput";
import Button from "../../Atoms/Button";

function PriceAndQuantityOrganism() {
  return (
    <CardWrapper noHorizontalPadding className={styles.cardWrapperContainer}>
      <Text
        color="grey900"
        fontSize={22}
        fontFamily="font500"
        className={styles.mainTitle}
      >
        Pricing and Quantity
      </Text>

      <div className={styles.tableHeader}>
        <Text
          color="grey600"
          fontFamily="font500"
          fontSize={14}
          className={styles.productName}
        >
          Variant
        </Text>
        <Text
          color="grey600"
          fontFamily="font500"
          fontSize={14}
          className={styles.productName}
        >
          Pricing
        </Text>
        <Text
          color="grey600"
          fontFamily="font500"
          fontSize={14}
          className={styles.productName}
        >
          Quantity
        </Text>
      </div>

      <div className={styles.tableBody}>
        <div className={styles.productInfo}>
          <Image src={Avatar} alt="Avatar" width={30} height={30} />
          <Text fontSize={16} fontFamily="font500" color="grey900">
            Red / XL
          </Text>
        </div>

        <div className={styles.productInfo}>
          <TextInput containerStyle={styles.inputContainer} />
        </div>

        <div className={styles.productInfo}>
          <TextInput containerStyle={styles.inputContainer} />
        </div>
      </div>

      <div className={styles.tableBody}>
        <div className={styles.productInfo}>
          <Image src={Avatar} alt="Avatar" width={30} height={30} />
          <Text fontSize={16} fontFamily="font500" color="grey900">
            Red / XL
          </Text>
        </div>

        <div className={styles.productInfo}>
          <TextInput containerStyle={styles.inputContainer} />
        </div>

        <div className={styles.productInfo}>
          <TextInput containerStyle={styles.inputContainer} />
        </div>
      </div>

      <div className={styles.btnContainer}>
        <Button title="Save" />
      </div>
    </CardWrapper>
  );
}

export default PriceAndQuantityOrganism;
