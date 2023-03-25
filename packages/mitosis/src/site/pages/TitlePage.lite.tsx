import Text from '../../components/Text.lite';
import Title from '../../components/Title.lite';
import DocPage from '../components/DocPage.lite';

export default function TitlePage() {
  return (
    <DocPage title="Title" description="h1-h6 headings">
      <Title order={2}>Usage</Title>
      <Text>TODO</Text>
    </DocPage>
  );
}
