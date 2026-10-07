import React from "react";
import type { Color, Size } from "@openlooks/react";
import { Checkbox } from "@openlooks/react";
import { ColorPicker } from "@openlooks/react";
import { Configurator } from "@openlooks/react";
import { ConfiguratorControls } from "@openlooks/react";
import { ConfiguratorStage } from "@openlooks/react";
import { Stack } from "@openlooks/react";
import { TextInput } from "@openlooks/react";
import { Title } from "@openlooks/react";
import { DocPage } from "../components/DocPage";
import { SizeInput } from "../components/SizeInput";
import { Prism } from "../components/Prism";
export function CheckboxPage() {
  const [label, setLabel] = React.useState("I agree to sell my privacy");
  const [description, setDescription] = React.useState("");
  const [error, setError] = React.useState("");
  const [size, setSize] = React.useState("sm" as Size);
  const [radius, setRadius] = React.useState("sm" as Size);
  const [color, setColor] = React.useState("blue" as Color);
  return (
    <DocPage title="Checkbox" description="Capture boolean input from user">
      <Title order={2}>Usage</Title>
      <Configurator>
        <ConfiguratorStage>
          <Checkbox
            id="checkbox"
            label={label}
            description={description}
            error={error}
            defaultChecked={true}
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
        code={`import { Checkbox } from '@openlooks/react';

function Demo() {
  return (
    <Checkbox
      label="${label}"
      description="${description}"
      error="${error}"
      size="${size}"
      c="radius-${radius} size-${size} color-${color}"
    />
  );
}`}
      />
    </DocPage>
  );
}
