import React from "react";
import Avatar from "../../components/Avatar";
import Center from "../../components/Center";
import Group from "../../components/Group";
import Paper from "../../components/Paper";
import Text from "../../components/Text";
import Title from "../../components/Title";
import UnstyledButton from "../../components/UnstyledButton";
import DocPage from "../components/DocPage";
import Prism from "../components/Prism";
export default function UnstyledButtonPage() {
    return (<DocPage title="UnstyledButton" description="Unstyled polymorphic button">
      <Title order={2}>Usage</Title>
      <Text>UnstyledButton resets default button styles, it can be used to create custom buttons:</Text>
      <Paper c="p-xl mt-xl withBorder">
        <Center>
          <UnstyledButton>
            <Group>
              <Avatar c="color-blue radius-sm size-md">BH</Avatar>
              <div>
                <Text>Bob Handsome</Text>
                <Text c="size-xs color-gray">bob@handsome.inc</Text>
              </div>
            </Group>
          </UnstyledButton>
        </Center>
      </Paper>
      <Prism language="jsx" code={`import { Anchor } from '@mantine/core';

function Demo() {
  return (
    <UnstyledButton>
      <Group>
        <Avatar c="color-blue radius-sm size-md">BH</Avatar>
        <div>
          <Text>Bob Handsome</Text>
          <Text c="size-xs color-gray">bob@handsome.inc</Text>
        </div>
      </Group>
    </UnstyledButton>
  );
}`}/>
    </DocPage>);
}
