import type { Color, Size } from "@openlooks/react";
import {
  ColorPicker,
  Configurator,
  ConfiguratorControls,
  ConfiguratorStage,
  Stack,
  Switch,
  TextInput,
  Title,
} from "@openlooks/react";
import type { JSX } from "react";
import { useState } from "react";
import { DocPage } from "../components/DocPage";
import { Prism } from "../components/Prism";
import { SizeInput } from "../components/SizeInput";

export function SwitchPage(): JSX.Element {
  const [label, setLabel] = useState("I agree to sell my privacy");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [size, setSize] = useState("sm" as Size);
  const [radius, setRadius] = useState("xl" as Size);
  const [color, setColor] = useState("blue" as Color);
  return (
    <DocPage title="Switch" description="Capture boolean input from user">
      <Title order={2}>Usage</Title>
      <Configurator>
        <ConfiguratorStage>
          <Switch
            id="switch"
            label={label}
            description={description}
            error={error}
            c={`radius-${radius} size-${size} color-${color}`}
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
              id="size"
              label="Size"
              defaultValue={size}
              onChange={(event) => {
                setSize(event.target.value);
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
            <ColorPicker
              id="color"
              name="color"
              label="Color"
              defaultValue={color}
              onChange={(event) => {
                setColor(event.target.value);
              }}
            />
          </Stack>
        </ConfiguratorControls>
      </Configurator>
      <Prism
        language="jsx"
        code={`import { Switch } from '@openlooks/react';

function Demo() {
  return (
    <Switch
      label="${label}"
      description="${description}"
      error="${error}"
      c="radius-${radius} size-${size} color-${color}"
    />
  );
}`}
      />
    </DocPage>
  );
}
