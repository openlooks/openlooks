import type { Color, Size } from "@openlooks/react";
import {
  ColorPicker,
  Configurator,
  ConfiguratorControls,
  ConfiguratorStage,
  Slider,
  Stack,
  Title,
} from "@openlooks/react";
import type { JSX } from "react";
import { useState } from "react";
import { DocPage } from "../components/DocPage";
import { SizeInput } from "../components/SizeInput";

export function SliderPage(): JSX.Element {
  const [color, setColor] = useState("blue" as Color);
  const [radius, setRadius] = useState("sm" as Size);
  const [size, setSize] = useState("sm" as Size);
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
