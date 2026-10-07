import React from "react";
import { Button } from "@openlooks/react";
import { Center } from "@openlooks/react";
import { Drawer } from "@openlooks/react";
import { Paper } from "@openlooks/react";
import { Title } from "@openlooks/react";
import { DocPage } from "../components/DocPage";
import { Prism } from "../components/Prism";
export function DrawerPage() {
  const [visible, setVisible] = React.useState(false);
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
