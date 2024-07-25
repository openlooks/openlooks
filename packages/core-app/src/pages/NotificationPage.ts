import {
  Container,
  Link,
  Notification,
  Paper,
  SimpleComponent,
  Stack,
  Text,
  Title,
} from '@openlooks/core';

export class NotificationPage extends SimpleComponent {
  constructor() {
    super('div', '', undefined, undefined, {
      children: [
        new Container({
          className: 'doc-body size-sm p-sm py-xl',
          children: [
            new Title({ order: 1, text: 'Notification' }),
            new Text({ text: 'Notification' }),
            new Text({ text: 'This is a container test' }),

            // <Paper c="p-xl withBorder" sx={{ background: 'var(--oc-gray-1)', cursor: 'pointer' }}>
            new Paper({
              className: 'p-xl withBorder',
              style: { background: 'var(--oc-gray-1)' },
              children: [
                new Stack({
                  children: [
                    new Notification({
                      title: 'Default notification',
                      message: 'This is default notification with title and body',
                    }),
                    new Notification({
                      title: 'Teal notification',
                      message: 'This is teal notification with icon',
                      color: 'teal',
                    }),
                    new Notification({
                      title: 'Teal notification',
                      message: 'Bummer! Notification without title',
                      color: 'red',
                    }),
                    new Notification({
                      title: 'Uploading data to the server',
                      message:
                        'Please wait until data is uploaded, you cannot close this notification yet',
                      loading: true,
                      withCloseButton: false,
                    }),

                    // <Notification title="Default notification">This is default notification with title and body</Notification>
                    // <Notification slotIcon={<IconCheck size="1.1rem" />} c="color-teal" title="Teal notification">
                    //   This is teal notification with icon
                    // </Notification>
                    // <Notification slotIcon={<IconX size="1.1rem" />} c="color-red" title="Teal notification">
                    //   Bummer! Notification without title
                    // </Notification>
                    // <Notification title="Uploading data to the server" loading withCloseButton={false}>
                    //   Please wait until data is uploaded, you cannot close this notification yet
                    // </Notification>
                  ],
                }),
              ],
            }),
            new Link({ href: '/', text: 'Back to home' }),
          ],
        }),
      ],
    });
  }
}
