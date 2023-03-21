import Center from '../../components/Center.lite';
import Container from '../../components/Container.lite';
import Text from '../../components/Text.lite';
import Title from '../../components/Title.lite';
import DocHeader from '../components/DocHeader.lite';

export default function CenterPage() {
  return (
    <>
      <DocHeader title="Center" description="Centers content vertically and horizontally" />
      <Container size="sm">
        <Title order={2}>Usage</Title>
        <Center class="blue0" p="md">
          <Text class="blue1">All elements inside Center are centered</Text>
        </Center>
      </Container>
    </>
  );
}
