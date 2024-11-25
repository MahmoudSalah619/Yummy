import IcoMoon from "react-icomoon";
import iconSet from "../../../assets/icomoon/selection.json";
import { IconProps } from "./types";

export default function Icon({ name, size, color, className }: IconProps) {
  return (
    <IcoMoon
      className={className}
      iconSet={iconSet}
      icon={name}
      size={size}
      color={color}
    />
  );
}
