import type { Color, Size } from "@openlooks/react";
import {
  Badge,
  ColorPicker,
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

export function BadgePage(): JSX.Element {
  const [color, setColor] = useState("blue" as Color);
  const [size, setSize] = useState("md" as Size);
  const [radius, setRadius] = useState("xl" as Size);
  const [variant, setVariant] = useState(
    "filled" as "filled" | "light" | "outline",
  );
  const [text, setText] = useState("Badge");
  return (
    <DocPage title="Badge" description="Display badge, pill or tag">
      <Title order={2}>Usage</Title>
      <Configurator>
        <ConfiguratorStage>
          <Badge
            c={`variant-${variant} color-${color} radius-${radius} size-${size}`}
          >
            {text}
          </Badge>
        </ConfiguratorStage>
        <ConfiguratorControls>
          <Stack>
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
            <NativeSelect
              id="variant"
              label="Variant"
              data={["filled", "light", "outline"]}
              defaultValue={variant}
              onChange={(event) => {
                setVariant(event.target.value);
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
        code={`import { Badge } from '@openlooks/react';

function Demo() {
  return (
    <Badge c="variant-${variant} color-${color} radius-${radius} size-${size}">${text}</Badge>
  );
}`}
      />
    </DocPage>
  );
}
