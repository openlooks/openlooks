import React from "react";
import ActionIcon from "../../components/ActionIcon";
import type { Color, Size } from '../../components/BaseComponentProps';
import ColorPicker from "../../components/ColorPicker";
import Configurator from "../../components/Configurator";
import ConfiguratorControls from "../../components/ConfiguratorControls";
import ConfiguratorStage from "../../components/ConfiguratorStage";
import NativeSelect from "../../components/NativeSelect";
import Stack from "../../components/Stack";
import Title from "../../components/Title";
import IconAdjustments from "../../icons/IconAdjustments";
import DocPage from "../components/DocPage";
import Prism from "../components/Prism";
import SizeInput from "../components/SizeInput";
export default function ActionIconPage() {
    const [color, setColor] = React.useState('gray' as Color);
    const [size, setSize] = React.useState('md' as Size);
    const [radius, setRadius] = React.useState('sm' as Size);
    const [variant, setVariant] = React.useState('subtle' as 'filled' | 'light' | 'outline' | 'subtle');
    return (<DocPage title="ActionIcon" description="Icon button">
      <Title order={2}>Usage</Title>
      <Configurator>
        <ConfiguratorStage>
          <ActionIcon c={`variant-${variant} color-${color} radius-${radius} size-${size}`}>
            <IconAdjustments size={({
            xs: '0.75rem',
            sm: '0.875rem',
            md: '1.125rem',
            lg: '1.625rem',
            xl: '2.125rem',
        } as Record<Size, string>)[size as Size]}/>
          </ActionIcon>
        </ConfiguratorStage>
        <ConfiguratorControls>
          <Stack>
            <ColorPicker id="color" name="color" label="Color" defaultValue={color} onChange={(event) => {
            setColor(event.target.value);
        }}/>
            <SizeInput id="size" label="Size" defaultValue={size as Size} onChange={(event) => {
            setSize(event.target.value);
        }}/>
            <SizeInput id="radius" label="Radius" defaultValue={radius as Size} onChange={(event) => {
            setRadius(event.target.value);
        }}/>
            <NativeSelect id="variant" label="Variant" data={['filled', 'light', 'outline', 'subtle']} defaultValue={variant} onChange={(event) => {
            setVariant(event.target.value);
        }}/>
          </Stack>
        </ConfiguratorControls>
      </Configurator>
      <Prism language="jsx" code={`import { ActionIcon } from '@openlooks/react';
import { IconAdjustments } from '@tabler/icons-react';

function Demo() {
  return (
    <ActionIcon c="variant-${variant} color-${color} radius-${radius} size-${size}">
      <IconAdjustments size="1.625rem" />
    </ActionIcon>
  );
}`}/>
    </DocPage>);
}
