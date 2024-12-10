import { Select } from "antd";
import styles from "./styles.module.scss";
import Text from "../../Atoms/Text";
import TextInput from "../../Atoms/TextInput";
import Button from "../../Atoms/Button";
import CardWrapper from "../../Wrappers/CardWrapper";

function ContactUs() {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className={styles.container}>
      <Text className={styles.MainTitle} fontSize={30}>
        Contact Us
      </Text>
      <CardWrapper>
        <div className={styles.contactUs}>
          <Text className={styles.title} fontFamily="font700" fontSize={18}>
            We’d love to hear from you! Feel free to reach out with any
            questions or feedback.
          </Text>

          <div className={styles.SelectInputContent}>
            <span className="d-block mb-2 Label100 White">Subject</span>
            <Select
              className={styles.SelectInput}
              style={{ width: "100%" }}
              onChange={handleChange}
              options={[
                { value: "jack", label: "Jack" },
                { value: "lucy", label: "Lucy" },
                { value: "Yiminghe", label: "yiminghe" },
              ]}
            />
          </div>
          <TextInput
            type="textarea"
            label="Message"
            containerStyle={styles.textArea}
          />
          <div className={styles.SubmitInfo}>
            <Button title="Submit" customStyle={styles.btn} />
            <Text>Customer Support Info</Text>
            <Text>
              Email: <span> support@ardi.com</span>
            </Text>
          </div>
        </div>
      </CardWrapper>
    </div>
  );
}

export default ContactUs;
