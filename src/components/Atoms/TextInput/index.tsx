"use client";

import { useEffect, useRef } from "react";
import { TextInputAtomProps } from "./types";
import styles from "./styles.module.scss";
import Text from "../Text";
import Image from "../Image";

export default function TextInputAtom({
  containerStyle,
  inputStyle,
  name,
  value,
  onChange,
  placeholder,
  label,
  type = "text",
  status = "default",
  errorMsg,
  reactHookFormProps,
  prefixIcon,
}: TextInputAtomProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const cancelWheel = (e: WheelEvent) =>
      inputRef.current && e.preventDefault();
    inputRef?.current?.addEventListener("wheel", cancelWheel, {
      passive: false,
    });
    return () => inputRef?.current?.removeEventListener("wheel", cancelWheel);
  }, []);

  return (
    <>
      <div className={`${styles.container} ${containerStyle}`}>
        {!!label && (
          <span className="d-block mb-2 Label100 White">{label}</span>
        )}

        <div
          className={`${styles.inputContent} ${styles[status]} ${inputStyle} ${prefixIcon ? styles.withPrefix : ""}`}
        >
          {prefixIcon && (
            <Image
              alt="prefixIcon"
              src={prefixIcon}
              width={16.52}
              height={16.52}
              className={styles.prefixIcon}
            />
          )}
          {type === "textarea" ? (
            <textarea
              name={name}
              className="TextPrimaryBlack"
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              {...reactHookFormProps}
            />
          ) : (
            <input
              autoCapitalize="off"
              ref={type === "number" ? inputRef : undefined}
              onKeyDown={
                type === "number"
                  ? (evt) =>
                      ["e", "E", "+", "-", "ArrowDown", "ArrowUp"].includes(
                        evt.key
                      ) && evt.preventDefault()
                  : undefined
              }
              disabled={status === "disabled"}
              type={type}
              name={name}
              className="TextPrimaryBlack"
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              {...reactHookFormProps}
            />
          )}
        </div>
      </div>
      {errorMsg && (
        <div className={styles.errorMsg}>
          <Text color="primary">{errorMsg}</Text>
        </div>
      )}
    </>
  );
}
