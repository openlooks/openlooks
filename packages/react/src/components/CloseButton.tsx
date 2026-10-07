import type { JSX } from "react";
import { convertSizeToIconSize } from "../utils/convert";
import { ActionIcon } from "./ActionIcon";
import type { BaseComponentProps, Size } from "./BaseComponentProps";
import { CloseIcon } from "./CloseIcon";

export interface CloseButtonProps extends BaseComponentProps {
  size?: Size;
  title?: string;
}

export function CloseButton(props: CloseButtonProps): JSX.Element {
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
