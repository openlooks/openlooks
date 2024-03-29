import { useStore } from '@builder.io/mitosis';
import type { Size } from '../../components/BaseComponentProps';
import Button from '../../components/Button.lite';
import Configurator from '../../components/Configurator.lite';
import ConfiguratorControls from '../../components/ConfiguratorControls.lite';
import ConfiguratorStage from '../../components/ConfiguratorStage.lite';
import Flex from '../../components/Flex.lite';
import NativeSelect from '../../components/NativeSelect.lite';
import Stack from '../../components/Stack.lite';
import Title from '../../components/Title.lite';
import DocPage from '../components/DocPage.lite';
import Prism from '../components/Prism.lite';
import SizeInput from '../components/SizeInput.lite';

export default function FlexPage() {
  const state = useStore({
    gap: 'md' as Size,
    justify: 'flex-start' as 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around',
    align: 'flex-start' as 'stretch' | 'center' | 'flex-start' | 'flex-end',
    direction: 'row' as 'row' | 'column' | 'row-reverse' | 'column-reverse',
    wrap: 'wrap' as 'wrap' | 'nowrap' | 'wrap-reverse',
  });

  return (
    <DocPage title="Flex" description="Compose elements in a flex container">
      <Title order={2}>Usage</Title>
      <Configurator>
        <ConfiguratorStage>
          <Flex
            c={`gap-${state.gap} justify-${state.justify} align-${state.align} direction-${state.direction} wrap-${state.wrap}`}
            sx={{ background: 'var(--oc-gray-2)', height: '150px', width: '100%' }}
          >
            <Button>Button 1</Button>
            <Button>Button 2</Button>
            <Button>Button 3</Button>
          </Flex>
        </ConfiguratorStage>
        <ConfiguratorControls>
          <Stack>
            <SizeInput
              id="gap"
              label="Gap"
              defaultValue={state.gap as Size}
              onChange={(event) => {
                state.gap = event.target.value;
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
              id="direction"
              label="Direction"
              data={['row', 'column', 'row-reverse', 'column-reverse']}
              defaultValue={state.direction}
              onChange={(event) => {
                state.direction = event.target.value;
              }}
            />
            <NativeSelect
              id="wrap"
              label="Wrap"
              data={['wrap', 'nowrap', 'wrap-reverse']}
              defaultValue={state.wrap}
              onChange={(event) => {
                state.wrap = event.target.value;
              }}
            />
          </Stack>
        </ConfiguratorControls>
      </Configurator>
      <Prism
        language="jsx"
        code={`import { Flex, Button } from '@openlooks/react';

function Demo() {
  return (
    <Flex c="gap-${state.gap} justify-${state.justify} align-${state.align} direction-${state.direction} wrap-${state.wrap}">
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </Flex>
  );
}`}
      />
    </DocPage>
  );
}
