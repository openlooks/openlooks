import { useStore } from '@builder.io/mitosis';
import { Size } from '../../components/BaseComponentProps';
import Button from '../../components/Button.lite';
import Configurator from '../../components/Configurator.lite';
import ConfiguratorControls from '../../components/ConfiguratorControls.lite';
import ConfiguratorStage from '../../components/ConfiguratorStage.lite';
import NativeSelect from '../../components/NativeSelect.lite';
import Stack from '../../components/Stack.lite';
import Title from '../../components/Title.lite';
import DocPage from '../components/DocPage.lite';
import SizeInput from '../components/SizeInput.lite';

export interface StackConfiguratorProps {
  align?: 'stretch' | 'center' | 'flex-start' | 'flex-end';
  justify?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around';
  spacing?: Size;
}

export default function StackPage() {
  const state = useStore<StackConfiguratorProps>({
    align: 'stretch',
    justify: 'center',
    spacing: 'md',
  });

  return (
    <DocPage title="Stack" description="Compose elements and components in vertical flex container">
      <Title order={2}>Usage</Title>
      <Configurator>
        <ConfiguratorStage>
          <Stack
            align={state.align}
            justify={state.justify}
            spacing={state.spacing}
            sx={{ 'background-color': 'var(--oc-gray-0)', height: '300px', width: '100%' }}
          >
            <Button size="sm" variant="outline" color="blue" radius="sm">
              1
            </Button>
            <Button size="sm" variant="outline" color="blue" radius="sm">
              2
            </Button>
            <Button size="sm" variant="outline" color="blue" radius="sm">
              3
            </Button>
          </Stack>
        </ConfiguratorStage>
        <ConfiguratorControls>
          <Stack>
            <NativeSelect
              id="align"
              label="Align"
              data={['stretch', 'center', 'flex-start', 'flex-end']}
              defaultValue={state.align}
              onChange={(event) => {
                state.align = event.target.value;
              }}
            />
            <NativeSelect
              id="justify"
              label="Justify"
              data={['center', 'flex-start', 'flex-end', 'space-between', 'space-around']}
              defaultValue={state.justify}
              onChange={(event) => {
                state.justify = event.target.value;
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
    </DocPage>
  );
}
