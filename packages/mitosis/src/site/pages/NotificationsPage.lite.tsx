import Button from '../../components/Button.lite';
import Group from '../../components/Group.lite';
import { showNotification } from '../../components/NotificationsManager';
import Title from '../../components/Title.lite';
import DocPage from '../components/DocPage.lite';

export default function NotificationsPage() {
  return (
    <DocPage title="Notifications" description="Notification system">
      <Title order={2}>Usage</Title>
      <Group
        sx={{
          width: '600px',
          'flex-flow': 'row wrap',
          'align-items': 'center',
          'justify-content': 'center',
          gap: '16px',
        }}
      >
        <Button
          color="blue"
          variant="outline"
          onClick={() =>
            showNotification({
              color: 'blue',
              title: 'Default notification',
              message: 'Hey there, your code is awesome! 🤥',
            })
          }
        >
          Default
        </Button>
        <Button
          color="teal"
          variant="outline"
          onClick={() =>
            showNotification({
              color: 'teal',
              title: 'You did great',
              message: 'Data was saved',
            })
          }
        >
          Teal with icon
        </Button>
        <Button
          color="red"
          variant="outline"
          onClick={() =>
            showNotification({
              color: 'red',
              title: 'Bummer!',
              message: 'You have no right to do this',
            })
          }
        >
          Red color
        </Button>
        <Button
          color="grape"
          variant="outline"
          onClick={() =>
            showNotification({
              color: 'grape',
              title: 'I will never close',
              message: 'unless you click X',
              autoClose: false,
            })
          }
        >
          Never closes automatically
        </Button>
        <Button
          color="indigo"
          variant="outline"
          onClick={() =>
            showNotification({
              color: 'indigo',
              title: 'Custom autoClose timeout',
              message: 'Notification will be closed in 10 seconds',
            })
          }
        >
          10 seconds timeout
        </Button>
        <Button
          color="cyan"
          variant="outline"
          onClick={() =>
            showNotification({
              color: 'cyan',
              title: 'Loading your data',
              message: 'Data will be loaded in 3 seconds, you cannot close this yet',
              disallowClose: true,
              onClose: () =>
                showNotification({
                  color: 'teal',
                  title: 'Data was loaded',
                  message: 'Notification will close in 3 seconds, you can close this notification now',
                }),
            })
          }
        >
          Loading state and update
        </Button>
      </Group>
    </DocPage>
  );
}
