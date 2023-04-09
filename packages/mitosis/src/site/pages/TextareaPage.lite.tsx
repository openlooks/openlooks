import { useStore } from '@builder.io/mitosis';
import { Size } from '../../components/BaseComponentProps';
import Configurator from '../../components/Configurator.lite';
import ConfiguratorControls from '../../components/ConfiguratorControls.lite';
import ConfiguratorStage from '../../components/ConfiguratorStage.lite';
import Stack from '../../components/Stack.lite';
import TextInput from '../../components/TextInput.lite';
import Textarea from '../../components/Textarea.lite';
import Title from '../../components/Title.lite';
import DocPage from '../components/DocPage.lite';
import Prism from '../components/Prism.lite';
import SizeInput from '../components/SizeInput.lite';

export default function TextareaPage() {
  const state = useStore({
    placeholder: 'Your comment',
    label: 'Your comment',
    description: '',
    error: '',
    radius: 'sm' as Size,
    size: 'sm' as Size,
  });

  return (
    <DocPage title="Textarea" description="Renders textarea with optional autosize variant">
      <Title order={2}>Usage</Title>
      <Configurator>
        <ConfiguratorStage>
          <Textarea
            id="textarea"
            sx={{ 'min-height': '2rem' }}
            placeholder={state.placeholder}
            label={state.label}
            description={state.description}
            error={state.error}
            c={`radius-${state.radius} size-${state.size}`}
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
      <Prism
        language="jsx"
        code={`import { TextInput } from '@openlooks/react';

function Demo() {
  return (
    <Textarea
      placeholder="${state.placeholder}"
      label="${state.label}"
      description="${state.description}"
      error="${state.error}"
      c="radius-${state.radius} size-${state.size}"
    />
  );
}`}
      />
    </DocPage>
  );
}
