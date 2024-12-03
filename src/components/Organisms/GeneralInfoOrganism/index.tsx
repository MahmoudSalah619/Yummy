import RichTextEditor from "../../Molecules/RichTextEditor";
import SelectionInputAtom from "../../Atoms/SelectionInput";
import TextInputAtom from "../../Atoms/TextInput";
import CardWrapper from "../../Wrappers/CardWrapper";
import styles from "./styles.module.scss";

function GeneralInfoOrganism() {
  const dummyOptions = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  return (
    <CardWrapper title="General Info">
      <div className={styles.inputsHolder}>
        <TextInputAtom
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
        <SelectionInputAtom
          containerStyle={styles.selectionContainerInput}
          label="Product Category"
          options={dummyOptions}
        />

        <SelectionInputAtom
          containerStyle={styles.selectionContainerInput}
          label="Product Sub-Category"
          options={dummyOptions}
        />
      </div>
    </CardWrapper>
  );
}

export default GeneralInfoOrganism;
