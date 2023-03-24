import Anchor from '../../components/Anchor.lite';
import Container from '../../components/Container.lite';
import Markdown from '../../components/Markdown.lite';
import Title from '../../components/Title.lite';
import Counter from '../components/Counter.lite';
import DocHeader from '../components/DocHeader.lite';
import Prism from '../components/Prism.lite';

export default function HomePage() {
  return (
    <>
      <DocHeader
        title="OpenLooks"
        description="Cross-framework components and utilities for building modern web applications."
      />
      <Container size="sm">
        <Title order={2}>What is this?</Title>
        <ul class="openlooks text">
          <li>
            Component library based on the look and feel of{` `}
            <Anchor href="https://mantine.dev">Mantine</Anchor>
          </li>
          <li>
            Uses{` `}
            <Anchor href="https://react.dev">Mitosis</Anchor>
            {` `}to support popular frameworks such as{` `}
            <Anchor href="https://react.dev">React</Anchor>,{` `}
            <Anchor href="https://react.dev">Angular</Anchor>,{` `}
            <Anchor href="https://react.dev">Vue</Anchor>,{` `}
            <Anchor href="https://react.dev">Svelte</Anchor>,{` `}
            <Anchor href="https://react.dev">Solid</Anchor>,{` `}and more.
          </li>
          <li>Zero dependencies and minimal footprint -- this whole site is only 20kb!</li>
          <li>100% TypeScript</li>
          <li>MIT license</li>
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
      </Container>
    </>
  );
}
