import useAutoCompleteTranslation from "@/hooks/useAutoCompleteTranslation";
import TextInput from "@/src/components/Atoms/TextInput";
import RichTextEditor from "@/src/components/Molecules/RichTextEditor";
import CardWrapper from "@/src/components/Wrappers/CardWrapper";
import styles from "./styles.module.scss";

export default function MerchantGeneralInfo() {
  const { t } = useAutoCompleteTranslation();

  return (
    <CardWrapper title={t("General Info")}>
      <div className={styles.inputsHolder}>
        <TextInput
          type="text"
          inputStyle={styles.input}
          containerStyle={styles.inputContainer}
          label="Merchant Name"
        />
        <TextInput
          type="text"
          inputStyle={styles.input}
          containerStyle={styles.inputContainer}
          label="Password"
        />
        <TextInput
          type="text"
          inputStyle={styles.input}
          containerStyle={styles.inputContainer}
          label="confirm password"
        />
        <TextInput
          type="text"
          inputStyle={styles.input}
          containerStyle={styles.inputContainer}
          label="Email Address"
        />
        <TextInput
          type="text"
          inputStyle={styles.input}
          containerStyle={styles.inputContainer}
          label="phone_number_label"
        />

        <RichTextEditor
          containerStyle={styles.inputContainer}
          label={t("merchant_bio")}
        />
      </div>
    </CardWrapper>
  );
}
