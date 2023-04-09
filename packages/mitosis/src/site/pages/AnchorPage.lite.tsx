import Anchor from '../../components/Anchor.lite';
import Center from '../../components/Center.lite';
import Paper from '../../components/Paper.lite';
import RouterLink from '../../components/RouterLink.lite';
import Text from '../../components/Text.lite';
import Title from '../../components/Title.lite';
import DocPage from '../components/DocPage.lite';
import Prism from '../components/Prism.lite';

export default function AnchorPage() {
  return (
    <DocPage title="Anchor" description="Display links with theme styles">
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
