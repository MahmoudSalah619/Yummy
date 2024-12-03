import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { Upload, UploadFile } from "antd";
import Text from "@/src/components/Atoms/Text";
import styles from "./styles.module.scss";
import vector from "@/src/assets/images/vector.png";
import Button from "@/src/components/Atoms/Button";
import Image from "@/src/components/Atoms/Image";
import ValidationSchema, { Auth } from "@/constants/Validation";
import TextInputAtom from "../../Atoms/TextInput";

const { Dragger } = Upload;

function MerchantInfoOrganism() {
  const navigate = useNavigate();
  // eslint-disable-next-line
  const [uploadedFiles, setUploadedFiles] = useState<UploadFile[]>([]);
  console.log("🚀 ~ MerchantInfoOrganism ~ uploadedFiles:", uploadedFiles);
  const [imageSrc, setImageSrc] = useState<string>(vector); // State for uploaded image URL
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Auth>();

  console.log("🚀 ~ MerchantInfoOrganism ~ errors:", errors);
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
      <Text className={styles.introText}>Start your brand now</Text>

      <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.imgContainer}>
          <Image
            src={imageSrc}
            alt="vector"
            width={83}
            height={83}
            className={styles.img}
          />
        </div>

        {/* Buttton */}

        <div className={styles.btnContainer}>
          <Text className={`${styles.brandText} ${styles.textCenter}`}>
            Brand Icon
          </Text>
          <Dragger
            {...uploadProps}
            onChange={(info) =>
              setValue("brandIcon", info?.fileList?.[0]?.originFileObj)
            }
            className={`${styles.uploadDragger} ${styles.center}`}
          >
            <Button title="Upload" isFullWidth />
          </Dragger>
          <TextInputAtom
            reactHookFormProps={{
              ...register("bio", ValidationSchema.bio),
            }}
            type="textarea"
            label="Bio"
            containerStyle={styles.textArea}
            status={errors.bio?.message ? "error" : "default"}
            errorMsg={errors.bio?.message}
          />

          <Text className={styles.legalTitle}>Legal Documents</Text>
          <Text className={styles.legalDesc}>
            Please upload the following documents to complete your registration.
          </Text>
          <div className={styles.comercialTaxContainer}>
            <div className={styles.comercialContainer}>
              <Text className={styles.brandText}>Commercial Register </Text>
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
              <Text className={styles.brandText}>Tax ID </Text>
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
                title="Do it Later"
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
