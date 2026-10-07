import type { Color, Size } from "@openlooks/react";
import {
  ActionIcon,
  ColorPicker,
  Configurator,
  ConfiguratorControls,
  ConfiguratorStage,
  IconAdjustments,
  NativeSelect,
  Stack,
  Title,
} from "@openlooks/react";
import type { JSX } from "react";
import { useState } from "react";
import { DocPage } from "../components/DocPage";
import { Prism } from "../components/Prism";
import { SizeInput } from "../components/SizeInput";

export function ActionIconPage(): JSX.Element {
  const [color, setColor] = useState("gray" as Color);
  const [size, setSize] = useState("md" as Size);
  const [radius, setRadius] = useState("sm" as Size);
  const [variant, setVariant] = useState(
    "subtle" as "filled" | "light" | "outline" | "subtle",
  );
  return (
    <DocPage title="ActionIcon" description="Icon button">
      <Title order={2}>Usage</Title>
      <Configurator>
        <ConfiguratorStage>
          <ActionIcon
            c={`variant-${variant} color-${color} radius-${radius} size-${size}`}
          >
            <IconAdjustments
              size={
                (
                  {
                    xs: "0.75rem",
                    sm: "0.875rem",
                    md: "1.125rem",
                    lg: "1.625rem",
                    xl: "2.125rem",
                  } as Record<Size, string>
                )[size as Size]
              }
            />
          </ActionIcon>
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
            <SizeInput
              id="radius"
              label="Radius"
              defaultValue={radius as Size}
              onChange={(event) => {
                setRadius(event.target.value);
              }}
            />
            <NativeSelect
              id="variant"
              label="Variant"
              data={["filled", "light", "outline", "subtle"]}
              defaultValue={variant}
              onChange={(event) => {
                setVariant(event.target.value);
              }}
            />
          </Stack>
        </ConfiguratorControls>
      </Configurator>
      <Prism
        language="jsx"
        code={`import { ActionIcon } from '@openlooks/react';
import { IconAdjustments } from '@tabler/icons-react';

function Demo() {
  return (
    <ActionIcon c="variant-${variant} color-${color} radius-${radius} size-${size}">
      <IconAdjustments size="1.625rem" />
    </ActionIcon>
  );
}`}
      />
    </DocPage>
  );
}
