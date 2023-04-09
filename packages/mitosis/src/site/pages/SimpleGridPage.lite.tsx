import { useStore } from '@builder.io/mitosis';
import { Size } from '../../components/BaseComponentProps';
import Configurator from '../../components/Configurator.lite';
import ConfiguratorControls from '../../components/ConfiguratorControls.lite';
import ConfiguratorStage from '../../components/ConfiguratorStage.lite';
import NativeSelect from '../../components/NativeSelect.lite';
import SimpleGrid from '../../components/SimpleGrid.lite';
import Stack from '../../components/Stack.lite';
import Text from '../../components/Text.lite';
import Title from '../../components/Title.lite';
import DocPage from '../components/DocPage.lite';
import Prism from '../components/Prism.lite';
import SizeInput from '../components/SizeInput.lite';

export default function SimpleGridPage() {
  const state = useStore({
    cols: 3,
    spacing: 'md' as Size,
    verticalSpacing: 'md' as Size,
  });

  return (
    <DocPage title="SimpleGrid" description="Responsive grid where each item takes equal amount of space">
      <Title order={2}>Usage</Title>
      <Configurator>
        <ConfiguratorStage>
          <SimpleGrid
            c={`cols-${state.cols} spacing-${state.spacing} verticalSpacing-${state.verticalSpacing}`}
            sx={{ width: '100%' }}
          >
            <Text c="p-xl ta-center color-blue fw-700" sx={{ background: 'var(--oc-blue-0)' }}>
              1
            </Text>
            <Text c="p-xl ta-center color-blue fw-700" sx={{ background: 'var(--oc-blue-0)' }}>
              2
            </Text>
            <Text c="p-xl ta-center color-blue fw-700" sx={{ background: 'var(--oc-blue-0)' }}>
              3
            </Text>
            <Text c="p-xl ta-center color-blue fw-700" sx={{ background: 'var(--oc-blue-0)' }}>
              4
            </Text>
            <Text c="p-xl ta-center color-blue fw-700" sx={{ background: 'var(--oc-blue-0)' }}>
              5
            </Text>
          </SimpleGrid>
        </ConfiguratorStage>
        <ConfiguratorControls>
          <Stack>
            <NativeSelect
              id="cols"
              label="cols"
              data={['1', '2', '3', '4', '5', '6']}
              defaultValue={state.cols.toString()}
              onChange={(event) => {
                state.cols = parseInt(event.target.value);
              }}
            />
            <SizeInput
              id="spacing"
              label="Spacing"
              defaultValue={state.spacing}
              onChange={(event) => {
                state.spacing = event.target.value;
              }}
            />
            <SizeInput
              id="verticalSpacing"
              label="Vertical Spacing"
              defaultValue={state.verticalSpacing}
              onChange={(event) => {
                state.verticalSpacing = event.target.value;
              }}
            />
          </Stack>
        </ConfiguratorControls>
      </Configurator>
      <Prism language="jsx">
        {`import { SimpleGrid } from '@openlooks/react';

function Demo() {
  return (
    <SimpleGrid c="cols-${state.cols} spacing-${state.spacing} verticalSpacing-${state.verticalSpacing}">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </SimpleGrid>
  )
}`}
      </Prism>
    </DocPage>
  );
}
