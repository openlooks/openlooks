import Code from '../../components/Code.lite';
import Group from '../../components/Group.lite';
import Paper from '../../components/Paper.lite';
import Text from '../../components/Text.lite';
import Title from '../../components/Title.lite';
import DocPage from '../components/DocPage.lite';
import Prism from '../components/Prism.lite';

export default function CodePage() {
  return (
    <DocPage title="Code" description="Inline or block code without syntax highlight">
      <Title order={2}>Inline code</Title>
      <Text c="mb-xl">By default, Code component renders inline code html element:</Text>
      <Paper c="p-md withBorder">
        <Code>React.createElement()</Code>
      </Paper>
      <Prism language="jsx">{`import { Code } from '@openlooks/react';

function Demo() {
  return <Code>React.createElement()</Code>;
}`}</Prism>
      <Title order={2}>Block code</Title>
      <Text c="mb-xl">To render code in pre element pass block prop to Code component:</Text>
      <Paper c="p-md withBorder">
        <Code block>{`import React from 'react';
import { Code } from '@mantine/core';

function Demo() {
  return <Code>React.createElement()</Code>;
}`}</Code>
      </Paper>
      <Prism language="jsx">{`import { Code } from '@mantine/core';

const codeForPreviousDemo = \`import React from 'react';
import { Code } from '@mantine/core';

function Demo() {
  return <Code>React.createElement()</Code>;
}\`;

function Demo() {
  return <Code block>{codeForPreviousDemo}</Code>;
}`}</Prism>
      <Title order={2}>Custom color</Title>
      <Text c="mb-xl">By default, code has gray color, you can change it to any color from theme.colors:</Text>
      <Paper c="p-md withBorder">
        <Group>
          <Code c="color-red">React.createElement()</Code>
          <Code c="color-teal">React.createElement()</Code>
          <Code c="color-blue">React.createElement()</Code>
        </Group>
      </Paper>
      <Prism language="jsx">{`import { Code } from '@mantine/core';

function Demo() {
  return (
    <>
      <Code c="color-red">React.createElement()</Code>
      <Code c="color-teal">React.createElement()</Code>
      <Code c="color-blue">React.createElement()</Code>
    </>
  );
}`}</Prism>
    </DocPage>
  );
}
