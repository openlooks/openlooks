import React from "react";
import Anchor from "../../components/Anchor";
import Center from "../../components/Center";
import Paper from "../../components/Paper";
import RouterLink from "../../components/RouterLink";
import Text from "../../components/Text";
import Title from "../../components/Title";
import DocPage from "../components/DocPage";
import Prism from "../components/Prism";
export default function AnchorPage() {
    return (<DocPage title="Anchor" description="Display links with theme styles">
      <Title order={2}>Usage</Title>
      <Text>
        Anchor is a wrapper around <RouterLink href="/text">Text</RouterLink> component with component prop set to a by
        default. It supports the same props as Text component.
      </Text>
      <Paper c="p-xl withBorder">
        <Center>
          <Anchor href="https://openlooks.dev" target="_blank">
            OpenLooks docs
          </Anchor>
        </Center>
      </Paper>
      <Prism language="jsx" code={`import { Anchor } from '@mantine/core';

function Demo() {
  return (
    <Anchor href="https://openlooks.dev/" target="_blank">
      OpenLooks docs
    </Anchor>
  );
}`}/>
    </DocPage>);
}
