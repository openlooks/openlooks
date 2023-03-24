import { For, onMount, useStore } from '@builder.io/mitosis';
import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';
import { BaseComponentProps } from './BaseComponentProps';
import Notification, { NotificationProps } from './Notification.lite';
import { subscribeNotifications } from './NotificationsManager';

export default function Notifications(props: BaseComponentProps) {
  const state = useStore({
    currentNotifications: [] as NotificationProps[],
  });

  onMount(() => {
    subscribeNotifications((newNotifications: NotificationProps[]) => {
      state.currentNotifications = newNotifications;
    });
  });

  return (
    <div class={buildOpenLooksClassName('notifications', props)} style={props.sx as JSX.CSS | undefined}>
      <For each={state.currentNotifications}>{(n) => <Notification {...n}>{n.children}</Notification>}</For>
    </div>
  );
}
