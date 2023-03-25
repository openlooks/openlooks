import Container from '../../components/Container.lite';
import Text from '../../components/Text.lite';
import Title from '../../components/Title.lite';

export interface DocPageProps {
  title: string;
  description: string;
  children?: any;
}

export default function DocPage(props: DocPageProps) {
  return (
    <>
      <div class="doc-header">
        <Container size="sm">
          <Title order={1}>{props.title}</Title>
          <Text>{props.description}</Text>
        </Container>
      </div>
      <Container size="sm" p="sm">
        {props.children}
      </Container>
    </>
  );
}
