import Text from "../Text";
import styles from "./styles.module.scss";
import { CustomButtonProps } from "./types";

function Button({
  title,
  variant = "primary",
  customStyle,
  isFullWidth,
  onClick,
  suffix,
  paddingBlock = 8,
  paddingInline = 14,
  disabled,
  ...otherProps
}: CustomButtonProps) {
  const paddingBlockClass = `padding-block-${paddingBlock}`;
  const paddingInlineClass = `padding-inline-${paddingInline}`;

  return (
    <button
      {...otherProps}
      onClick={onClick}
      className={`${styles.btn} 
      ${isFullWidth && styles.isFullWidth} 
      ${styles[variant]} 
      ${styles[paddingBlockClass]} 
      ${styles[paddingInlineClass]} 
      ${disabled && styles.disabled}
      ${customStyle}`}
      disabled={disabled}
    >
      {suffix}
      <Text fontFamily="font700" fontSize={16}>
        {title}
      </Text>
    </button>
  );
}

export default Button;
