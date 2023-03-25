import Center from '../../components/Center.lite';
import Text from '../../components/Text.lite';
import Title from '../../components/Title.lite';
import DocPage from '../components/DocPage.lite';

export default function CenterPage() {
  return (
    <DocPage title="Center" description="Centers content vertically and horizontally">
      <Title order={2}>Usage</Title>
      <Center class="blue0" p="md">
        <Text class="blue1">All elements inside Center are centered</Text>
      </Center>
    </DocPage>
  );
}
