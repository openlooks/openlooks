import React from "react";
import type { Size } from "@openlooks/react";
import { Configurator } from "@openlooks/react";
import { ConfiguratorControls } from "@openlooks/react";
import { ConfiguratorStage } from "@openlooks/react";
import { PasswordInput } from "@openlooks/react";
import { Stack } from "@openlooks/react";
import { Switch } from "@openlooks/react";
import { TextInput } from "@openlooks/react";
import { Title } from "@openlooks/react";
import { DocPage } from "../components/DocPage";
import { SizeInput } from "../components/SizeInput";
import { Prism } from "../components/Prism";
export function PasswordInputPage() {
  const [placeholder, setPlaceholder] = React.useState("Password");
  const [label, setLabel] = React.useState("Password");
  const [description, setDescription] = React.useState(
    "Password must include at least one letter, number and special character",
  );
  const [error, setError] = React.useState("");
  const [radius, setRadius] = React.useState("sm" as Size);
  const [size, setSize] = React.useState("sm" as Size);
  const [required, setRequired] = React.useState(false);
  return (
    <DocPage
      title="PasswordInput"
      description="Capture password from user with option to toggle visibility"
    >
      <Title order={2}>Usage</Title>
      <Configurator>
        <ConfiguratorStage>
          <PasswordInput
            id="password"
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
