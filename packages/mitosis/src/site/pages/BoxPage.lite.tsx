import Container from '../../components/Container.lite';
import Text from '../../components/Text.lite';
import Title from '../../components/Title.lite';
import DocHeader from '../components/DocHeader.lite';

export default function BoxPage() {
  return (
    <>
      <DocHeader title="Box" description="Add inline styles to any element or component with sx" />
      <Container size="sm">
        <Title order={2}>Usage</Title>
        <Text>
          Box allows you to use sx prop with any element or component. Box itself does not include any styles.
        </Text>
      </Container>
    </>
  );
}
