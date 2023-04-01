import { randomId } from '../utils/use-id';
import { NotificationProps } from './Notification.lite';

const manager = {
  notifications: [] as NotificationProps[],
  listeners: [] as ((n: NotificationProps[]) => void)[],
};

export function showNotification(n: NotificationProps): void {
  n.id = n.id || randomId();
  manager.notifications = [...manager.notifications, n];
  emitNotifications();
  if (n.autoClose !== false) {
    window.setTimeout(() => hideNotification(n.id as string), n.autoClose || 3000);
  }
}

export function hideNotification(id: string): void {
  const n = manager.notifications.find((n) => n.id === id);
  if (n) {
    manager.notifications = manager.notifications.filter((n) => n.id !== id);
    emitNotifications();
    if (n.onClose) {
      n.onClose();
    }
  }
}

export function subscribeNotifications(listener: (n: NotificationProps[]) => void): () => void {
  manager.listeners.push(listener);
  return () => {
    manager.listeners = manager.listeners.filter((l) => l !== listener);
  };
}

function emitNotifications(): void {
  manager.listeners.forEach((l) => l(manager.notifications));
}
