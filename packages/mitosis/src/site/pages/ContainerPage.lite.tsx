import Container from '../../components/Container.lite';
import Text from '../../components/Text.lite';
import Title from '../../components/Title.lite';
import DocHeader from '../components/DocHeader.lite';

export default function ContainerPage() {
  return (
    <>
      <DocHeader title="Container" description="Center content horizontally with predefined max-width" />
      <Container size="sm">
        <Title order={2}>Usage</Title>
        <Text>
          Container is the most basic layout element, it centers content horizontally and adds horizontal padding from
          theme.
        </Text>
        <Container class="blue0">
          <Text>Default container</Text>
        </Container>
        <Container size="xs" px="xs" class="blue0">
          <Text>xs container with xs horizontal padding</Text>
        </Container>
      </Container>
    </>
  );
}
