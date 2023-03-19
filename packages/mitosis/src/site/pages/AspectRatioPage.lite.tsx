import Container from '../../components/Container.lite';
import Text from '../../components/Text.lite';
import Title from '../../components/Title.lite';
import DocHeader from '../components/DocHeader.lite';

export default function AspectRatioPage() {
  return (
    <>
      <DocHeader title="AspectRatio" description="Maintain responsive consistent width/height ratio" />
      <Container size="sm">
        <Title order={2}>Usage</Title>
        <Text>
          AspectRatio allows to maintain consistent width/height ratio. It can be used to display images, maps, videos
          and other media.
        </Text>
      </Container>
    </>
  );
}
