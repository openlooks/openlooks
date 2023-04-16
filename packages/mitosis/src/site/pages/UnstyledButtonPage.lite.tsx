import Avatar from '../../components/Avatar.lite';
import Center from '../../components/Center.lite';
import Group from '../../components/Group.lite';
import Paper from '../../components/Paper.lite';
import Text from '../../components/Text.lite';
import Title from '../../components/Title.lite';
import UnstyledButton from '../../components/UnstyledButton.lite';
import DocPage from '../components/DocPage.lite';
import Prism from '../components/Prism.lite';

export default function UnstyledButtonPage() {
  return (
    <DocPage title="UnstyledButton" description="Unstyled polymorphic button">
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
