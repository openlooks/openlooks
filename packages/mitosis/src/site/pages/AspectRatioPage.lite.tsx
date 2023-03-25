import Text from '../../components/Text.lite';
import Title from '../../components/Title.lite';
import DocPage from '../components/DocPage.lite';

export default function AspectRatioPage() {
  return (
    <DocPage title="AspectRatio" description="Maintain responsive consistent width/height ratio">
      <Title order={2}>Usage</Title>
      <Text>
        AspectRatio allows to maintain consistent width/height ratio. It can be used to display images, maps, videos and
        other media.
      </Text>
    </DocPage>
  );
}
