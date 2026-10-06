import React from "react";
import type { Color, Size } from '../../components/BaseComponentProps';
import ColorPicker from "../../components/ColorPicker";
import Configurator from "../../components/Configurator";
import ConfiguratorControls from "../../components/ConfiguratorControls";
import ConfiguratorStage from "../../components/ConfiguratorStage";
import Loader from "../../components/Loader";
import Stack from "../../components/Stack";
import Title from "../../components/Title";
import DocPage from "../components/DocPage";
import Prism from "../components/Prism";
import SizeInput from "../components/SizeInput";
export default function LoaderPage() {
    const [color, setColor] = React.useState('blue' as Color);
    const [size, setSize] = React.useState('md' as Size);
    return (<DocPage title="Loader" description="Indicate loading state">
      <Title order={2}>Usage</Title>
      <Configurator>
        <ConfiguratorStage>
          <Loader c={`size-${size} color-${color}`}/>
        </ConfiguratorStage>
        <ConfiguratorControls>
          <Stack>
            <ColorPicker id="color" name="color" label="Color" defaultValue={color} onChange={(event) => {
            setColor(event.target.value);
        }}/>
            <SizeInput id="size" label="Size" defaultValue={size as Size} onChange={(event) => {
            setSize(event.target.value);
        }}/>
          </Stack>
        </ConfiguratorControls>
      </Configurator>
      <Prism language="jsx" code={`import { Loader } from '@openlooks/react';

function Demo() {
  return (
    <Loader c="size-${size} color-${color}" />
  );
}`}/>
    </DocPage>);
}
