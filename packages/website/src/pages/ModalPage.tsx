import React from "react";
import { Button } from "@openlooks/react";
import { Center } from "@openlooks/react";
import { Modal } from "@openlooks/react";
import { Paper } from "@openlooks/react";
import { Title } from "@openlooks/react";
import { DocPage } from "../components/DocPage";
import { Prism } from "../components/Prism";
export function ModalPage() {
  const [visible, setVisible] = React.useState(false);
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
