import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { Upload, UploadFile } from "antd";
import Text from "@/src/components/Atoms/Text";
import styles from "./styles.module.scss";
import vector from "@/src/assets/images/vector.png";
import Button from "@/src/components/Atoms/Button";
import ValidationSchema, { Auth } from "@/constants/Validation";
import TextInput from "../../Atoms/TextInput";
import ProfileImage from "../../Molecules/ProfileImage";

const { Dragger } = Upload;

function MerchantInfoOrganism() {
  const navigate = useNavigate();
  // eslint-disable-next-line
  const [_, setUploadedFiles] = useState<UploadFile[]>([]);
  const [imageSrc, setImageSrc] = useState<string>(vector); // State for uploaded image URL
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Auth>();

  const uploadProps = {
    name: "file",
    multiple: false,
    beforeUpload: (file: UploadFile) => {
      const reader = new FileReader();
      const fileAsBlob = file as unknown as File;

      reader.onload = () => {
        setImageSrc(reader.result as string);
      };
      reader.readAsDataURL(fileAsBlob);

      setValue("brandIcon", fileAsBlob, { shouldValidate: true }); // Validate after setting value
      return false;
    },
    onRemove: (file: UploadFile) => {
      setUploadedFiles((prev) => prev.filter((f) => f.uid !== file.uid));
      setValue("brandIcon", undefined, { shouldValidate: true }); // Reset and validate
    },
  };

  const onSubmit: SubmitHandler<Auth> = (data) => {
    console.log("🚀 ~ MerchantInfoOrganism ~ data:", data);
    navigate("/success-signup");
  };

  return (
    <div className={styles.container}>
      <Text className={styles.introText} i18nKey="intro_text" />

      <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
        <ProfileImage src={imageSrc} />
        {/* Buttton */}

        <div className={styles.btnContainer}>
          <Text
            i18nKey="brand_icon_label"
            className={`${styles.brandText} ${styles.textCenter}`}
          />
          <Dragger
            {...uploadProps}
            onChange={(info) =>
              setValue("brandIcon", info?.fileList?.[0]?.originFileObj)
            }
            className={`${styles.uploadDragger} ${styles.center}`}
          >
            <Button title="Upload" isFullWidth />
          </Dragger>
          <TextInput
            reactHookFormProps={{
              ...register("bio", ValidationSchema.bio),
            }}
            type="textarea"
            label="Bio"
            containerStyle={styles.textArea}
            status={errors.bio?.message ? "error" : "default"}
            errorMsg={errors.bio?.message}
          />

          <Text className={styles.legalTitle} i18nKey="legal_documents_title" />
          <Text
            className={styles.legalDesc}
            i18nKey="legal_documents_description"
          />
          <div className={styles.comercialTaxContainer}>
            <div className={styles.comercialContainer}>
              <Text
                className={styles.brandText}
                i18nKey="commercial_register_label"
              />
              <Dragger
                onChange={(info) =>
                  setValue(
                    "commercialRegister",
                    info?.fileList?.[0]?.originFileObj
                  )
                }
                {...uploadProps}
                className={styles.uploadDragger}
              >
                <Button title="Upload" isFullWidth />
              </Dragger>
            </div>
            <div className={styles.comercialContainer}>
              <Text className={styles.brandText} i18nKey="tax_id_label" />
              <Dragger
                onChange={(info) =>
                  setValue("taxId", info.fileList[0]?.originFileObj)
                }
                {...uploadProps}
                className={styles.uploadDragger}
              >
                <Button title="Upload" isFullWidth />
              </Dragger>
            </div>
            <div
              className={`${styles.comercialContainer} ${styles.btnsContainer}`}
            >
              <Button title="Confirm" isFullWidth />
              <Button
                title="do_it_later_button"
                isFullWidth
                variant="transparent-grey"
                onClick={() => navigate("/")}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default MerchantInfoOrganism;
