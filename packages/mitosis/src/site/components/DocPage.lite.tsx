import Container from '../../components/Container.lite';
import Text from '../../components/Text.lite';
import Title from '../../components/Title.lite';
import './DocPage.css';

export interface DocPageProps {
  title: string;
  description: string;
  children?: any;
}

export default function DocPage(props: DocPageProps) {
  return (
    <>
      <div class="doc-header">
        <Container size="sm" px="sm" py="xl">
          <Title order={1}>{props.title}</Title>
          <Text mb="xl">{props.description}</Text>
        </Container>
      </div>
      <Container size="sm" px="sm" py="xl">
        {props.children}
      </Container>
    </>
  );
}
