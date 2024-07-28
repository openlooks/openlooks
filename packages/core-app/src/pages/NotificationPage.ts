import {
  Container,
  HtmlComponent,
  IconCheck,
  IconX,
  Link,
  Notification,
  Paper,
  Stack,
  Text,
  Title,
} from '@openlooks/core';

export class NotificationPage extends HtmlComponent {
  constructor() {
    super('div', '', undefined, undefined, {
      children: [
        new Container({
          className: 'doc-body size-sm p-sm py-xl',
          children: [
            new Title({ order: 1, text: 'Notification' }),
            new Text({ text: 'Notification' }),
            new Text({ text: 'This is a container test' }),
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
                      title: 'Bummer!',
                      message: 'Something went wrong',
                      color: 'red',
                      icon: new IconX({ size: '1.1rem' }),
                    }),
                    new Notification({
                      title: 'All good!',
                      message: 'Everything is fine',
                      color: 'green',
                      icon: new IconCheck({ size: '1.1rem' }),
                    }),
                    new Notification({
                      title: 'Uploading data to the server',
                      message:
                        'Please wait until data is uploaded, you cannot close this notification yet',
                      loading: true,
                      withCloseButton: false,
                    }),
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
