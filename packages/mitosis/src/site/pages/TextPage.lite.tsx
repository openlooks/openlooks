import Paper from '../../components/Paper.lite';
import Text from '../../components/Text.lite';
import Title from '../../components/Title.lite';
import DocPage from '../components/DocPage.lite';
import Prism from '../components/Prism.lite';

export default function TextPage() {
  return (
    <DocPage title="Text" description="Display text and links with theme styles">
      <Title order={2}>Usage</Title>
      <Text mb="xl">
        Use Text component to display text and links with theme styles. Control Text styles with props:
      </Text>
      <Paper withBorder p="md">
        <Text fz="xs">Extra small text</Text>
        <Text fz="sm">Small text</Text>
        <Text fz="md">Default text</Text>
        <Text fz="lg">Large text</Text>
        <Text fz="xl">Extra large text</Text>
        <Text fw={500}>Semibold</Text>
        <Text fw={700}>Bold</Text>
        <Text fs="italic">Italic</Text>
        <Text td="underline">Underlined</Text>
        <Text td="line-through">Strikethrough</Text>
        <Text color="gray">Dimmed text</Text>
        <Text color="blue">Blue text</Text>
        <Text color="teal">Teal 4 text</Text>
        <Text tt="uppercase">Uppercase</Text>
        <Text tt="capitalize">capitalized text</Text>
        <Text ta="center">Aligned to center</Text>
        <Text ta="right">Aligned to right</Text>
      </Paper>
      <Prism language="jsx">
        {`import { Text } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text fz="xs">Extra small text</Text>
      <Text fz="sm">Small text</Text>
      <Text fz="md">Default text</Text>
      <Text fz="lg">Large text</Text>
      <Text fz="xl">Extra large text</Text>
      <Text fw={500}>Semibold</Text>
      <Text fw={700}>Bold</Text>
      <Text fs="italic">Italic</Text>
      <Text td="underline">Underlined</Text>
      <Text td="line-through">Strikethrough</Text>
      <Text c="dimmed">Dimmed text</Text>
      <Text c="blue">Blue text</Text>
      <Text c="teal.4">Teal 4 text</Text>
      <Text tt="uppercase">Uppercase</Text>
      <Text tt="capitalize">capitalized text</Text>
      <Text ta="center">Aligned to center</Text>
      <Text ta="right">Aligned to right</Text>
    </>
  );
}`}
      </Prism>
    </DocPage>
  );
}
