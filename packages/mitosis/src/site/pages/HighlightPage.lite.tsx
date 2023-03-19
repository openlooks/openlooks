import Container from '../../components/Container.lite';
import Text from '../../components/Text.lite';
import Title from '../../components/Title.lite';
import DocHeader from '../components/DocHeader.lite';

export default function HighlightPage() {
  return (
    <>
      <DocHeader title="Highlight" description="Highlight given part of a string with mark tag" />
      <Container size="sm">
        <Title order={2}>Usage</Title>
        <Text>Use Highlight component to highlight a substring in a given string with mark tag.</Text>
        <Text>
          Pass main string as children to Highlight component and string part that should be highlighted to highlight
          prop. If main string does not include highlight part, it will be ignored. Component ignores trailing
          whitespace and highlights all matched characters sequence.
        </Text>
      </Container>
    </>
  );
}
