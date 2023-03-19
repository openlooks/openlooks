import Container from '../../components/Container.lite';
import Text from '../../components/Text.lite';
import Title from '../../components/Title.lite';
import DocHeader from '../components/DocHeader.lite';

export default function TextPage() {
  return (
    <>
      <DocHeader title="Text" description="Display text and links with theme styles" />
      <Container size="sm">
        <Title order={2}>Usage</Title>
        <Text>Use Text component to display text and links with theme styles. Control Text styles with props:</Text>
      </Container>
    </>
  );
}
