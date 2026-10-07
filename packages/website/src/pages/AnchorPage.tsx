import { Anchor } from "@openlooks/react";
import { Center } from "@openlooks/react";
import { Paper } from "@openlooks/react";
import { RouterLink } from "@openlooks/react";
import { Text } from "@openlooks/react";
import { Title } from "@openlooks/react";
import { DocPage } from "../components/DocPage";
import { Prism } from "../components/Prism";
export function AnchorPage() {
  return (
    <DocPage title="Anchor" description="Display links with theme styles">
      <Title order={2}>Usage</Title>
      <Text>
        Anchor is a wrapper around <RouterLink href="/text">Text</RouterLink>{" "}
        component with component prop set to a by default. It supports the same
        props as Text component.
      </Text>
      <Paper c="p-xl withBorder">
        <Center>
          <Anchor href="https://openlooks.dev" target="_blank">
            OpenLooks docs
          </Anchor>
        </Center>
      </Paper>
      <Prism
        language="jsx"
        code={`import { Anchor } from '@mantine/core';

function Demo() {
  return (
    <Anchor href="https://openlooks.dev/" target="_blank">
      OpenLooks docs
    </Anchor>
  );
}`}
      />
    </DocPage>
  );
}
