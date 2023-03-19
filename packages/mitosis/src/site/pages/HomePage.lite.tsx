import Anchor from '../../components/Anchor.lite';
import Counter from '../../components/Counter.lite';
import Markdown from '../../components/Markdown.lite';
import Route from '../../components/Route.lite';
import RouterLink from '../../components/RouterLink.lite';
import Title from '../../components/Title.lite';

export default function HomePage() {
  return (
    <>
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
      <hr />
      <Title order={2}>Router Test</Title>
      <div>
        <RouterLink href="/">home</RouterLink>
        &nbsp;&middot;&nbsp;
        <RouterLink href="/x">x</RouterLink>
        &nbsp;&middot;&nbsp;
        <RouterLink href="/y">y</RouterLink>
      </div>
      <Route path="/x">This is the X component</Route>
      <Route path="/y">This is the Y component</Route>
    </>
  );
}
