import Container from '../../components/Container.lite';
import Text from '../../components/Text.lite';
import Title from '../../components/Title.lite';

export interface DocHeaderProps {
  title: string;
  description: string;
}

export default function DocHeader(props: DocHeaderProps) {
  return (
    <div class="doc-header">
      <Container size="sm">
        <Title order={1}>{props.title}</Title>
        <Text>{props.description}</Text>
      </Container>
    </div>
  );
}
