import Anchor from '../Anchor/Anchor.lite';
import AppShell from '../AppShell/AppShell.lite';
import Counter from '../Counter/Counter.lite';
import Header from '../Header/Header.lite';
import Markdown from '../Markdown/Markdown.lite';
import Navbar from '../Navbar/Navbar.lite';
import Route from '../Route/Route.lite';
import Router from '../Router/Router.lite';
import RouterLink from '../RouterLink/RouterLink.lite';
import Title from '../Title/Title.lite';

export default function App() {
  return (
    <AppShell
      slotHeader={
        <Header>
          <Anchor href="/">OpenLooks</Anchor>
        </Header>
      }
      slotNavbar={<Navbar>nav</Navbar>}
    >
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
      <Router>
        <div>
          <RouterLink href="/">home</RouterLink>
          &nbsp;&middot;&nbsp;
          <RouterLink href="/x">x</RouterLink>
          &nbsp;&middot;&nbsp;
          <RouterLink href="/y">y</RouterLink>
        </div>
        <Route path="/">This is the home component</Route>
        <Route path="/x">This is the X component</Route>
        <Route path="/y">This is the Y component</Route>
      </Router>
    </AppShell>
  );
}
