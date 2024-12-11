import RichTextEditor from "../../Molecules/RichTextEditor";
import SelectionInput from "../../Atoms/SelectionInput";
import TextInput from "../../Atoms/TextInput";
import CardWrapper from "../../Wrappers/CardWrapper";
import styles from "./styles.module.scss";
import { GeneralInfoOrganismProps } from "./types";

function ProductGeneralInfoOrganism({
  showProductStatus,
}: GeneralInfoOrganismProps) {
  const dummyOptions = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  return (
    <CardWrapper title="General Info">
      <div className={styles.inputsHolder}>
        {!!showProductStatus && (
          <SelectionInput
            containerStyle={`${styles.selectionContainerInput} ${styles.productStatus}`}
            label="Product Status"
            options={dummyOptions}
          />
        )}

        <TextInput
          type="text"
          inputStyle={styles.input}
          containerStyle={styles.inputContainer}
          label="Product Name"
        />

        <RichTextEditor
          containerStyle={styles.inputContainer}
          label="Product Description"
        />
      </div>

      <div className={styles.selectionsHolder}>
        <SelectionInput
          containerStyle={styles.selectionContainerInput}
          label="Product Category"
          options={dummyOptions}
        />

        <SelectionInput
          containerStyle={styles.selectionContainerInput}
          label="Product Sub-Category"
          options={dummyOptions}
        />
      </div>
    </CardWrapper>
  );
}

export default ProductGeneralInfoOrganism;
