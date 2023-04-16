import Center from '../../components/Center.lite';
import CloseButton from '../../components/CloseButton.lite';
import Paper from '../../components/Paper.lite';
import RouterLink from '../../components/RouterLink.lite';
import Text from '../../components/Text.lite';
import Title from '../../components/Title.lite';
import DocPage from '../components/DocPage.lite';
import Prism from '../components/Prism.lite';

export default function CloseButtonPage() {
  return (
    <DocPage title="CloseButton" description="ActionIcon with close icon">
      <Title order={2}>Usage</Title>
      <Text>
        CloseButton is a premade <RouterLink href="/action-icon">ActionIcon</RouterLink> with close icon. Component
        accepts the same props as ActionIcon with additional iconSize prop to control icon width and height:
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
