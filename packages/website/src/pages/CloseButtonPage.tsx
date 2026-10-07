import React from "react";
import { Center } from "@openlooks/react";
import { CloseButton } from "@openlooks/react";
import { Paper } from "@openlooks/react";
import { RouterLink } from "@openlooks/react";
import { Text } from "@openlooks/react";
import { Title } from "@openlooks/react";
import { DocPage } from "../components/DocPage";
import { Prism } from "../components/Prism";
export function CloseButtonPage() {
  return (
    <DocPage title="CloseButton" description="ActionIcon with close icon">
      <Title order={2}>Usage</Title>
      <Text>
        CloseButton is a premade{" "}
        <RouterLink href="/action-icon">ActionIcon</RouterLink> with close icon.
        Component accepts the same props as ActionIcon with additional iconSize
        prop to control icon width and height:
      </Text>
      <Paper c="p-xl mt-xl withBorder">
        <Center>
          <CloseButton title="Close modal" />
          <CloseButton title="Close popover" size="lg" />
        </Center>
      </Paper>
      <Prism
        language="jsx"
        code={`import { CloseButton, Group } from '@openlooks/react';

function Demo() {
  return (
    <Group position="center">
      <CloseButton title="Close modal" />
      <CloseButton title="Close popover" size="lg" />
    </Group>
  );
}`}
      />
    </DocPage>
  );
}
