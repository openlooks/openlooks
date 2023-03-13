import Counter from '../Counter/Counter.lite';
import Markdown from '../Markdown/Markdown.lite';
import Title from '../Title/Title.lite';

export default function App() {
  return (
    <div>
      <Title order={1}>OpenLooks</Title>
      <Counter />
      <Markdown>{`# Hello World

      This is a Markdown test.

      *Foo* **bar** _bang_ bop.
      `}</Markdown>
    </div>
  );
}
