import { Show } from '@builder.io/mitosis';
import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';
import { BaseComponentProps } from './BaseComponentProps';
import Button from './Button.lite';
import { hideNotification } from './NotificationsManager';
import Text from './Text.lite';

export interface NotificationProps extends BaseComponentProps {
  id?: string;
  icon?: JSX.Element;
  title: string;
  message?: string;
  children?: JSX.Element;
  autoClose?: number | false;
  disallowClose?: boolean;
  onClose?: () => void;
}

export default function Notification(props: NotificationProps) {
  return (
    <div class={buildOpenLooksClassName('notification', props)} style={props.sx as JSX.CSS | undefined}>
      <div class="prefix">
        <div class={`bar ${props.color || 'blue'}`} />
      </div>
      <div class="content">
        <Text weight={500}>{props.title}</Text>
        {props.children && <Text color="gray">{props.children}</Text>}
        {props.message && <Text color="gray">{props.message}</Text>}
      </div>
      <Show when={!props.disallowClose}>
        <div class="close">
          <Button onClick={() => hideNotification(props.id as string)} variant="subtle" color="gray" size="xs">
            ✕
          </Button>
        </div>
      </Show>
    </div>
  );
}
