import Anchor from '../../components/Anchor.lite';
import Container from '../../components/Container.lite';
import Counter from '../../components/Counter.lite';
import Markdown from '../../components/Markdown.lite';
import Title from '../../components/Title.lite';

export default function HomePage() {
  return (
    <Container size="sm">
      <Title order={1}>OpenLooks</Title>
      <div>
        <Anchor href="https://openlooks.dev">OpenLooks</Anchor>
      </div>
      <hr />
      <Title order={2}>Counter Test</Title>
      <Counter />
      <hr />
      <Title order={2}>Markdown Test</Title>
      <Markdown>{`# Hello World

      This is a Markdown test.

      *Foo* **bar** _bang_ bop.
      `}</Markdown>
    </Container>
  );
}
