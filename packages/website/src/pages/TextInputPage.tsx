import type { Size } from "@openlooks/react";
import {
  Configurator,
  ConfiguratorControls,
  ConfiguratorStage,
  Stack,
  Switch,
  TextInput,
  Title,
} from "@openlooks/react";
import { JSX, useState } from "react";
import { DocPage } from "../components/DocPage";
import { Prism } from "../components/Prism";
import { SizeInput } from "../components/SizeInput";

export function TextInputPage(): JSX.Element {
  const [placeholder, setPlaceholder] = useState("Your name");
  const [label, setLabel] = useState("Full name");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [radius, setRadius] = useState("sm" as Size);
  const [size, setSize] = useState("sm" as Size);
  const [required, setRequired] = useState(false);
  return (
    <DocPage title="TextInput" description="Capture string input from user">
      <Title order={2}>Usage</Title>
      <Configurator>
        <ConfiguratorStage>
          <TextInput
            id="textinput"
            placeholder={placeholder}
            label={label}
            description={description}
            error={error}
            required={required}
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
            <Switch
              id="required"
              label="Required"
              onChange={(event) => {
                setRequired(event.target.checked);
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
      required={${required}}
      c="radius-${radius} size-${size}"
    />
  );
}`}
      />
    </DocPage>
  );
}
