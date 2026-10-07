import { Avatar } from "@openlooks/react";
import { Center } from "@openlooks/react";
import { Group } from "@openlooks/react";
import { Paper } from "@openlooks/react";
import { Text } from "@openlooks/react";
import { Title } from "@openlooks/react";
import { UnstyledButton } from "@openlooks/react";
import { DocPage } from "../components/DocPage";
import { Prism } from "../components/Prism";
export function UnstyledButtonPage() {
  return (
    <DocPage title="UnstyledButton" description="Unstyled polymorphic button">
      <Title order={2}>Usage</Title>
      <Text>
        UnstyledButton resets default button styles, it can be used to create
        custom buttons:
      </Text>
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
      <Prism
        language="jsx"
        code={`import { Anchor } from '@mantine/core';

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
}`}
      />
    </DocPage>
  );
}
