import React from "react";
import { Burger } from "@openlooks/react";
import { Center } from "@openlooks/react";
import { Paper } from "@openlooks/react";
import { Text } from "@openlooks/react";
import { Title } from "@openlooks/react";
import { DocPage } from "../components/DocPage";
export function BurgerPage() {
  const [opened, setOpened] = React.useState(false);
  return (
    <DocPage title="Burger" description="Open/close navigation button">
      <Title order={2}>Usage</Title>
      <Text>
        Burger component renders open/close menu button. Set opened and onClick
        props to control Burger state. If opened prop is set cross will be
        rendered, otherwise - burger:
      </Text>
      <Paper c="p-xl withBorder">
        <Center>
          <Burger
            sx={{ "--size": "2.125rem" }}
            opened={opened}
            onClick={() => {
              setOpened(!opened);
            }}
          />
        </Center>
      </Paper>
    </DocPage>
  );
}
