import { useStore } from '@builder.io/mitosis';
import Autocomplete from '../../components/Autocomplete.lite';
import { Size } from '../../components/BaseComponentProps';
import Configurator from '../../components/Configurator.lite';
import ConfiguratorControls from '../../components/ConfiguratorControls.lite';
import ConfiguratorStage from '../../components/ConfiguratorStage.lite';
import Container from '../../components/Container.lite';
import Paper from '../../components/Paper.lite';
import Stack from '../../components/Stack.lite';
import TextInput from '../../components/TextInput.lite';
import Title from '../../components/Title.lite';
import DocPage from '../components/DocPage.lite';
import Prism from '../components/Prism.lite';
import SizeInput from '../components/SizeInput.lite';

export default function AutocompletePage() {
  const state = useStore({
    placeholder: 'Pick one',
    label: 'Your favorite framework/library',
    description: '',
    error: '',
    radius: 'sm' as Size,
    size: 'sm' as Size,
  });

  return (
    <DocPage title="Autocomplete" description="Autocomplete user input with any list of options">
      <Title order={2}>Usage</Title>
      <Paper p="xl" withBorder>
        <Container size="xs">
          <Autocomplete
            id="usageExample"
            data={['React', 'Angular', 'Svelte', 'Vue']}
            placeholder="Pick one"
            label="Your favorite framework/library"
          />
        </Container>
      </Paper>
      <Prism language="jsx">{`import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <Autocomplete
      label="Your favorite framework/library"
      placeholder="Pick one"
      data={['React', 'Angular', 'Svelte', 'Vue']}
    />
  );
}`}</Prism>
      <Title order={2} mt="xl">
        Input props
      </Title>
      <Configurator>
        <ConfiguratorStage>
          <Autocomplete
            id="configuratorExample"
            data={['React', 'Angular', 'Svelte', 'Vue']}
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
