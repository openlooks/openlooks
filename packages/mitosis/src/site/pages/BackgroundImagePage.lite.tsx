import Container from '../../components/Container.lite';
import Text from '../../components/Text.lite';
import Title from '../../components/Title.lite';
import DocHeader from '../components/DocHeader.lite';

export default function BackgroundImagePage() {
  return (
    <>
      <DocHeader title="BackgroundImage" description="Displays image as background" />
      <Container size="sm">
        <Title order={2}>Usage</Title>
        <Text>
          Use BackgroundImage component when you need to display the image behind any content. Component sets
          background-image to given src, background-size to cover and background-position to center. It can be used for
          cards, hero headers and similar components:
        </Text>
      </Container>
    </>
  );
}
