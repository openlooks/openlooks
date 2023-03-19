import Container from '../../components/Container.lite';
import Text from '../../components/Text.lite';
import Title from '../../components/Title.lite';
import DocHeader from '../components/DocHeader.lite';

export default function AppShellPage() {
  return (
    <>
      <DocHeader title="AppShell" description="Responsive shell for your application with header and navbar" />
      <Container size="sm">
        <Title order={2}>Usage</Title>
        <Text>TODO</Text>
      </Container>
    </>
  );
}