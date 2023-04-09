import Paper from '../../components/Paper.lite';
import Text from '../../components/Text.lite';
import Title from '../../components/Title.lite';
import DocPage from '../components/DocPage.lite';
import Prism from '../components/Prism.lite';

export default function TextPage() {
  return (
    <DocPage title="Text" description="Display text and links with theme styles">
      <Title order={2}>Usage</Title>
      <Text c="mb-xl">
        Use Text component to display text and links with theme styles. Control Text styles with props:
      </Text>
      <Paper c="p-md withBorder">
        <Text c="fz-xs">Extra small text</Text>
        <Text c="fz-sm">Small text</Text>
        <Text c="fz-md">Default text</Text>
        <Text c="fz-lg">Large text</Text>
        <Text c="fz-xl">Extra large text</Text>
        <Text c="fw-500">Semibold</Text>
        <Text c="fw-700">Bold</Text>
        <Text c="fs-italic">Italic</Text>
        <Text c="td-underline">Underlined</Text>
        <Text c="td-line-through">Strikethrough</Text>
        <Text c="color-gray">Dimmed text</Text>
        <Text c="color-blue">Blue text</Text>
        <Text c="color-teal">Teal 4 text</Text>
        <Text c="tt-uppercase">Uppercase</Text>
        <Text c="tt-capitalize">capitalized text</Text>
        <Text c="ta-center">Aligned to center</Text>
        <Text c="ta-right">Aligned to right</Text>
      </Paper>
      <Prism
        language="jsx"
        code={`import { Text } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text c="fz-xs">Extra small text</Text>
      <Text c="fz-sm">Small text</Text>
      <Text c="fz-md">Default text</Text>
      <Text c="fz-lg">Large text</Text>
      <Text c="fz-xl">Extra large text</Text>
      <Text c="fw-500">Semibold</Text>
      <Text c="fw-700">Bold</Text>
      <Text c="fs-italic">Italic</Text>
      <Text c="td-underline">Underlined</Text>
      <Text c="td-line-through">Strikethrough</Text>
      <Text c="dimmed">Dimmed text</Text>
      <Text c="blue">Blue text</Text>
      <Text c="teal.4">Teal 4 text</Text>
      <Text c="tt-uppercase">Uppercase</Text>
      <Text c="tt-capitalize">capitalized text</Text>
      <Text c="ta-center">Aligned to center</Text>
      <Text c="ta-right">Aligned to right</Text>
    </>
  );
}`}
      />
    </DocPage>
  );
}
