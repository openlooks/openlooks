import { useStore } from '@builder.io/mitosis';
import { Color, Size } from '../../components/BaseComponentProps';
import ColorPicker from '../../components/ColorPicker.lite';
import Configurator from '../../components/Configurator.lite';
import ConfiguratorControls from '../../components/ConfiguratorControls.lite';
import ConfiguratorStage from '../../components/ConfiguratorStage.lite';
import Container from '../../components/Container.lite';
import NativeSelect from '../../components/NativeSelect.lite';
import Stack from '../../components/Stack.lite';
import Tab from '../../components/Tab.lite';
import TabList from '../../components/TabList.lite';
import TabPanel from '../../components/TabPanel.lite';
import Tabs from '../../components/Tabs.lite';
import Title from '../../components/Title.lite';
import DocHeader from '../components/DocHeader.lite';

export interface TabsConfiguratorProps {
  variant: 'filled' | 'light' | 'outline' | 'subtle';
  color: Color;
  radius: Size;
  size: Size;
  text: string;
}

export default function TabsPage() {
  const state = useStore<TabsConfiguratorProps>({
    variant: 'filled',
    color: 'blue',
    radius: 'sm',
    size: 'sm',
    text: 'Settings',
  });

  return (
    <>
      <DocHeader title="Tabs" description="Switch between different views" />
      <Container size="sm">
        <Title order={2}>Usage</Title>
        <Configurator>
          <ConfiguratorStage>
            <div>
              <Tabs defaultValue="gallery">
                <TabList>
                  <Tab value="gallery">Gallery</Tab>
                  <Tab value="messages">Messages</Tab>
                  <Tab value="settings">Settings</Tab>
                </TabList>
                <TabPanel value="gallery" pt="xs">
                  Gallery tab content
                </TabPanel>
                <TabPanel value="messages" pt="xs">
                  Messages tab content
                </TabPanel>
                <TabPanel value="settings" pt="xs">
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
                defaultValue={state.color}
                onChange={(event) => {
                  state.color = event.target.value;
                }}
              />
              <NativeSelect
                id="variant"
                label="Variant"
                data={['filled', 'light', 'outline', 'subtle']}
                defaultValue={state.variant}
                onChange={(event) => {
                  state.variant = event.target.value;
                }}
              />
              <NativeSelect
                id="radius"
                label="Radius"
                data={['xs', 'sm', 'md', 'lg', 'xl']}
                defaultValue={state.radius}
                onChange={(event) => {
                  state.radius = event.target.value;
                }}
              />
            </Stack>
          </ConfiguratorControls>
        </Configurator>
      </Container>
    </>
  );
}
