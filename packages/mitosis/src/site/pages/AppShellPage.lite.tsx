import Container from '../../components/Container.lite';
import Text from '../../components/Text.lite';
import Title from '../../components/Title.lite';

export default function AppShellPage() {
  return (
    <Container size="sm">
      <Title order={1}>AppShell</Title>
      <Text>Responsive shell for your application with header and navbar</Text>
    </Container>
  );
}
