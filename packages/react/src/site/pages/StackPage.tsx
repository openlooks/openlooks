import React from "react";
import type { Size } from '../../components/BaseComponentProps';
import Button from "../../components/Button";
import Configurator from "../../components/Configurator";
import ConfiguratorControls from "../../components/ConfiguratorControls";
import ConfiguratorStage from "../../components/ConfiguratorStage";
import NativeSelect from "../../components/NativeSelect";
import Stack from "../../components/Stack";
import Title from "../../components/Title";
import DocPage from "../components/DocPage";
import Prism from "../components/Prism";
import SizeInput from "../components/SizeInput";
export default function StackPage() {
    const [align, setAlign] = React.useState('stretch' as 'stretch' | 'center' | 'flex-start' | 'flex-end');
    const [justify, setJustify] = React.useState('center' as 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around');
    const [spacing, setSpacing] = React.useState('md' as Size);
    return (<DocPage title="Stack" description="Compose elements and components in vertical flex container">
      <Title order={2}>Usage</Title>
      <Configurator>
        <ConfiguratorStage>
          <Stack c={`align-${align} justify-${justify} spacing-${spacing}`} sx={{ 'background-color': 'var(--oc-gray-0)', height: '300px', width: '100%' }}>
            <Button c="variant-outline">1</Button>
            <Button c="variant-outline">2</Button>
            <Button c="variant-outline">3</Button>
          </Stack>
        </ConfiguratorStage>
        <ConfiguratorControls>
          <Stack>
            <NativeSelect id="align" label="Align" data={['stretch', 'center', 'flex-start', 'flex-end']} defaultValue={align} onChange={(event) => {
            setAlign(event.target.value);
        }}/>
            <NativeSelect id="justify" label="Justify" data={['center', 'flex-start', 'flex-end', 'space-between', 'space-around']} defaultValue={justify} onChange={(event) => {
            setJustify(event.target.value);
        }}/>
            <SizeInput id="spacing" label="Spacing" defaultValue={spacing as Size} onChange={(event) => {
            setSpacing(event.target.value);
        }}/>
          </Stack>
        </ConfiguratorControls>
      </Configurator>
      <Prism language="jsx" code={`import { Stack, Button } from '@openlooks/react';

function Demo() {
  return (
    <Stack c="align-${align} justify-${justify} spacing-${spacing}">
      <Button c="variant-outline">1</Button>
      <Button c="variant-outline">2</Button>
      <Button c="variant-outline">3</Button>
    </Stack>
  );
}`}/>
    </DocPage>);
}
