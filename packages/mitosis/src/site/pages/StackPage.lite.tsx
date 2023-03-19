import Container from '../../components/Container.lite';
import Text from '../../components/Text.lite';
import Title from '../../components/Title.lite';
import DocHeader from '../components/DocHeader.lite';

export default function StackPage() {
  return (
    <>
      <DocHeader title="Stack" description="Compose elements and components in vertical flex container" />
      <Container size="sm">
        <Title order={2}>Usage</Title>
        <Text>TODO</Text>
      </Container>
    </>
  );
}
