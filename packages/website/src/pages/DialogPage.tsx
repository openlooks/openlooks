import React from "react";
import { Button } from "@openlooks/react";
import { Center } from "@openlooks/react";
import { Dialog } from "@openlooks/react";
import { Group } from "@openlooks/react";
import { Paper } from "@openlooks/react";
import { Text } from "@openlooks/react";
import { TextInput } from "@openlooks/react";
import { Title } from "@openlooks/react";
import { DocPage } from "../components/DocPage";
export function DialogPage() {
  const [opacity, setOpacity] = React.useState("0");
  return (
    <DocPage
      title="Dialog"
      description="Display fixed overlay at any side of the screen"
    >
      <Title order={2}>Usage</Title>
      <Paper c="p-xl withBorder">
        <Center>
          <Button
            onClick={(event) => {
              event.preventDefault();
              if (opacity === "0") {
                setOpacity("1");
              } else {
                setOpacity("0");
              }
            }}
          >
            Toggle dialog
          </Button>
          <Dialog c="radius-sm p-md" sx={{ opacity: opacity, width: "23rem" }}>
            <Text c="size-sm mb-xs weight-500">
              Subscribe to email newsletter
            </Text>
            <Group c="align-flex-end">
              <TextInput
                id="textinput"
                placeholder="hello@gluesticker.com"
                sx={{ flex: 1 }}
              />
              <Button>Subscribe</Button>
            </Group>
          </Dialog>
        </Center>
      </Paper>
    </DocPage>
  );
}
