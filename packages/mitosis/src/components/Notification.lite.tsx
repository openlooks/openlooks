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
  slotIcon?: JSX.Element;
  title: string;
  message?: string;
  children?: JSX.Element;
  autoClose?: number | false;
  disallowClose?: boolean;
  onClose?: () => void;
}

export default function Notification(props: NotificationProps) {
  return (
    <div
      id={props.id}
      class={buildOpenLooksClassName('notification', props.c)}
      style={props.sx as JSX.CSS | undefined}
      data-autoClose={props.autoClose}
    >
      <div class="prefix">
        <div id={props.id} class={buildOpenLooksClassName('bar', props.c, { color: 'blue' })} />
      </div>
      <div class="content">
        <Text c="weight-500">{props.title}</Text>
        <Text c="color-gray">{props.children}</Text>
        <Show when={props.message}>
          <Text c="color-gray">{props.message}</Text>
        </Show>
      </div>
      <Show when={!props.disallowClose}>
        <div class="close">
          <Button
            c="variant-subtle color-gray size-xs"
            onClick={() => {
              if (props.onClose) {
                props.onClose();
              }
              if (props.id) {
                hideNotification(props.id);
              }
            }}
          >
            ✕
          </Button>
        </div>
      </Show>
    </div>
  );
}
