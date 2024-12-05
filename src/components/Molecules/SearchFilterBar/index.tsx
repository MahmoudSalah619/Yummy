import styles from "./styles.module.scss";
import SearchIcon from "@/src/assets/icons/home/search-orange-icon.svg";
import SelectionInput from "../../Atoms/SelectionInput";
import TextInput from "../../Atoms/TextInput";

function SearchFilterBar() {
  const dummyOptions = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  return (
    <section className={styles.container}>
      <TextInput
        inputStyle={styles.searchInput}
        prefixIcon={SearchIcon}
        placeholder="Search"
      />

      <SelectionInput
        containerStyle={styles.selectionContainerInput}
        options={dummyOptions}
        placeholder="Category"
      />
      <SelectionInput
        containerStyle={styles.selectionContainerInput}
        options={dummyOptions}
        placeholder="Date Created"
      />
      <SelectionInput
        containerStyle={styles.selectionContainerInput}
        options={dummyOptions}
        placeholder="Date Published"
      />
    </section>
  );
}

export default SearchFilterBar;
