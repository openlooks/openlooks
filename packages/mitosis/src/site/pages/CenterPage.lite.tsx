import Center from '../../components/Center.lite';
import Text from '../../components/Text.lite';
import Title from '../../components/Title.lite';
import DocPage from '../components/DocPage.lite';
import Prism from '../components/Prism.lite';

export default function CenterPage() {
  return (
    <DocPage title="Center" description="Centers content vertically and horizontally">
      <Title order={2}>Usage</Title>
      <Center c="p-xl" sx={{ background: 'var(--oc-blue-0)' }}>
        <Text sx={{ background: 'var(--oc-blue-1)' }}>All elements inside Center are centered</Text>
      </Center>
      <Prism
        language="jsx"
        code={`import { Center } from '@openlooks/react';

function Demo() {
  return (
    <Center c="p-xl">
      <div>All elements inside Center are centered</div>
    </Center>
  );
}`}
      />
    </DocPage>
  );
}
