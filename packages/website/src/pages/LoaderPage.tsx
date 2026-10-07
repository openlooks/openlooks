import type { Color, Size } from "@openlooks/react";
import {
  ColorPicker,
  Configurator,
  ConfiguratorControls,
  ConfiguratorStage,
  Loader,
  Stack,
  Title,
} from "@openlooks/react";
import type { JSX } from "react";
import { useState } from "react";
import { DocPage } from "../components/DocPage";
import { Prism } from "../components/Prism";
import { SizeInput } from "../components/SizeInput";

export function LoaderPage(): JSX.Element {
  const [color, setColor] = useState("blue" as Color);
  const [size, setSize] = useState("md" as Size);
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
