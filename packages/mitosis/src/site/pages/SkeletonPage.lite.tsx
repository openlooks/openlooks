import Text from '../../components/Text.lite';
import Title from '../../components/Title.lite';
import DocPage from '../components/DocPage.lite';

export default function SkeletonPage() {
  return (
    <DocPage title="Skeleton" description="Indicate content loading state">
      <Title order={2}>Usage</Title>
      <Text>TODO</Text>
    </DocPage>
  );
}
