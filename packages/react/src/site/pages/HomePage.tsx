import React from "react";
import Alert from "../../components/Alert";
import Anchor from "../../components/Anchor";
import Center from "../../components/Center";
import List from "../../components/List";
import Paper from "../../components/Paper";
import Text from "../../components/Text";
import Title from "../../components/Title";
import IconAlertCircle from "../../icons/IconAlertCircle";
import Counter from "../components/Counter";
import DocPage from "../components/DocPage";
import Prism from "../components/Prism";
export default function HomePage() {
    return (<DocPage title="OpenLooks" description="Cross-framework components and utilities for building modern web applications.">
      <Alert slotIcon={<IconAlertCircle size="1rem"/>} title="Project Status" c="color-blue variant-filled mb-xl">
        This is a pre alpha release of OpenLooks. Many components are unfinished. Expect breaking changes.
      </Alert>
      <Alert slotIcon={<IconAlertCircle size="1rem"/>} title="Framework Support" c="color-teal variant-filled mb-xl">
        In theory, OpenLooks should work with all Mitosis target frameworks.
        <br />
        <br />
        In practice, only <strong>React</strong>, <strong>Preact</strong>, and <strong>Solid</strong> are actively
        tested.
      </Alert>
      <Title order={2}>What is this?</Title>
      <List>
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
      </List>
      <Title order={2} c="mt-xl">
        Why?
      </Title>
      <List>
        <li>Consistent look and feel across front-end frameworks to reduce platform risk</li>
        <li>Pure CSS (no Emotion or CSS-in-JS) for fast and lightweight user experience</li>
        <li>Preference for styled native controls rather than rebuilding with divs</li>
        <li>
          I have chronic{` `}
          <Anchor href="https://en.wikipedia.org/wiki/Not_invented_here">NIH</Anchor>
          {` `}and want to rewrite everything
        </li>
      </List>
      <Title order={2} c="mt-xl">
        Demos
      </Title>
      <Text>
        See this site in multiple frameworks:
        <ul>
          <li>
            Preact: <Anchor href="https://preact.openlooks.dev">https://preact.openlooks.dev</Anchor>
          </li>
          <li>
            React: <Anchor href="https://react.openlooks.dev">https://react.openlooks.dev</Anchor>
          </li>
          <li>
            Solid: <Anchor href="https://solid.openlooks.dev">https://solid.openlooks.dev</Anchor>
          </li>
        </ul>
      </Text>
      <Title order={2} c="mt-xl">
        Project Name
      </Title>
      <Text>
        The name "OpenLooks" is a nod to{` `}
        <Anchor href="https://www.gnome-look.org/p/1080192">ClearLooks</Anchor>, the GTK theme often known as "the GTK
        theme for grown-ups".
      </Text>
      <Title order={2} c="mt-xl">
        Counter
      </Title>
      <Paper c="p-xl withBorder">
        <Center>
          <Counter />
        </Center>
      </Paper>
      <Prism language="jsx" code={`import { useStore } from '@builder.io/mitosis';
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
}`}/>
    </DocPage>);
}
