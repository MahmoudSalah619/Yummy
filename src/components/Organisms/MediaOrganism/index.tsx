import React, { useState } from "react";
import { Upload, message } from "antd";
import CardWrapper from "../../Wrappers/CardWrapper";
import styles from "./styles.module.scss";
import Text from "../../Atoms/Text";
import UploadIcon from "@/src/assets/icons/products/upload-cloud.svg";
import Image from "../../Atoms/Image";
import { UploadFile } from "antd/es/upload/interface";

const { Dragger } = Upload;

const MediaOrganism = () => {
  const [_, setUploadedFiles] = useState<UploadFile[]>([]);

  const uploadProps = {
    name: "file",
    multiple: true,
    beforeUpload: (file: UploadFile) => {
      // Save the file locally in the state
      setUploadedFiles((prev) => [...prev, file]);
      message.success(`${file.name} file added successfully.`);
      return false;
    },
    onDrop(e: React.DragEvent<HTMLDivElement>) {
      console.log("Dropped files", e.dataTransfer.files);
    },

    onRemove: (file: UploadFile) => {
      setUploadedFiles((prev) => prev.filter((f) => f.uid !== file.uid));
      message.info(`${file.name} has been removed.`);
    },
  };

  return (
    <CardWrapper title="Media">
      <Dragger {...uploadProps} className={styles.uploadDragger}>
        <div className={styles.customIcon}>
          <Image src={UploadIcon} alt="upload icon" width={40} height={40} />
        </div>
        <div className={styles.uploadText}>
          <Text color="orange500" fontSize={14} fontFamily="font500">
            Click to upload
          </Text>
          <Text color="grey900" fontSize={14} fontFamily="font400">
            or drag and drop
          </Text>
        </div>
        <Text color="grey900" fontSize={12} fontFamily="font400">
          SVG, PNG, JPG, or GIF (max. 800×400px)
        </Text>
      </Dragger>
    </CardWrapper>
  );
};

export default MediaOrganism;
