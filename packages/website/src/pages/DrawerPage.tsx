import { Button, Center, Drawer, Paper, Title } from "@openlooks/react";
import type { JSX } from "react";
import { useState } from "react";
import { AuthenticationForm } from "../components/AuthenticationForm";
import { DocPage } from "../components/DocPage";

export function DrawerPage(): JSX.Element {
  const [visible, setVisible] = useState(false);
  return (
    <DocPage
      title="Drawer"
      description="Display overlay area at any side of the screen"
    >
      <Title order={2}>Usage</Title>
      <Paper c="p-xl withBorder">
        <Center>
          <Button
            onClick={(event) => {
              event.preventDefault();
              setVisible(!visible);
            }}
          >
            Toggle drawer
          </Button>
          <Drawer
            title="Authentication"
            c="p-md"
            width="27.5rem"
            visible={visible}
            onClose={() => setVisible(false)}
          >
            <AuthenticationForm formType="register" />
          </Drawer>
        </Center>
      </Paper>
    </DocPage>
  );
}
