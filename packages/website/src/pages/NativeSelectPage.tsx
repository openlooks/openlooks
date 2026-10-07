import React from "react";
import type { Size } from "@openlooks/react";
import { Configurator } from "@openlooks/react";
import { ConfiguratorControls } from "@openlooks/react";
import { ConfiguratorStage } from "@openlooks/react";
import { NativeSelect } from "@openlooks/react";
import { Stack } from "@openlooks/react";
import { TextInput } from "@openlooks/react";
import { Title } from "@openlooks/react";
import { DocPage } from "../components/DocPage";
import { SizeInput } from "../components/SizeInput";
import { Prism } from "../components/Prism";
export function NativeSelectPage() {
  const [label, setLabel] = React.useState(
    "Select your favorite framework/library",
  );
  const [description, setDescription] = React.useState("This is anonymous");
  const [error, setError] = React.useState("");
  const [radius, setRadius] = React.useState("sm" as Size);
  const [size, setSize] = React.useState("sm" as Size);
  return (
    <DocPage
      title="NativeSelect"
      description="Capture user feedback limited to large set of options"
    >
      <Title order={2}>Usage</Title>
      <Configurator>
        <ConfiguratorStage>
          <NativeSelect
            id="textinput"
            data={["React", "Vue", "Angular", "Svelte"]}
            label={label}
            description={description}
            error={error}
            c={`radius-${radius} size-${size}`}
          />
        </ConfiguratorStage>
        <ConfiguratorControls>
          <Stack>
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
        code={`import { NativeSelect } from '@openlooks/react';

function Demo() {
  return (
    <NativeSelect
      data={['React', 'Vue', 'Angular', 'Svelte']}
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
