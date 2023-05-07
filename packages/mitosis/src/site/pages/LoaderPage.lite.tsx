import { useStore } from '@builder.io/mitosis';
import type { Color, Size } from '../../components/BaseComponentProps';
import ColorPicker from '../../components/ColorPicker.lite';
import Configurator from '../../components/Configurator.lite';
import ConfiguratorControls from '../../components/ConfiguratorControls.lite';
import ConfiguratorStage from '../../components/ConfiguratorStage.lite';
import Loader from '../../components/Loader.lite';
import Stack from '../../components/Stack.lite';
import Title from '../../components/Title.lite';
import DocPage from '../components/DocPage.lite';
import Prism from '../components/Prism.lite';
import SizeInput from '../components/SizeInput.lite';

export default function LoaderPage() {
  const state = useStore({
    color: 'blue' as Color,
    size: 'md' as Size,
  });

  return (
    <DocPage title="Loader" description="Indicate loading state">
      <Title order={2}>Usage</Title>
      <Configurator>
        <ConfiguratorStage>
          <Loader c={`size-${state.size} color-${state.color}`} />
        </ConfiguratorStage>
        <ConfiguratorControls>
          <Stack>
            <ColorPicker
              id="color"
              name="color"
              label="Color"
              defaultValue={state.color}
              onChange={(event) => {
                state.color = event.target.value;
              }}
            />
            <SizeInput
              id="size"
              label="Size"
              defaultValue={state.size as Size}
              onChange={(event) => {
                state.size = event.target.value;
              }}
            />
          </Stack>
        </ConfiguratorControls>
      </Configurator>
      <Prism
        language="jsx"
        code={`import { Loader } from '@openlooks/react';

function Demo() {
  return (
    <Loader c="size-${state.size} color-${state.color}" />
  );
}`}
      />
    </DocPage>
  );
}
