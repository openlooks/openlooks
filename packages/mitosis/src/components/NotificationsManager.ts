import { randomId } from '../utils/use-id';
import { NotificationProps } from './Notification.lite';

const state = {
  notifications: [] as NotificationProps[],
  listeners: [] as ((n: NotificationProps[]) => void)[],
};

export function showNotification(n: NotificationProps): void {
  n.id = n.id || randomId();
  state.notifications = [...state.notifications, n];
  emitNotifications();
  if (n.autoClose !== false) {
    window.setTimeout(() => hideNotification(n.id as string), n.autoClose || 3000);
  }
}

export function hideNotification(id: string): void {
  const n = state.notifications.find((n) => n.id === id);
  if (n) {
    state.notifications = state.notifications.filter((n) => n.id !== id);
    emitNotifications();
    if (n.onClose) {
      n.onClose();
    }
  }
}

export function subscribeNotifications(listener: (n: NotificationProps[]) => void): () => void {
  state.listeners.push(listener);
  return () => {
    state.listeners = state.listeners.filter((l) => l !== listener);
  };
}

function emitNotifications(): void {
  state.listeners.forEach((l) => l(state.notifications));
}
