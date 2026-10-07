import { Burger, Center, Paper, Text, Title } from "@openlooks/react";
import type { JSX } from "react";
import { useState } from "react";
import { DocPage } from "../components/DocPage";

export function BurgerPage(): JSX.Element {
  const [opened, setOpened] = useState(false);
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
