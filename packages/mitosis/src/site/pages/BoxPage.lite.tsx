import Text from '../../components/Text.lite';
import Title from '../../components/Title.lite';
import DocPage from '../components/DocPage.lite';

export default function BoxPage() {
  return (
    <DocPage title="Box" description="Add inline styles to any element or component with sx">
      <Title order={2}>Usage</Title>
      <Text>Box allows you to use sx prop with any element or component. Box itself does not include any styles.</Text>
    </DocPage>
  );
}
