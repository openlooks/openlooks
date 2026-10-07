import React from "react";
import { Alert } from "@openlooks/react";
import type { Color, Size } from "@openlooks/react";
import { ColorPicker } from "@openlooks/react";
import { Configurator } from "@openlooks/react";
import { ConfiguratorControls } from "@openlooks/react";
import { ConfiguratorStage } from "@openlooks/react";
import { NativeSelect } from "@openlooks/react";
import { Stack } from "@openlooks/react";
import { TextInput } from "@openlooks/react";
import { Title } from "@openlooks/react";
import { IconAlertCircle } from "@openlooks/react";
import { DocPage } from "../components/DocPage";
import { Prism } from "../components/Prism";
export function AlertPage() {
  const [title, setTitle] = React.useState("Bummer!");
  const [message, setMessage] = React.useState(
    "Something terrible happened! You made a mistake and there is no going back, your data was lost forever!",
  );
  const [color, setColor] = React.useState("blue" as Color);
  const [radius, setRadius] = React.useState("sm" as Size);
  const [variant, setVariant] = React.useState(
    "filled" as "light" | "filled" | "outline",
  );
  return (
    <DocPage
      title="Alert"
      description="Attract user attention with important static message"
    >
      <Title order={2}>Usage</Title>
      <Configurator>
        <ConfiguratorStage>
          <Alert
            slotIcon={<IconAlertCircle size="1rem" />}
            title={title}
            c={`color-${color} radius-${radius} variant-${variant}`}
          >
            {message}
          </Alert>
        </ConfiguratorStage>
        <ConfiguratorControls>
          <Stack>
            <TextInput
              id="title"
              label="Title"
              defaultValue={title}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
            <TextInput
              id="message"
              label="Message"
              defaultValue={message}
              onChange={(event) => {
                setMessage(event.target.value);
              }}
            />
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
              defaultValue={radius}
              onChange={(event) => {
                setRadius(event.target.value);
              }}
            />
            <NativeSelect
              id="variant"
              label="Variant"
              data={["light", "filled", "outline"]}
              defaultValue={variant}
              onChange={(event) => {
                setVariant(event.target.value);
              }}
            />
          </Stack>
        </ConfiguratorControls>
      </Configurator>
    </DocPage>
  );
}
