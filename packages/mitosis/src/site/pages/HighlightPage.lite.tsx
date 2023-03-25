import Text from '../../components/Text.lite';
import Title from '../../components/Title.lite';
import DocPage from '../components/DocPage.lite';

export default function HighlightPage() {
  return (
    <DocPage title="Highlight" description="Highlight given part of a string with mark tag">
      <Title order={2}>Usage</Title>
      <Text>Use Highlight component to highlight a substring in a given string with mark tag.</Text>
      <Text>
        Pass main string as children to Highlight component and string part that should be highlighted to highlight
        prop. If main string does not include highlight part, it will be ignored. Component ignores trailing whitespace
        and highlights all matched characters sequence.
      </Text>
    </DocPage>
  );
}
