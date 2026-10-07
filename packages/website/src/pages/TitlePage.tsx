import React from "react";
import { Paper } from "@openlooks/react";
import { Text } from "@openlooks/react";
import { Title } from "@openlooks/react";
import { DocPage } from "../components/DocPage";
import { Prism } from "../components/Prism";
export function TitlePage() {
  return (
    <DocPage title="Title" description="h1-h6 headings">
      <Title order={2}>Usage</Title>
      <Text c="mb-xl">
        Use Title component to render h1-h6 headings with Mantine theme styles.
        By default, Title has no margins and paddings. You can change headings
        font-size, font-weight and line-height properties in theme.headings.
      </Text>
      <Text c="mb-xl">
        Set order prop to render specific element (h1-h6), default order is 1:
      </Text>
      <Paper c="p-md withBorder">
        <Title order={1}>This is h1 title</Title>
        <Title order={2}>This is h2 title</Title>
        <Title order={3}>This is h3 title</Title>
        <Title order={4}>This is h4 title</Title>
        <Title order={5}>This is h5 title</Title>
        <Title order={6}>This is h6 title</Title>
      </Paper>
      <Prism
        language="jsx"
        code={`import { Title } from '@openlooks/react';

function Demo() {
  return (
    <>
      <Title order={1}>This is h1 title</Title>
      <Title order={2}>This is h2 title</Title>
      <Title order={3}>This is h3 title</Title>
      <Title order={4}>This is h4 title</Title>
      <Title order={5}>This is h5 title</Title>
      <Title order={6}>This is h6 title</Title>
    </>
  );
}`}
      />
    </DocPage>
  );
}
