import Counter from '../Counter/Counter.lite';
import Markdown from '../Markdown/Markdown.lite';

export default function App() {
  return (
    <div>
      <h1>OpenLooks</h1>
      <Counter />
      <Markdown>{`# Hello World

      This is a Markdown test.

      *Foo* **bar** _bang_ bop.
      `}</Markdown>
    </div>
  );
}
