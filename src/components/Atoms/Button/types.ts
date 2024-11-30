import { ReactNode } from "react";

export interface CustomButtonProps {
  title: string;
  customStyle?: string;
  variant?:
    | "primary"
    | "grey"
    | "transparent-grey"
    | "transparent-error"
    | "warning";

  isFullWidth?: boolean;
  onClick?: () => void;
  prefix?: ReactNode;
  suffix?: ReactNode;
  paddingBlock?: 4 | 8 | 10; // Allowed values for padding-block
  paddingInline?: 8 | 14 | 16; // Allowed values for padding-inline
}
