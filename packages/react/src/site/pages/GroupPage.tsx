import React from "react";
import type { Size } from '../../components/BaseComponentProps';
import Button from "../../components/Button";
import Configurator from "../../components/Configurator";
import ConfiguratorControls from "../../components/ConfiguratorControls";
import ConfiguratorStage from "../../components/ConfiguratorStage";
import Group from "../../components/Group";
import NativeSelect from "../../components/NativeSelect";
import Stack from "../../components/Stack";
import Title from "../../components/Title";
import DocPage from "../components/DocPage";
import Prism from "../components/Prism";
import SizeInput from "../components/SizeInput";
import Switch from "../../components/Switch";
export default function GroupPage() {
    const [position, setPosition] = React.useState('left' as 'left' | 'center' | 'right' | 'apart');
    const [spacing, setSpacing] = React.useState('md' as Size);
    const [grow, setGrow] = React.useState(false);
    return (<DocPage title="Group" description="Compose elements and components in a horizontal flex container">
      <Title order={2}>Usage</Title>
      <Configurator>
        <ConfiguratorStage>
          <div style={{ flex: '1', width: '100%' }}>
            <Group c={`position-${position} spacing-${spacing}${grow ? ' grow' : ''}`}>
              <Button c="variant-outline">1</Button>
              <Button c="variant-outline">2</Button>
              <Button c="variant-outline">3</Button>
            </Group>
          </div>
        </ConfiguratorStage>
        <ConfiguratorControls>
          <Stack>
            <NativeSelect id="position" label="Position" data={['left', 'center', 'right', 'apart']} defaultValue={position} onChange={(event) => {
            setPosition(event.target.value);
        }}/>
            <SizeInput id="spacing" label="Spacing" defaultValue={spacing as Size} onChange={(event) => {
            setSpacing(event.target.value);
        }}/>
            <Switch id="grow" label="Grow" c="radius-xl" onChange={(event) => {
            setGrow((event.target as HTMLInputElement).checked);
        }}/>
          </Stack>
        </ConfiguratorControls>
      </Configurator>
      <Prism language="jsx" code={`import { Group, Button } from '@openlooks/react';

function Demo() {
  return (
    <Group c="position-${position} spacing-${spacing}${grow ? ' grow' : ''}">
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
    </Group>
  );
}`}/>
    </DocPage>);
}
