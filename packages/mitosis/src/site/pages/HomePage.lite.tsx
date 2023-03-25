import Alert from '../../components/Alert.lite';
import Anchor from '../../components/Anchor.lite';
import Center from '../../components/Center.lite';
import Paper from '../../components/Paper.lite';
import Title from '../../components/Title.lite';
import IconAlertCircle from '../../icons/IconAlertCircle.lite';
import Counter from '../components/Counter.lite';
import DocPage from '../components/DocPage.lite';
import Prism from '../components/Prism.lite';

export default function HomePage() {
  return (
    <DocPage
      title="OpenLooks"
      description="Cross-framework components and utilities for building modern web applications."
    >
      <Alert icon={<IconAlertCircle size="1rem" />} title="Project Status" color="blue" variant="filled" mb="xl">
        This is a pre alpha release of OpenLooks. Many components are unfinished. Expect breaking changes.
      </Alert>
      <Alert icon={<IconAlertCircle size="1rem" />} title="Framework Support" color="orange" variant="filled" mb="xl">
        In theory, OpenLooks should work with all Mitosis target frameworks. However, only React and Solid are tested.
      </Alert>
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
