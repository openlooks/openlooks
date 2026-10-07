import type { Size } from "@openlooks/react";
import {
  Checkbox,
  Configurator,
  ConfiguratorControls,
  ConfiguratorStage,
  Paper,
  Stack,
  Text,
  Title,
} from "@openlooks/react";
import type { JSX } from "react";
import { useState } from "react";
import { DocPage } from "../components/DocPage";
import { SizeInput } from "../components/SizeInput";

export function PaperPage(): JSX.Element {
  const [shadow, setShadow] = useState("xs" as Size);
  const [radius, setRadius] = useState("sm" as Size);
  const [padding, setPadding] = useState("md" as Size);
  const [withBorder, setWithBorder] = useState(false);
  return (
    <DocPage
      title="Paper"
      description="Renders white or dark background depending on color scheme"
    >
      <Title order={2}>Usage</Title>
      <Text c="mb-xl">
        Paper component renders white (or theme.colors.dark[7] for dark theme)
        background with shadow, border-radius and padding from theme.
      </Text>
      <Configurator>
        <ConfiguratorStage sx={{ background: "var(--oc-gray-0)" }}>
          <Paper
            c={`shadow-${shadow} radius-${radius} p-${padding} ${withBorder ? "withBorder" : ""}`}
          >
            <Text>Paper is the most basic ui component</Text>
            <Text>
              Use it to create cards, dropdowns, modals and other components
              that require background with shadow
            </Text>
          </Paper>
        </ConfiguratorStage>
        <ConfiguratorControls>
          <Stack>
            <SizeInput
              id="shadow"
              label="Shadow"
              defaultValue={shadow as Size}
              onChange={(event) => {
                setShadow(event.target.value);
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
              id="padding"
              label="Padding"
              defaultValue={padding}
              onChange={(event) => {
                setPadding(event.target.value);
              }}
            />
            <Checkbox
              id="withBorder"
              label="With Border"
              defaultChecked={withBorder}
              onChange={(event) => {
                setWithBorder(event.target.checked);
              }}
            />
          </Stack>
        </ConfiguratorControls>
      </Configurator>
    </DocPage>
  );
}
