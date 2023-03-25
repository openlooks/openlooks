import Anchor from '../../components/Anchor.lite';
import Center from '../../components/Center.lite';
import Paper from '../../components/Paper.lite';
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
        Demo
      </Title>
      <Paper withBorder p="xl">
        <Center>
          <Counter />
        </Center>
      </Paper>
      <Prism language="jsx">{`import { useStore } from '@builder.io/mitosis';
import { Button } from '@openlooks/react';

function Counter() {
  const state = useStore({
    count: 0,
  });

  return (
    <Button onClick={() => (state.count = state.count + 1)}>
      Count: {state.count}
    </Button>
  );
}`}</Prism>
    </DocPage>
  );
}
