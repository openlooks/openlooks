import type { Size } from "@openlooks/react";
import {
  Configurator,
  ConfiguratorControls,
  ConfiguratorStage,
  NativeSelect,
  Stack,
  TextInput,
  Title,
} from "@openlooks/react";
import type { JSX } from "react";
import { useState } from "react";
import { DocPage } from "../components/DocPage";
import { Prism } from "../components/Prism";
import { SizeInput } from "../components/SizeInput";

export function NativeSelectPage(): JSX.Element {
  const [label, setLabel] = useState("Select your favorite framework/library");
  const [description, setDescription] = useState("This is anonymous");
  const [error, setError] = useState("");
  const [radius, setRadius] = useState("sm" as Size);
  const [size, setSize] = useState("sm" as Size);
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
