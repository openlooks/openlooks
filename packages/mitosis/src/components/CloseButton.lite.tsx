import { convertSizeToIconSize } from '../site/components/utils';
import ActionIcon from './ActionIcon.lite';
import type { Size } from './BaseComponentProps';
import CloseIcon from './CloseIcon.lite';

export interface CloseButtonProps {
  size?: Size;
  title?: string;
  onClick?: (e: any) => void;
}

export default function CloseButton(props: CloseButtonProps) {
  return (
    <ActionIcon onClick={(event) => props.onClick?.(event)} title={props.title || 'Close'} c="variant-subtle">
      <CloseIcon size={convertSizeToIconSize(props.size, 'sm')} />
    </ActionIcon>
  );
}
