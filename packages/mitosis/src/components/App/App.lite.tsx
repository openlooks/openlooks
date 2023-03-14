import Anchor from '../Anchor/Anchor.lite';
import Counter from '../Counter/Counter.lite';
import Markdown from '../Markdown/Markdown.lite';
import Route from '../Route/Route.lite';
import Router from '../Router/Router.lite';
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
      <Router>
        <div>
          <Anchor href="/">home</Anchor>
          &nbsp;&middot;&nbsp;
          <Anchor href="/x">x</Anchor>
          &nbsp;&middot;&nbsp;
          <Anchor href="/y">y</Anchor>
        </div>
        <Route path="/x">This is the X component</Route>
        <Route path="/y">This is the Y component</Route>
      </Router>
    </div>
  );
}
