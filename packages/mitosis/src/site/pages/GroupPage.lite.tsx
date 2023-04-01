import { useStore } from '@builder.io/mitosis';
import { Size } from '../../components/BaseComponentProps';
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

export default function GroupPage() {
  const state = useStore({
    position: 'left' as 'left' | 'center' | 'right' | 'apart',
    spacing: 'md' as Size,
  });

  return (
    <DocPage title="Group" description="Compose elements and components in a horizontal flex container">
      <Title order={2}>Usage</Title>
      <Configurator>
        <ConfiguratorStage>
          <div style={{ width: '100%' }}>
            <Group position={state.position} spacing={state.spacing}>
              <Button variant="outline">1</Button>
              <Button variant="outline">2</Button>
              <Button variant="outline">3</Button>
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
          </Stack>
        </ConfiguratorControls>
      </Configurator>
      <Prism language="jsx">
        {`import { Group, Button } from '@openlooks/react';

function Demo() {
  return (
    <Group position="${state.position}" spacing="${state.spacing}">
      <Button variant="outline">1</Button>
      <Button variant="outline">2</Button>
      <Button variant="outline">3</Button>
    </Group>
  );
}`}
      </Prism>
    </DocPage>
  );
}
