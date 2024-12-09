import { useState } from "react";
import styles from "./styles.module.scss";
import legalDoc from "@/src/assets/images/legalDoc.png";
import DocumentUploader from "../DocumentUploader";
import CardWrapper from "../../Wrappers/CardWrapper";

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
    <CardWrapper title="Legal Documents">
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
    </CardWrapper>
  );
}

export default LegalDocuments;
