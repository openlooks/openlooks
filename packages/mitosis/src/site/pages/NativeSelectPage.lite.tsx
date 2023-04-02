import { useStore } from '@builder.io/mitosis';
import { Size } from '../../components/BaseComponentProps';
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

export default function NativeSelectPage() {
  const state = useStore({
    label: 'Select your favorite framework/library',
    description: 'This is anonymous',
    error: '',
    radius: 'sm' as Size,
    size: 'sm' as Size,
  });

  return (
    <DocPage title="NativeSelect" description="Capture user feedback limited to large set of options">
      <Title order={2}>Usage</Title>
      <Configurator>
        <ConfiguratorStage>
          <NativeSelect
            id="textinput"
            data={['React', 'Vue', 'Angular', 'Svelte']}
            label={state.label}
            description={state.description}
            error={state.error}
            radius={state.radius}
            size={state.size}
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
          </Stack>
        </ConfiguratorControls>
      </Configurator>
      <Prism language="jsx">
        {`import { NativeSelect } from '@openlooks/react';

function Demo() {
  return (
    <NativeSelect
      data={['React', 'Vue', 'Angular', 'Svelte']}
      label="${state.label}"
      description="${state.description}"
      error="${state.error}"
      radius="${state.radius}"
      size="${state.size}"
    />
  );
}`}
      </Prism>
    </DocPage>
  );
}
