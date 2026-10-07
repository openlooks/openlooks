import React from "react";
import type { Size } from "@openlooks/react";
import { Configurator } from "@openlooks/react";
import { ConfiguratorControls } from "@openlooks/react";
import { ConfiguratorStage } from "@openlooks/react";
import { Space } from "@openlooks/react";
import { Stack } from "@openlooks/react";
import { Text } from "@openlooks/react";
import { Title } from "@openlooks/react";
import { DocPage } from "../components/DocPage";
import { SizeInput } from "../components/SizeInput";
import { Prism } from "../components/Prism";
export function SpacePage() {
  const [h, setH] = React.useState("md" as Size);
  const [w, setW] = React.useState("md" as Size);
  return (
    <DocPage
      title="Space"
      description="Add horizontal or vertical spacing from theme"
    >
      <Title order={2}>Usage</Title>
      <Configurator>
        <ConfiguratorStage>
          <div>
            <Text>First line</Text>
            <Space c={`h-${h}`} />
            <Text>Second line</Text>
          </div>
        </ConfiguratorStage>
        <ConfiguratorControls>
          <Stack>
            <SizeInput
              id="h"
              label="H"
              defaultValue={h}
              onChange={(event) => {
                setH(event.target.value);
              }}
            />
          </Stack>
        </ConfiguratorControls>
      </Configurator>
      <Prism
        language="jsx"
        code={`import { Text, Space } from '@openlooks/react';

function Demo() {
  return (
    <>
      <Text>First line</Text>
      <Space c="h-${h}" />
      <Text>Second line</Text>
    </>
  );
}`}
      />
      <Configurator>
        <ConfiguratorStage>
          <div style={{ display: "flex" }}>
            <Text>First part</Text>
            <Space c={`w-${w}`} />
            <Text>Second part</Text>
          </div>
        </ConfiguratorStage>
        <ConfiguratorControls>
          <Stack>
            <SizeInput
              id="w"
              label="W"
              defaultValue={w}
              onChange={(event) => {
                setW(event.target.value);
              }}
            />
          </Stack>
        </ConfiguratorControls>
      </Configurator>
      <Prism
        language="jsx"
        code={`import { Text, Space } from '@openlooks/react';

function Demo() {
  return (
    <>
      <Text>First part</Text>
      <Space c="w-${w}" />
      <Text>Second part</Text>
    </>
  );
}`}
      />
      <Title order={2} c="mt-xl">
        Where to use
      </Title>
      <Text c="mb-lg">
        In most cases, you would want to use margin props instead of Space when
        working with Mantine components:
      </Text>
      <Prism
        language="jsx"
        code={`<Text>First line</Text>
// <Space h="md" /> is not required as the same can be achieved with margin
<Text mt="md">Second line</Text>`}
      />
      <Text c="my-lg">
        But when you work with regular HTML elements you do not have access to
        theme.spacing and you may want to use Space component to skip direct
        theme subscription:
      </Text>
      <Prism
        language="jsx"
        code={`<div>First line</div>
<Space h="md" />
// Margin props are not available on div, use Space to add spacing from theme
<div>Second line</div>`}
      />
    </DocPage>
  );
}
