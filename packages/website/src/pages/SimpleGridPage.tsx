import type { Size } from "@openlooks/react";
import {
  Configurator,
  ConfiguratorControls,
  ConfiguratorStage,
  NativeSelect,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@openlooks/react";
import { JSX, useState } from "react";
import { DocPage } from "../components/DocPage";
import { Prism } from "../components/Prism";
import { SizeInput } from "../components/SizeInput";

export function SimpleGridPage(): JSX.Element {
  const [cols, setCols] = useState(3);
  const [spacing, setSpacing] = useState("md" as Size);
  const [verticalSpacing, setVerticalSpacing] = useState("md" as Size);
  return (
    <DocPage
      title="SimpleGrid"
      description="Responsive grid where each item takes equal amount of space"
    >
      <Title order={2}>Usage</Title>
      <Configurator>
        <ConfiguratorStage>
          <SimpleGrid
            c={`cols-${cols} spacing-${spacing} verticalSpacing-${verticalSpacing}`}
            sx={{ width: "100%" }}
          >
            <Text
              c="p-xl ta-center color-blue fw-700"
              sx={{ background: "var(--oc-blue-0)" }}
            >
              1
            </Text>
            <Text
              c="p-xl ta-center color-blue fw-700"
              sx={{ background: "var(--oc-blue-0)" }}
            >
              2
            </Text>
            <Text
              c="p-xl ta-center color-blue fw-700"
              sx={{ background: "var(--oc-blue-0)" }}
            >
              3
            </Text>
            <Text
              c="p-xl ta-center color-blue fw-700"
              sx={{ background: "var(--oc-blue-0)" }}
            >
              4
            </Text>
            <Text
              c="p-xl ta-center color-blue fw-700"
              sx={{ background: "var(--oc-blue-0)" }}
            >
              5
            </Text>
          </SimpleGrid>
        </ConfiguratorStage>
        <ConfiguratorControls>
          <Stack>
            <NativeSelect
              id="cols"
              label="cols"
              data={["1", "2", "3", "4", "5", "6"]}
              defaultValue={cols.toString()}
              onChange={(event) => {
                setCols(parseInt(event.target.value));
              }}
            />
            <SizeInput
              id="spacing"
              label="Spacing"
              defaultValue={spacing}
              onChange={(event) => {
                setSpacing(event.target.value);
              }}
            />
            <SizeInput
              id="verticalSpacing"
              label="Vertical Spacing"
              defaultValue={verticalSpacing}
              onChange={(event) => {
                setVerticalSpacing(event.target.value);
              }}
            />
          </Stack>
        </ConfiguratorControls>
      </Configurator>
      <Prism
        language="jsx"
        code={`import { SimpleGrid } from '@openlooks/react';

function Demo() {
  return (
    <SimpleGrid c="cols-${cols} spacing-${spacing} verticalSpacing-${verticalSpacing}">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </SimpleGrid>
  )
}`}
      />
    </DocPage>
  );
}
