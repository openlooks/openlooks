import Container from '../../components/Container.lite';
import Text from '../../components/Text.lite';
import Title from '../../components/Title.lite';
import DocHeader from '../components/DocHeader.lite';

export default function MenuPage() {
  return (
    <>
      <DocHeader title="Menu" description="Combine a list of secondary actions into single interactive area" />
      <Container size="sm">
        <Title order={2}>Usage</Title>
        <Text>TODO</Text>
      </Container>
    </>
  );
}