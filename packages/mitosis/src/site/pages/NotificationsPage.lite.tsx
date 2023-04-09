import Button from '../../components/Button.lite';
import Center from '../../components/Center.lite';
import Group from '../../components/Group.lite';
import { showNotification } from '../../components/NotificationsManager';
import Paper from '../../components/Paper.lite';
import Text from '../../components/Text.lite';
import Title from '../../components/Title.lite';
import DocPage from '../components/DocPage.lite';
import Prism from '../components/Prism.lite';

export default function NotificationsPage() {
  return (
    <DocPage title="Notifications" description="Notification system">
      <Title order={2}>Demo</Title>
      <Paper c="p-xl mb-xl radius-md withBorder">
        <Group
          sx={{
            'flex-flow': 'row wrap',
            'align-items': 'center',
            'justify-content': 'center',
            gap: '16px',
          }}
        >
          <Button
            c="color-blue variant-outline"
            onClick={() =>
              showNotification({
                c: 'color-blue',
                title: 'Default notification',
                message: 'Hey there, your code is awesome! 🤥',
              })
            }
          >
            Default
          </Button>
          <Button
            c="color-teal variant-outline"
            onClick={() =>
              showNotification({
                c: 'color-teal',
                title: 'You did great',
                message: 'Data was saved',
              })
            }
          >
            Teal with icon
          </Button>
          <Button
            c="color-red variant-outline"
            onClick={() =>
              showNotification({
                c: 'color-red',
                title: 'Bummer!',
                message: 'You have no right to do this',
              })
            }
          >
            Red color
          </Button>
          <Button
            c="color-grape variant-outline"
            onClick={() =>
              showNotification({
                c: 'color-grape',
                title: 'I will never close',
                message: 'unless you click X',
                autoClose: false,
              })
            }
          >
            Never closes automatically
          </Button>
          <Button
            c="color-indigo variant-outline"
            onClick={() =>
              showNotification({
                c: 'color-indigo',
                title: 'Custom autoClose timeout',
                message: 'Notification will be closed in 10 seconds',
              })
            }
          >
            10 seconds timeout
          </Button>
          <Button
            c="color-cyan variant-outline"
            onClick={() =>
              showNotification({
                c: 'color-cyan',
                title: 'Loading your data',
                message: 'Data will be loaded in 3 seconds, you cannot close this yet',
                disallowClose: true,
                onClose: () =>
                  showNotification({
                    c: 'color-teal',
                    title: 'Data was loaded',
                    message: 'Notification will close in 3 seconds, you can close this notification now',
                  }),
              })
            }
          >
            Loading state and update
          </Button>
        </Group>
      </Paper>
      <Title order={2}>Usage</Title>
      <Text>
        Add Notifications component anywhere in your application, usually it is placed inside MantineProvider next to
        your App component:
      </Text>
      <Prism
        language="jsx"
        code={`import { Notifications } from '@openlooks/react';

function Demo() {
  return (
    <>
      <Notifications />
      <App />
    </>
  );
}`}
      />
      <Text c="my-xl">Then use notifications.show function anywhere in your application:</Text>
      <Paper c="p-xl mb-xl radius-md withBorder">
        <Center>
          <Button
            c="color-blue variant-outline"
            onClick={() =>
              showNotification({
                c: 'color-blue',
                title: 'Default notification',
                message: 'Hey there, your code is awesome! 🤥',
              })
            }
          >
            Show notification
          </Button>
        </Center>
      </Paper>
      <Prism
        language="jsx"
        code={`import { Group, Button, showNotification } from '@openlooks/react';

function Demo() {
  return (
    <Group position="center">
      <Button
        c="variant-outline"
        onClick={() =>
          showNotification({
            title: 'Default notification',
            message: 'Hey there, your code is awesome! 🤥',
          })
        }
      >
        Show notification
      </Button>
    </Group>
  );
}`}
      />
    </DocPage>
  );
}
