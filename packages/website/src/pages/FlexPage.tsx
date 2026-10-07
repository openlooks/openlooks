import type { Size } from "@openlooks/react";
import {
  Button,
  Configurator,
  ConfiguratorControls,
  ConfiguratorStage,
  Flex,
  NativeSelect,
  Stack,
  Title,
} from "@openlooks/react";
import type { JSX } from "react";
import { useState } from "react";
import { DocPage } from "../components/DocPage";
import { Prism } from "../components/Prism";
import { SizeInput } from "../components/SizeInput";

export function FlexPage(): JSX.Element {
  const [gap, setGap] = useState("md" as Size);
  const [justify, setJustify] = useState(
    "flex-start" as
      "center" | "flex-start" | "flex-end" | "space-between" | "space-around",
  );
  const [align, setAlign] = useState(
    "flex-start" as "stretch" | "center" | "flex-start" | "flex-end",
  );
  const [direction, setDirection] = useState(
    "row" as "row" | "column" | "row-reverse" | "column-reverse",
  );
  const [wrap, setWrap] = useState(
    "wrap" as "wrap" | "nowrap" | "wrap-reverse",
  );
  return (
    <DocPage title="Flex" description="Compose elements in a flex container">
      <Title order={2}>Usage</Title>
      <Configurator>
        <ConfiguratorStage>
          <Flex
            c={`gap-${gap} justify-${justify} align-${align} direction-${direction} wrap-${wrap}`}
            sx={{
              background: "var(--oc-gray-2)",
              height: "150px",
              width: "100%",
            }}
          >
            <Button>Button 1</Button>
            <Button>Button 2</Button>
            <Button>Button 3</Button>
          </Flex>
        </ConfiguratorStage>
        <ConfiguratorControls>
          <Stack>
            <SizeInput
              id="gap"
              label="Gap"
              defaultValue={gap as Size}
              onChange={(event) => {
                setGap(event.target.value);
              }}
            />
            <NativeSelect
              id="justify"
              label="Justify"
              data={[
                "center",
                "flex-start",
                "flex-end",
                "space-between",
                "space-around",
              ]}
              defaultValue={justify}
              onChange={(event) => {
                setJustify(event.target.value);
              }}
            />
            <NativeSelect
              id="align"
              label="Align"
              data={["stretch", "center", "flex-start", "flex-end"]}
              defaultValue={align}
              onChange={(event) => {
                setAlign(event.target.value);
              }}
            />
            <NativeSelect
              id="direction"
              label="Direction"
              data={["row", "column", "row-reverse", "column-reverse"]}
              defaultValue={direction}
              onChange={(event) => {
                setDirection(event.target.value);
              }}
            />
            <NativeSelect
              id="wrap"
              label="Wrap"
              data={["wrap", "nowrap", "wrap-reverse"]}
              defaultValue={wrap}
              onChange={(event) => {
                setWrap(event.target.value);
              }}
            />
          </Stack>
        </ConfiguratorControls>
      </Configurator>
      <Prism
        language="jsx"
        code={`import { Flex, Button } from '@openlooks/react';

function Demo() {
  return (
    <Flex c="gap-${gap} justify-${justify} align-${align} direction-${direction} wrap-${wrap}">
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </Flex>
  );
}`}
      />
    </DocPage>
  );
}
