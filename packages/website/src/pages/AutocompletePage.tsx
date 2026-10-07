import React from "react";
import { Autocomplete } from "@openlooks/react";
import type { Size } from "@openlooks/react";
import { Configurator } from "@openlooks/react";
import { ConfiguratorControls } from "@openlooks/react";
import { ConfiguratorStage } from "@openlooks/react";
import { Container } from "@openlooks/react";
import { Paper } from "@openlooks/react";
import { Stack } from "@openlooks/react";
import { TextInput } from "@openlooks/react";
import { Title } from "@openlooks/react";
import { DocPage } from "../components/DocPage";
import { SizeInput } from "../components/SizeInput";
import { Prism } from "../components/Prism";
export function AutocompletePage() {
  const [placeholder, setPlaceholder] = React.useState("Pick one");
  const [label, setLabel] = React.useState("Your favorite framework/library");
  const [description, setDescription] = React.useState("");
  const [error, setError] = React.useState("");
  const [radius, setRadius] = React.useState("sm" as Size);
  const [size, setSize] = React.useState("sm" as Size);
  return (
    <DocPage
      title="Autocomplete"
      description="Autocomplete user input with any list of options"
    >
      <Title order={2}>Usage</Title>
      <Paper c="p-xl withBorder">
        <Container c="size-xs">
          <Autocomplete
            id="usageExample"
            data={["React", "Angular", "Svelte", "Vue"]}
            placeholder="Pick one"
            label="Your favorite framework/library"
          />
        </Container>
      </Paper>
      <Prism
        language="jsx"
        code={`import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <Autocomplete
      label="Your favorite framework/library"
      placeholder="Pick one"
      data={['React', 'Angular', 'Svelte', 'Vue']}
    />
  );
}`}
      />
      <Title order={2} c="mt-xl">
        Input props
      </Title>
      <Configurator>
        <ConfiguratorStage>
          <Autocomplete
            id="configuratorExample"
            data={["React", "Angular", "Svelte", "Vue"]}
            placeholder={placeholder}
            label={label}
            description={description}
            error={error}
            c={`radius-${radius} size-${size}`}
          />
        </ConfiguratorStage>
        <ConfiguratorControls>
          <Stack>
            <TextInput
              id="placeholder"
              label="Placeholder"
              placeholder="Placeholder"
              defaultValue={placeholder}
              onChange={(event) => {
                setPlaceholder(event.target.value);
              }}
            />
            <TextInput
              id="label"
              label="Label"
              placeholder="Label"
              defaultValue={label}
              onChange={(event) => {
                setLabel(event.target.value);
              }}
            />
            <TextInput
              id="description"
              label="Description"
              placeholder="Description"
              defaultValue={description}
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
            <TextInput
              id="error"
              label="Error"
              placeholder="Error"
              defaultValue={error}
              onChange={(event) => {
                setError(event.target.value);
              }}
            />
            <SizeInput
              id="radius"
              label="Radius"
              defaultValue={radius}
              onChange={(event) => {
                setRadius(event.target.value);
              }}
            />
            <SizeInput
              id="size"
              label="Size"
              defaultValue={size}
              onChange={(event) => {
                setSize(event.target.value);
              }}
            />
          </Stack>
        </ConfiguratorControls>
      </Configurator>
      <Prism
        language="jsx"
        code={`import { TextInput } from '@openlooks/react';

function Demo() {
  return (
    <TextInput
      placeholder="${placeholder}"
      label="${label}"
      description="${description}"
      error="${error}"
      c="radius-${radius} size-${size}"
    />
  );
}`}
      />
    </DocPage>
  );
}
