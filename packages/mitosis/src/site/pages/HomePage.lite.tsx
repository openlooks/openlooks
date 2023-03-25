import Anchor from '../../components/Anchor.lite';
import Markdown from '../../components/Markdown.lite';
import Title from '../../components/Title.lite';
import Counter from '../components/Counter.lite';
import DocPage from '../components/DocPage.lite';
import Prism from '../components/Prism.lite';

export default function HomePage() {
  return (
    <DocPage
      title="OpenLooks"
      description="Cross-framework components and utilities for building modern web applications."
    >
      <Title order={2}>What is this?</Title>
      <ul class="openlooks text">
        <li>
          Component library based on the look and feel of{` `}
          <Anchor href="https://mantine.dev">Mantine</Anchor>
        </li>
        <li>
          Uses{` `}
          <Anchor href="https://github.com/BuilderIO/mitosis">Mitosis</Anchor>
          {` `}to support popular frameworks such as{` `}
          <Anchor href="https://react.dev/">React</Anchor>,{` `}
          <Anchor href="https://angular.io/">Angular</Anchor>,{` `}
          <Anchor href="https://vuejs.org/">Vue</Anchor>,{` `}
          <Anchor href="https://svelte.dev/">Svelte</Anchor>,{` `}
          <Anchor href="https://www.solidjs.com/">Solid</Anchor>,{` `}and more.
        </li>
        <li>Zero dependencies and minimal footprint -- this whole site is only X kb!</li>
        <li>100% TypeScript</li>
        <li>MIT license</li>
      </ul>
      <Title order={2} mt="xl">
        Why?
      </Title>
      <ul class="openlooks text">
        <li>Consistent look and feel across frameworks reduces platform risk</li>
        <li>No dependency on Emotion or CSS-in-JS for fast and lightweight user experience</li>
        <li>Preference for styled native controls rather than rebuilding with divs</li>
      </ul>
      <Title order={2} mt="xl">
        Counter Test
      </Title>
      <Counter />
      <Title order={2} mt="xl">
        Markdown Test
      </Title>
      <Markdown>{`### Hello World

      This is a Markdown test.

      *Foo* **bar** ***baz***.
      `}</Markdown>
      <Title order={2} mt="xl">
        Code Block
      </Title>
      <Prism language="jsx">{`import { Button } from '@mantine/core';

function Demo() {
  return (
    <Button>
      Settings
    </Button>
  );
}`}</Prism>
    </DocPage>
  );
}
