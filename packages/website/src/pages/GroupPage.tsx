import type { Size } from "@openlooks/react";
import { Button } from "@openlooks/react";
import { Configurator } from "@openlooks/react";
import { ConfiguratorControls } from "@openlooks/react";
import { ConfiguratorStage } from "@openlooks/react";
import { Group } from "@openlooks/react";
import { NativeSelect } from "@openlooks/react";
import { Stack } from "@openlooks/react";
import { Title } from "@openlooks/react";
import { DocPage } from "../components/DocPage";
import { Switch } from "@openlooks/react";
import { SizeInput } from "../components/SizeInput";
import { Prism } from "../components/Prism";
import { useState } from "react";
import type { JSX } from "react";

export function GroupPage(): JSX.Element {
  const [position, setPosition] = useState(
    "left" as "left" | "center" | "right" | "apart",
  );
  const [spacing, setSpacing] = useState("md" as Size);
  const [grow, setGrow] = useState(false);
  return (
    <DocPage
      title="Group"
      description="Compose elements and components in a horizontal flex container"
    >
      <Title order={2}>Usage</Title>
      <Configurator>
        <ConfiguratorStage>
          <div style={{ flex: "1", width: "100%" }}>
            <Group
              c={`position-${position} spacing-${spacing}${grow ? " grow" : ""}`}
            >
              <Button c="variant-outline">1</Button>
              <Button c="variant-outline">2</Button>
              <Button c="variant-outline">3</Button>
            </Group>
          </div>
        </ConfiguratorStage>
        <ConfiguratorControls>
          <Stack>
            <NativeSelect
              id="position"
              label="Position"
              data={["left", "center", "right", "apart"]}
              defaultValue={position}
              onChange={(event) => {
                setPosition(event.target.value);
              }}
            />
            <SizeInput
              id="spacing"
              label="Spacing"
              defaultValue={spacing as Size}
              onChange={(event) => {
                setSpacing(event.target.value);
              }}
            />
            <Switch
              id="grow"
              label="Grow"
              c="radius-xl"
              onChange={(event) => {
                setGrow((event.target as HTMLInputElement).checked);
              }}
            />
          </Stack>
        </ConfiguratorControls>
      </Configurator>
      <Prism
        language="jsx"
        code={`import { Group, Button } from '@openlooks/react';

function Demo() {
  return (
    <Group c="position-${position} spacing-${spacing}${grow ? " grow" : ""}">
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
    </Group>
  );
}`}
      />
    </DocPage>
  );
}
