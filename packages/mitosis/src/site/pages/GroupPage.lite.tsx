import { useStore } from '@builder.io/mitosis';
import { Size } from '../../components/BaseComponentProps';
import Button from '../../components/Button.lite';
import Configurator from '../../components/Configurator.lite';
import ConfiguratorControls from '../../components/ConfiguratorControls.lite';
import ConfiguratorStage from '../../components/ConfiguratorStage.lite';
import Container from '../../components/Container.lite';
import Group from '../../components/Group.lite';
import NativeSelect from '../../components/NativeSelect.lite';
import Stack from '../../components/Stack.lite';
import Title from '../../components/Title.lite';
import DocHeader from '../components/DocHeader.lite';

export interface GroupConfiguratorProps {
  position?: 'left' | 'center' | 'right' | 'apart';
  spacing?: Size;
}

export default function GroupPage() {
  const state = useStore<GroupConfiguratorProps>({
    position: 'left',
    spacing: 'md',
  });

  return (
    <>
      <DocHeader title="Group" description="Compose elements and components in a horizontal flex container" />
      <Container size="sm">
        <Title order={2}>Usage</Title>
        <Configurator>
          <ConfiguratorStage>
            <Group position={state.position} spacing={state.spacing}>
              <Button size="sm" variant="outline" color="blue" radius="sm">
                1
              </Button>
              <Button size="sm" variant="outline" color="blue" radius="sm">
                2
              </Button>
              <Button size="sm" variant="outline" color="blue" radius="sm">
                3
              </Button>
            </Group>
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
              <NativeSelect
                id="spacing"
                label="Spacing"
                data={['xs', 'sm', 'md', 'lg', 'xl']}
                defaultValue={state.spacing}
                onChange={(event) => {
                  state.spacing = event.target.value;
                }}
              />
            </Stack>
          </ConfiguratorControls>
        </Configurator>
      </Container>
    </>
  );
}
