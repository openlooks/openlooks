import React from "react";
import type { Color, Size } from "@openlooks/react";
import { ColorPicker } from "@openlooks/react";
import { Configurator } from "@openlooks/react";
import { ConfiguratorControls } from "@openlooks/react";
import { ConfiguratorStage } from "@openlooks/react";
import { Loader } from "@openlooks/react";
import { Stack } from "@openlooks/react";
import { Title } from "@openlooks/react";
import { DocPage } from "../components/DocPage";
import { SizeInput } from "../components/SizeInput";
import { Prism } from "../components/Prism";
export function LoaderPage() {
  const [color, setColor] = React.useState("blue" as Color);
  const [size, setSize] = React.useState("md" as Size);
  return (
    <DocPage title="Loader" description="Indicate loading state">
      <Title order={2}>Usage</Title>
      <Configurator>
        <ConfiguratorStage>
          <Loader c={`size-${size} color-${color}`} />
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
              defaultValue={size as Size}
              onChange={(event) => {
                setSize(event.target.value);
              }}
            />
          </Stack>
        </ConfiguratorControls>
      </Configurator>
      <Prism
        language="jsx"
        code={`import { Loader } from '@openlooks/react';

function Demo() {
  return (
    <Loader c="size-${size} color-${color}" />
  );
}`}
      />
    </DocPage>
  );
}
