import type { Color, Size } from "@openlooks/react";
import {
  Button,
  ColorPicker,
  Configurator,
  ConfiguratorControls,
  ConfiguratorStage,
  IconDatabase,
  NativeSelect,
  RouterLink,
  Stack,
  Switch,
  Text,
  TextInput,
  Title,
} from "@openlooks/react";
import type { JSX } from "react";
import { useState } from "react";
import { DocPage } from "../components/DocPage";
import { Prism } from "../components/Prism";
import { SizeInput } from "../components/SizeInput";

export function ButtonPage(): JSX.Element {
  const [variant, setVariant] = useState<
    "filled" | "light" | "outline" | "subtle"
  >("filled");
  const [color, setColor] = useState("blue" as Color);
  const [radius, setRadius] = useState("sm" as Size);
  const [size, setSize] = useState("sm" as Size);
  const [text, setText] = useState("Settings");
  const [loading, setLoading] = useState(false);
  return (
    <DocPage
      title="Button"
      description="Render button or link with button styles from mantine theme"
    >
      <Title order={2}>Usage</Title>
      <Configurator>
        <ConfiguratorStage>
          <Button
            c={`variant-${variant} color-${color} radius-${radius} size-${size}`}
          >
            {text}
          </Button>
        </ConfiguratorStage>
        <ConfiguratorControls>
          <Stack>
            <NativeSelect
              id="variant"
              label="Variant"
              data={["filled", "light", "outline", "subtle"]}
              defaultValue={variant}
              onChange={(event) => {
                setVariant(event.target.value);
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
            <TextInput
              id="text"
              label="Text"
              defaultValue={text}
              onChange={(event) => {
                setText(event.target.value);
              }}
            />
          </Stack>
        </ConfiguratorControls>
      </Configurator>
      <Prism
        language="jsx"
        code={`import { Button } from '@openlooks/react';

function Demo() {
  return (
    <Button c="variant-${variant} color-${color} radius-${radius} size-${size}">
      ${text}
    </Button>
  );
}`}
      />
      <Title order={2} c="mt-xl">
        Loading state
      </Title>
      <Text>
        Button supports loading state. In this state{" "}
        <RouterLink href="/loader">Loader</RouterLink> component replaces left
        or right icon, button becomes disabled and white or dark overlay is
        added.
      </Text>
      <Configurator>
        <ConfiguratorStage>
          <Button slotIcon={<IconDatabase />} loading={loading}>
            Connect to database
          </Button>
        </ConfiguratorStage>
        <ConfiguratorControls>
          <Stack>
            <Switch
              id="loading"
              label="Loading"
              c="radius-xl"
              onChange={(event) => {
                setLoading((event.target as HTMLInputElement).checked);
              }}
            />
          </Stack>
        </ConfiguratorControls>
      </Configurator>
      <Prism
        language="jsx"
        code={`import { Button } from '@openlooks/react';
function Demo() {
  return (
    <Button slotIcon={<IconDatabase />} loading={${loading}}>
      Connect to database
    </Button>
  );
}`}
      />
    </DocPage>
  );
}
