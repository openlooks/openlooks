import Container from '../../components/Container.lite';
import Text from '../../components/Text.lite';
import Title from '../../components/Title.lite';
import DocPage from '../components/DocPage.lite';
import Prism from '../components/Prism.lite';

export default function ContainerPage() {
  return (
    <DocPage title="Container" description="Center content horizontally with predefined max-width">
      <Title order={2}>Usage</Title>
      <Text>
        Container is the most basic layout element, it centers content horizontally and adds horizontal padding from
        theme.
      </Text>
      <Container my="xl" sx={{ background: 'var(--oc-blue-0)' }}>
        <Text>Default container</Text>
      </Container>
      <Container my="xl" size="xs" px="xs" sx={{ background: 'var(--oc-blue-0)' }}>
        <Text>xs container with xs horizontal padding</Text>
      </Container>
      <Prism language="jsx">
        {`import { Container } from '@openlooks/react';

function Demo() {
  return (
    <>
      <Container>
        Default container
      </Container>

      <Container size="xs" px="xs">
        xs container with xs horizontal padding
      </Container>
    </>
  );
}`}
      </Prism>
    </DocPage>
  );
}
