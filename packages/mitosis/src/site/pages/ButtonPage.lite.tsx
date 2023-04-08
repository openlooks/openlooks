import { useStore } from '@builder.io/mitosis';
import { Color, Size } from '../../components/BaseComponentProps';
import Button from '../../components/Button.lite';
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

export default function ButtonPage() {
  const state = useStore({
    variant: 'filled' as 'filled' | 'light' | 'outline' | 'subtle',
    color: 'blue' as Color,
    radius: 'sm' as Size,
    size: 'sm' as Size,
    text: 'Settings',
  });

  return (
    <DocPage title="Button" description="Render button or link with button styles from mantine theme">
      <Title order={2}>Usage</Title>
      <Configurator>
        <ConfiguratorStage>
          <Button c={`variant-${state.variant} color-${state.color} radius-${state.radius} size-${state.size}`}>
            {state.text}
          </Button>
        </ConfiguratorStage>
        <ConfiguratorControls>
          <Stack>
            <NativeSelect
              id="variant"
              label="Variant"
              data={['filled', 'light', 'outline', 'subtle']}
              defaultValue={state.variant}
              onChange={(event) => {
                state.variant = event.target.value;
              }}
            />
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
              id="radius"
              label="Radius"
              defaultValue={state.radius}
              onChange={(event) => {
                state.radius = event.target.value;
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
      <Prism language="jsx">
        {`import { Button } from '@openlooks/react';

function Demo() {
  return (
    <Button variant="${state.variant}" color="${state.color}" radius="${state.radius}" size="${state.size}">
      ${state.text}
    </Button>
  );
}`}
      </Prism>
    </DocPage>
  );
}
