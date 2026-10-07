import React from "react";
import type { Color, Size } from "@openlooks/react";
import { ColorPicker } from "@openlooks/react";
import { Configurator } from "@openlooks/react";
import { ConfiguratorControls } from "@openlooks/react";
import { ConfiguratorStage } from "@openlooks/react";
import { NativeSelect } from "@openlooks/react";
import { Stack } from "@openlooks/react";
import { Tab } from "@openlooks/react";
import { TabIcon } from "@openlooks/react";
import { TabLabel } from "@openlooks/react";
import { TabList } from "@openlooks/react";
import { TabPanel } from "@openlooks/react";
import { Tabs } from "@openlooks/react";
import { Title } from "@openlooks/react";
import { IconMessageCircle } from "@openlooks/react";
import { IconPhoto } from "@openlooks/react";
import { IconSettings } from "@openlooks/react";
import { DocPage } from "../components/DocPage";
import { Prism } from "../components/Prism";
export function TabsPage() {
  const [variant, setVariant] = React.useState(
    "filled" as "filled" | "light" | "outline" | "subtle",
  );
  const [color, setColor] = React.useState("blue" as Color);
  const [radius, setRadius] = React.useState("sm" as Size);
  return (
    <DocPage title="Tabs" description="Switch between different views">
      <Title order={2}>Usage</Title>
      <Configurator>
        <ConfiguratorStage>
          <div>
            <Tabs defaultValue="gallery">
              <TabList c={`color-${color}`}>
                <Tab value="gallery">
                  <TabIcon>
                    <IconPhoto size="0.8rem" />
                  </TabIcon>
                  <TabLabel>Gallery</TabLabel>
                </Tab>
                <Tab value="messages">
                  <TabIcon>
                    <IconMessageCircle size="0.8rem" />
                  </TabIcon>
                  <TabLabel>Messages</TabLabel>
                </Tab>
                <Tab value="settings">
                  <TabIcon>
                    <IconSettings size="0.8rem" />
                  </TabIcon>
                  <TabLabel>Settings</TabLabel>
                </Tab>
              </TabList>
              <TabPanel value="gallery" c="pt-xs">
                Gallery tab content
              </TabPanel>
              <TabPanel value="messages" c="pt-xs">
                Messages tab content
              </TabPanel>
              <TabPanel value="settings" c="pt-xs">
                Settings tab content
              </TabPanel>
            </Tabs>
          </div>
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
            <NativeSelect
              id="variant"
              label="Variant"
              data={["filled", "light", "outline", "subtle"]}
              defaultValue={variant}
              onChange={(event) => {
                setVariant(event.target.value);
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
          </Stack>
        </ConfiguratorControls>
      </Configurator>
    </DocPage>
  );
}
