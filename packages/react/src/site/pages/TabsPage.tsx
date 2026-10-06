import React from "react";
import type { Color, Size } from '../../components/BaseComponentProps';
import ColorPicker from "../../components/ColorPicker";
import Configurator from "../../components/Configurator";
import ConfiguratorControls from "../../components/ConfiguratorControls";
import ConfiguratorStage from "../../components/ConfiguratorStage";
import NativeSelect from "../../components/NativeSelect";
import Stack from "../../components/Stack";
import Tab from "../../components/Tab";
import TabIcon from "../../components/TabIcon";
import TabLabel from "../../components/TabLabel";
import TabList from "../../components/TabList";
import TabPanel from "../../components/TabPanel";
import Tabs from "../../components/Tabs";
import Title from "../../components/Title";
import IconMessageCircle from "../../icons/IconMessageCircle";
import IconPhoto from "../../icons/IconPhoto";
import IconSettings from "../../icons/IconSettings";
import DocPage from "../components/DocPage";
import SizeInput from "../components/SizeInput";
export default function TabsPage() {
    const [variant, setVariant] = React.useState('filled' as 'filled' | 'light' | 'outline' | 'subtle');
    const [color, setColor] = React.useState('blue' as Color);
    const [radius, setRadius] = React.useState('sm' as Size);
    return (<DocPage title="Tabs" description="Switch between different views">
      <Title order={2}>Usage</Title>
      <Configurator>
        <ConfiguratorStage>
          <div>
            <Tabs defaultValue="gallery">
              <TabList c={`color-${color}`}>
                <Tab value="gallery">
                  <TabIcon>
                    <IconPhoto size="0.8rem"/>
                  </TabIcon>
                  <TabLabel>Gallery</TabLabel>
                </Tab>
                <Tab value="messages">
                  <TabIcon>
                    <IconMessageCircle size="0.8rem"/>
                  </TabIcon>
                  <TabLabel>Messages</TabLabel>
                </Tab>
                <Tab value="settings">
                  <TabIcon>
                    <IconSettings size="0.8rem"/>
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
            <ColorPicker id="color" name="color" label="Color" defaultValue={color} onChange={(event) => {
            setColor(event.target.value);
        }}/>
            <NativeSelect id="variant" label="Variant" data={['filled', 'light', 'outline', 'subtle']} defaultValue={variant} onChange={(event) => {
            setVariant(event.target.value);
        }}/>
            <SizeInput id="radius" label="Radius" defaultValue={radius as Size} onChange={(event) => {
            setRadius(event.target.value);
        }}/>
          </Stack>
        </ConfiguratorControls>
      </Configurator>
    </DocPage>);
}
