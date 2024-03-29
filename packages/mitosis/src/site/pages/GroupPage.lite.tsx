import { useStore } from '@builder.io/mitosis';
import type { Size } from '../../components/BaseComponentProps';
import Button from '../../components/Button.lite';
import Configurator from '../../components/Configurator.lite';
import ConfiguratorControls from '../../components/ConfiguratorControls.lite';
import ConfiguratorStage from '../../components/ConfiguratorStage.lite';
import Group from '../../components/Group.lite';
import NativeSelect from '../../components/NativeSelect.lite';
import Stack from '../../components/Stack.lite';
import Title from '../../components/Title.lite';
import DocPage from '../components/DocPage.lite';
import Prism from '../components/Prism.lite';
import SizeInput from '../components/SizeInput.lite';
import Switch from '../../components/Switch.lite';

export default function GroupPage() {
  const state = useStore({
    position: 'left' as 'left' | 'center' | 'right' | 'apart',
    spacing: 'md' as Size,
    grow: false,
  });

  return (
    <DocPage title="Group" description="Compose elements and components in a horizontal flex container">
      <Title order={2}>Usage</Title>
      <Configurator>
        <ConfiguratorStage>
          <div style={{ flex: '1', width: '100%' }}>
            <Group c={`position-${state.position} spacing-${state.spacing}${state.grow ? ' grow' : ''}`}>
              <Button c="variant-outline">1</Button>
              <Button c="variant-outline">2</Button>
              <Button c="variant-outline">3</Button>
            </Group>
          </div>
        </ConfiguratorStage>
        <ConfiguratorControls>
          <Stack>
            <NativeSelect
              id="position"
              label="Position"
              data={['left', 'center', 'right', 'apart']}
              defaultValue={state.position}
              onChange={(event) => {
                state.position = event.target.value;
              }}
            />
            <SizeInput
              id="spacing"
              label="Spacing"
              defaultValue={state.spacing as Size}
              onChange={(event) => {
                state.spacing = event.target.value;
              }}
            />
            <Switch
              id="grow"
              label="Grow"
              c="radius-xl"
              onChange={(event) => {
                state.grow = (event.target as HTMLInputElement).checked;
              }}
            />
          </Stack>
        </ConfiguratorControls>
      </Configurator>
      <Prism
        language="jsx"
        code={`import { Group, Button } from '@openlooks/react';

function Demo() {
  return (
    <Group c="position-${state.position} spacing-${state.spacing}${state.grow ? ' grow' : ''}">
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
    </Group>
  );
}`}
      />
    </DocPage>
  );
}
