import { Code } from "@openlooks/react";
import { Group } from "@openlooks/react";
import { Paper } from "@openlooks/react";
import { Text } from "@openlooks/react";
import { Title } from "@openlooks/react";
import { DocPage } from "../components/DocPage";
import { Prism } from "../components/Prism";
export function CodePage() {
  return (
    <DocPage
      title="Code"
      description="Inline or block code without syntax highlight"
    >
      <Title order={2}>Inline code</Title>
      <Text c="mb-xl">
        By default, Code component renders inline code html element:
      </Text>
      <Paper c="p-md withBorder">
        <Code>createElement()</Code>
      </Paper>
      <Prism
        language="jsx"
        code={`import { Code } from '@openlooks/react';

function Demo() {
  return <Code>createElement()</Code>;
}`}
      />
      <Title order={2}>Block code</Title>
      <Text c="mb-xl">
        To render code in pre element pass block prop to Code component:
      </Text>
      <Paper c="p-md withBorder">
        <Code block>{`import React from 'react';
import { Code } from '@mantine/core';

function Demo() {
  return <Code>createElement()</Code>;
}`}</Code>
      </Paper>
      <Prism
        language="jsx"
        code={`import { Code } from '@mantine/core';

const codeForPreviousDemo = \`import React from 'react';
import { Code } from '@mantine/core';

function Demo() {
  return <Code>createElement()</Code>;
}\`;

function Demo() {
  return <Code block>{codeForPreviousDemo}</Code>;
}`}
      />
      <Title order={2}>Custom color</Title>
      <Text c="mb-xl">
        By default, code has gray color, you can change it to any color from
        theme.colors:
      </Text>
      <Paper c="p-md withBorder">
        <Group>
          <Code c="color-red">createElement()</Code>
          <Code c="color-teal">createElement()</Code>
          <Code c="color-blue">createElement()</Code>
        </Group>
      </Paper>
      <Prism
        language="jsx"
        code={`import { Code } from '@mantine/core';

function Demo() {
  return (
    <>
      <Code c="color-red">createElement()</Code>
      <Code c="color-teal">createElement()</Code>
      <Code c="color-blue">createElement()</Code>
    </>
  );
}`}
      />
    </DocPage>
  );
}
