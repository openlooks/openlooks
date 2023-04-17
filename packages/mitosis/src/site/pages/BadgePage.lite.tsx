import { useStore } from '@builder.io/mitosis';
import Badge from '../../components/Badge.lite';
import type { Color, Size } from '../../components/BaseComponentProps';
import ColorPicker from '../../components/ColorPicker.lite';
import Configurator from '../../components/Configurator.lite';
import ConfiguratorControls from '../../components/ConfiguratorControls.lite';
import ConfiguratorStage from '../../components/ConfiguratorStage.lite';
import NativeSelect from '../../components/NativeSelect.lite';
import Stack from '../../components/Stack.lite';
import TextInput from '../../components/TextInput.lite';
import Title from '../../components/Title.lite';
import DocPage from '../components/DocPage.lite';
import Prism from '../components/Prism.lite';
import SizeInput from '../components/SizeInput.lite';

export default function BadgePage() {
  const state = useStore({
    color: 'blue' as Color,
    size: 'md' as Size,
    radius: 'xl' as Size,
    variant: 'filled' as 'filled' | 'light' | 'outline',
    text: 'Badge',
  });

  return (
    <DocPage title="Badge" description="Display badge, pill or tag">
      <Title order={2}>Usage</Title>
      <Configurator>
        <ConfiguratorStage>
          <Badge c={`variant-${state.variant} color-${state.color} radius-${state.radius} size-${state.size}`}>
            {state.text}
          </Badge>
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
            <SizeInput
              id="size"
              label="Size"
              defaultValue={state.size}
              onChange={(event) => {
                state.size = event.target.value;
              }}
            />
            <SizeInput
              id="radius"
              label="Radius"
              defaultValue={state.radius}
              onChange={(event) => {
                state.radius = event.target.value;
              }}
            />
            <NativeSelect
              id="variant"
              label="Variant"
              data={['filled', 'light', 'outline']}
              defaultValue={state.variant}
              onChange={(event) => {
                state.variant = event.target.value;
              }}
            />
            <TextInput
              id="text"
              label="Text"
              defaultValue={state.text}
              onChange={(event) => {
                state.text = event.target.value;
              }}
            />
          </Stack>
        </ConfiguratorControls>
      </Configurator>
      <Prism
        language="jsx"
        code={`import { Badge } from '@openlooks/react';

function Demo() {
  return (
    <Badge c="variant-${state.variant} color-${state.color} radius-${state.radius} size-${state.size}">${state.text}</Badge>
  );
}`}
      />
    </DocPage>
  );
}
