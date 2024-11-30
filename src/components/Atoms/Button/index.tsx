import Text from "../Text";
import styles from "./styles.module.scss";
import { CustomButtonProps } from "./types";

function Button({
  title,
  variant = "primary",
  customStyle,
  isFullWidth,
  onClick,
  prefix,
  suffix,
  paddingBlock = 8,
  paddingInline = 14,
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
      ${customStyle}`}
    >
      {prefix}
      <Text fontFamily="font700" fontSize={16}>
        {title}
      </Text>
      {suffix}
    </button>
  );
}

export default Button;
