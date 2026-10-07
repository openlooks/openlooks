import React from "react";
import type { Color, Size } from "@openlooks/react";
import { ColorPicker } from "@openlooks/react";
import { Configurator } from "@openlooks/react";
import { ConfiguratorControls } from "@openlooks/react";
import { ConfiguratorStage } from "@openlooks/react";
import { Slider } from "@openlooks/react";
import { Stack } from "@openlooks/react";
import { Title } from "@openlooks/react";
import { DocPage } from "../components/DocPage";
import { Prism } from "../components/Prism";
export function SliderPage() {
  const [color, setColor] = React.useState("blue" as Color);
  const [radius, setRadius] = React.useState("sm" as Size);
  const [size, setSize] = React.useState("sm" as Size);
  return (
    <DocPage
      title="Slider"
      description="Capture user feedback from a range of values"
    >
      <Title order={2}>Usage</Title>
      <Configurator>
        <ConfiguratorStage>
          <Slider
            id="slider"
            c={`color-${color} radius-${radius} size-${size}`}
            marks={[
              { value: 20, label: "20%" },
              { value: 50, label: "50%" },
              { value: 80, label: "80%" },
            ]}
          />
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
              id="radius"
              label="Radius"
              defaultValue={radius as Size}
              onChange={(event) => {
                setRadius(event.target.value);
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
    </DocPage>
  );
}
