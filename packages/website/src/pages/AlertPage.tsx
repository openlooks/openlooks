import type { Color, Size } from "@openlooks/react";
import {
  Alert,
  ColorPicker,
  Configurator,
  ConfiguratorControls,
  ConfiguratorStage,
  IconAlertCircle,
  NativeSelect,
  Stack,
  TextInput,
  Title,
} from "@openlooks/react";
import { JSX, useState } from "react";
import { DocPage } from "../components/DocPage";
import { SizeInput } from "../components/SizeInput";

export function AlertPage(): JSX.Element {
  const [title, setTitle] = useState("Bummer!");
  const [message, setMessage] = useState(
    "Something terrible happened! You made a mistake and there is no going back, your data was lost forever!",
  );
  const [color, setColor] = useState("blue" as Color);
  const [radius, setRadius] = useState("sm" as Size);
  const [variant, setVariant] = useState(
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
