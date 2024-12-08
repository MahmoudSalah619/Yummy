import { useState } from "react";
import Text from "../../Atoms/Text";
import styles from "./styles.module.scss";
import legalDoc from "@/src/assets/images/legalDoc.png";
import DocumentUploader from "../DocumentUploader";

function LegalDocuments() {
  const [documents, setDocuments] = useState([
    {
      title: "Commercial Register",
      description: "Uploaded on 13/9/2024 11:50PM",
      uploadedImage: legalDoc,
    },
    {
      title: "Tax ID",
      description: "Uploaded on 13/9/2024 11:50PM",
      uploadedImage: legalDoc,
    },
  ]);

  const handleImageChange = (index: number, newImage: string) => {
    setDocuments((prev) =>
      prev.map((doc, idx) =>
        idx === index ? { ...doc, uploadedImage: newImage } : doc
      )
    );
  };

  return (
    <div className={styles.container}>
      <Text fontSize={22} color="grey900" fontFamily="font500">
        Legal Documents
      </Text>
      <div className={styles.infoContainer}>
        {documents.map((doc, index) => (
          <DocumentUploader
            key={doc.title}
            title={doc.title}
            description={doc.description}
            uploadedImage={doc.uploadedImage}
            setUploadedImage={(image: string) =>
              handleImageChange(index, image)
            }
          />
        ))}
      </div>
    </div>
  );
}

export default LegalDocuments;
