import React from "react";
import type { Size } from "@openlooks/react";
import { Configurator } from "@openlooks/react";
import { ConfiguratorControls } from "@openlooks/react";
import { ConfiguratorStage } from "@openlooks/react";
import { Paper } from "@openlooks/react";
import { Stack } from "@openlooks/react";
import { Text } from "@openlooks/react";
import { Title } from "@openlooks/react";
import { DocPage } from "../components/DocPage";
import { Prism } from "../components/Prism";
export function PaperPage() {
  const [shadow, setShadow] = React.useState("xs" as Size);
  const [radius, setRadius] = React.useState("sm" as Size);
  const [padding, setPadding] = React.useState("md" as Size);
  const [withBorder, setWithBorder] = React.useState(false);
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
          </Stack>
        </ConfiguratorControls>
      </Configurator>
    </DocPage>
  );
}
