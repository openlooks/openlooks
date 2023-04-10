import { Show } from '@builder.io/mitosis';
import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';
import Button from './Button.lite';
import { hideNotification } from './NotificationsManager';
import Text from './Text.lite';

export interface NotificationProps {
  id?: string;
  c?: string;
  sx?: Record<string, any>;
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
    <div class={buildOpenLooksClassName('notification', props.c)} style={props.sx as JSX.CSS | undefined}>
      <div class="prefix">
        <div class={buildOpenLooksClassName('bar', props.c, { color: 'blue' })} />
      </div>
      <div class="content">
        <Text c="weight-500">{props.title}</Text>
        <Show when={props.children}>
          <Text c="color-gray">{props.children}</Text>
        </Show>
        <Show when={props.message}>
          <Text c="color-gray">{props.message}</Text>
        </Show>
      </div>
      <Show when={!props.disallowClose}>
        <div class="close">
          <Button c="variant-subtle color-gray size-xs" onClick={() => props.id && hideNotification(props.id)}>
            ✕
          </Button>
        </div>
      </Show>
    </div>
  );
}
