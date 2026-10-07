import { convertSizeToIconSize } from "../utils/convert";
import { ActionIcon } from "./ActionIcon";
import type { Size } from "./BaseComponentProps";
import { CloseIcon } from "./CloseIcon";
export interface CloseButtonProps {
  size?: Size;
  title?: string;
  onClick?: (e: any) => void;
}
export function CloseButton(props: CloseButtonProps) {
  return (
    <ActionIcon
      onClick={(event) => props.onClick?.(event)}
      title={props.title || "Close"}
      c="variant-subtle"
    >
      <CloseIcon size={convertSizeToIconSize(props.size, "sm")} />
    </ActionIcon>
  );
}
