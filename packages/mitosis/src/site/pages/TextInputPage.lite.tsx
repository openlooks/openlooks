import { useStore } from '@builder.io/mitosis';
import { Size } from '../../components/BaseComponentProps';
import Configurator from '../../components/Configurator.lite';
import ConfiguratorControls from '../../components/ConfiguratorControls.lite';
import ConfiguratorStage from '../../components/ConfiguratorStage.lite';
import Stack from '../../components/Stack.lite';
import TextInput from '../../components/TextInput.lite';
import Title from '../../components/Title.lite';
import DocPage from '../components/DocPage.lite';
import Prism from '../components/Prism.lite';
import SizeInput from '../components/SizeInput.lite';

export interface TextInputConfiguratorProps {
  placeholder: string;
  label: string;
  description: string;
  error: string;
  radius: Size;
  size: Size;
}

export default function TextInputPage() {
  const state = useStore<TextInputConfiguratorProps>({
    placeholder: 'Your name',
    label: 'Full name',
    description: '',
    error: '',
    radius: 'sm',
    size: 'sm',
  });

  return (
    <DocPage title="TextInput" description="Capture string input from user">
      <Title order={2}>Usage</Title>
      <Configurator>
        <ConfiguratorStage>
          <TextInput
            id="textinput"
            placeholder={state.placeholder}
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
              id="placeholder"
              label="Placeholder"
              placeholder="Placeholder"
              defaultValue={state.placeholder}
              onChange={(event) => {
                state.placeholder = event.target.value;
              }}
            />
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
        {`import { TextInput } from '@openlooks/react';

function Demo() {
  return (
    <TextInput
      placeholder="${state.placeholder}"
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
