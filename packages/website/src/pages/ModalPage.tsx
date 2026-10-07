import { Button, Center, Modal, Paper, Title } from "@openlooks/react";
import type { JSX } from "react";
import { useState } from "react";
import { AuthenticationForm } from "../components/AuthenticationForm";
import { DocPage } from "../components/DocPage";

export function ModalPage(): JSX.Element {
  const [visible, setVisible] = useState(false);
  return (
    <DocPage title="Modal" description="An accessible overlay dialog">
      <Title order={2}>Usage</Title>
      <Paper c="p-xl withBorder">
        <Center>
          <Button
            onClick={(event) => {
              event.preventDefault();
              setVisible(!visible);
            }}
          >
            Open modal
          </Button>
          <Modal
            title="Authentication"
            c="p-md"
            width="27.5rem"
            visible={visible}
            onClose={() => setVisible(false)}
          >
            <AuthenticationForm formType="register" />
          </Modal>
        </Center>
      </Paper>
    </DocPage>
  );
}
