import React from "react";
import Notification from "../../components/Notification";
import Paper from "../../components/Paper";
import Text from "../../components/Text";
import Title from "../../components/Title";
import IconCheck from "../../icons/IconCheck";
import IconX from "../../icons/IconX";
import DocPage from "../components/DocPage";
import Prism from "../components/Prism";
export default function NotificationPage() {
    return (<DocPage title="Notification" description="Show dynamic notifications and alerts to user, part of notifications system">
      <Title order={2}>Usage</Title>
      <Text>Notification is a base component for notification system.</Text>
      <Paper c="p-xl withBorder" sx={{ background: 'var(--oc-gray-1)', cursor: 'pointer' }}>
        <div style={{ margin: 'auto', 'max-width': '25rem' }}>
          <Notification title="Default notification">This is default notification with title and body</Notification>
          <Notification slotIcon={<IconCheck size="1.1rem"/>} c="color-teal" title="Teal notification">
            This is teal notification with icon
          </Notification>
          <Notification slotIcon={<IconX size="1.1rem"/>} c="color-red" title="Teal notification">
            Bummer! Notification without title
          </Notification>
          <Notification title="Uploading data to the server" loading withCloseButton={false}>
            Please wait until data is uploaded, you cannot close this notification yet
          </Notification>
        </div>
      </Paper>
      <Prism language="jsx" code={`import { Notification } from '@openlooks/react';
import { IconCheck, IconX } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <Notification title="Default notification">
        This is default notification with title and body
      </Notification>

      <Notification icon={<IconCheck size="1.1rem" />} color="teal" title="Teal notification">
        This is teal notification with icon
      </Notification>

      <Notification icon={<IconX size="1.1rem" />} color="red">
        Bummer! Notification without title
      </Notification>

      <Notification
        loading
        title="Uploading data to the server"
        withCloseButton={false}
      >
        Please wait until data is uploaded, you cannot close this notification yet
      </Notification>
    </>
  );
}`}/>
    </DocPage>);
}
