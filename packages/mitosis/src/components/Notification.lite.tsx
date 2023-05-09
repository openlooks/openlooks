import { Show } from '@builder.io/mitosis';
import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';
import Button from './Button.lite';
import Loader from './Loader.lite';
import { hideNotification } from './NotificationsManager';
import Text from './Text.lite';

export interface NotificationProps {
  id?: string;
  c?: string;
  sx?: Record<string, any>;
  slotIcon?: JSX.Element;
  loading?: boolean;
  title: string;
  message?: string;
  children?: JSX.Element;
  autoClose?: number | false;
  withCloseButton?: boolean;
  onClose?: () => void;
}

export default function Notification(props: NotificationProps) {
  return (
    <div
      id={props.id}
      class={buildOpenLooksClassName('notification', undefined)}
      style={props.sx as JSX.CSS | undefined}
      data-autoClose={props.autoClose}
    >
      <Show when={props.slotIcon}>
        <div class={buildOpenLooksClassName('icon', props.c, { color: 'blue' })}>{props.slotIcon}</div>
      </Show>
      <Show when={props.loading}>
        <div class={buildOpenLooksClassName('loading', props.c, { color: 'blue' })}>
          <Loader />
        </div>
      </Show>
      <Show when={!props.slotIcon && !props.loading}>
        <div class={buildOpenLooksClassName('bar', props.c, { color: 'blue' })} />
      </Show>
      <div class="content">
        <Text c="size-sm weight-500">{props.title}</Text>
        <Text c="size-sm color-gray">{props.children}</Text>
        <Show when={props.message}>
          <Text c="size-sm color-gray">{props.message}</Text>
        </Show>
      </div>
      <Show when={props.withCloseButton !== false}>
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
