import { useStore } from '@builder.io/mitosis';
import type { Color, Size } from '../../components/BaseComponentProps';
import Checkbox from '../../components/Checkbox.lite';
import ColorPicker from '../../components/ColorPicker.lite';
import Configurator from '../../components/Configurator.lite';
import ConfiguratorControls from '../../components/ConfiguratorControls.lite';
import ConfiguratorStage from '../../components/ConfiguratorStage.lite';
import Stack from '../../components/Stack.lite';
import TextInput from '../../components/TextInput.lite';
import Title from '../../components/Title.lite';
import DocPage from '../components/DocPage.lite';
import Prism from '../components/Prism.lite';
import SizeInput from '../components/SizeInput.lite';

export default function CheckboxPage() {
  const state = useStore({
    label: 'I agree to sell my privacy',
    description: '',
    error: '',
    size: 'sm' as Size,
    radius: 'sm' as Size,
    color: 'blue' as Color,
  });

  return (
    <DocPage title="Checkbox" description="Capture boolean input from user">
      <Title order={2}>Usage</Title>
      <Configurator>
        <ConfiguratorStage>
          <Checkbox
            id="checkbox"
            label={state.label}
            description={state.description}
            error={state.error}
            defaultChecked={true}
            c={`radius-${state.radius} size-${state.size} color-${state.color}`}
          />
        </ConfiguratorStage>
        <ConfiguratorControls>
          <Stack>
            <TextInput
              id="label"
              label="Label"
              placeholder="Label"
              defaultValue={state.label}
              onChange={(event) => {
                state.label = event.target.value;
              }}
            />
            <TextInput
              id="description"
              label="Description"
              placeholder="Description"
              defaultValue={state.description}
              onChange={(event) => {
                state.description = event.target.value;
              }}
            />
            <TextInput
              id="error"
              label="Error"
              placeholder="Error"
              defaultValue={state.error}
              onChange={(event) => {
                state.error = event.target.value;
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
            <ColorPicker
              id="color"
              name="color"
              label="Color"
              defaultValue={state.color}
              onChange={(event) => {
                state.color = event.target.value;
              }}
            />
          </Stack>
        </ConfiguratorControls>
      </Configurator>
      <Prism
        language="jsx"
        code={`import { Checkbox } from '@openlooks/react';

function Demo() {
  return (
    <Checkbox
      label="${state.label}"
      description="${state.description}"
      error="${state.error}"
      size="${state.size}"
      c="radius-${state.radius} size-${state.size} color-${state.color}"
    />
  );
}`}
      />
    </DocPage>
  );
}
