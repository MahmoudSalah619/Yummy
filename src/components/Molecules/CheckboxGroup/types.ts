export interface CheckboxGroupProps {
  title: string;
  options: string[];
  showSearch?: boolean;
  onChange?: (checkedValues: string[]) => void;
}
