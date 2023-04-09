import { useStore } from '@builder.io/mitosis';
import { Size } from '../../components/BaseComponentProps';
import Configurator from '../../components/Configurator.lite';
import ConfiguratorControls from '../../components/ConfiguratorControls.lite';
import ConfiguratorStage from '../../components/ConfiguratorStage.lite';
import NativeSelect from '../../components/NativeSelect.lite';
import ScrollArea from '../../components/ScrollArea.lite';
import Stack from '../../components/Stack.lite';
import Text from '../../components/Text.lite';
import Title from '../../components/Title.lite';
import DocPage from '../components/DocPage.lite';
import Prism from '../components/Prism.lite';
import SizeInput from '../components/SizeInput.lite';

export default function ScrollAreaPage() {
  const state = useStore({
    variant: 'hover' as 'hover' | 'never' | 'always',
    scrollbarSize: 'md' as Size,
  });

  return (
    <DocPage title="ScrollArea" description="Area with custom scrollbars">
      <Title order={2}>Usage</Title>
      <Text c="mb-xl">
        The ScrollArea component customizes the native browser scrollbars. This is notably different than Mantine, which
        uses the Radix UI scroll area component, and recreates scrollbars from scratch using div elements.
      </Text>
      <Configurator>
        <ConfiguratorStage>
          <ScrollArea c={`variant-${state.variant} scrollbarSize-${state.scrollbarSize}`} sx={{ height: '250px' }}>
            <Title order={3}>Charizard (Pokémon)</Title>
            <Text c="mb-xl">Charizard description from Bulbapedia</Text>
            <Text c="mb-xl">
              Charizard is a draconic, bipedal Pokémon. It is primarily orange with a cream underside from the chest to
              the tip of its tail. It has a long neck, small blue eyes, slightly raised nostrils, and two horn-like
              structures protruding from the back of its rectangular head. There are two fangs visible in the upper jaw
              when its mouth is closed. Two large wings with blue-green undersides sprout from its back, and a horn-like
              appendage juts out from the top of the third joint of each wing. A single wing-finger is visible through
              the center of each wing membrane. Charizard's arms are short and skinny compared to its robust belly, and
              each limb has three white claws. It has stocky legs with cream-colored soles on each of its plantigrade
              feet. The tip of its long, tapering tail burns with a sizable flame.
            </Text>
            <Text c="mb-xl">
              As Mega Charizard X, its body and legs are more physically fit, though its arms remain thin. Its skin
              turns black with a sky-blue underside and soles. Two spikes with blue tips curve upward from the front and
              back of each shoulder, while the tips of its horns sharpen, turn blue, and curve slightly upward. Its brow
              and claws are larger, and its eyes are now red. It has two small, fin-like spikes under each horn and two
              more down its lower neck. The finger disappears from the wing membrane, and the lower edges are divided
              into large, rounded points. The third joint of each wing-arm is adorned with a claw-like spike. Mega
              Charizard X breathes blue flames out the sides of its mouth, and the flame on its tail now burns blue. It
              is said that its new power turns it black and creates more intense flames.
            </Text>
          </ScrollArea>
        </ConfiguratorStage>
        <ConfiguratorControls>
          <Stack>
            <NativeSelect
              id="variant"
              label="Variant"
              data={['hover', 'never', 'always']}
              defaultValue={state.variant}
              onChange={(event) => {
                state.variant = event.target.value;
              }}
            />
            <SizeInput
              id="scrollbarSize"
              label="Scrollbar Size"
              defaultValue={state.scrollbarSize}
              onChange={(event) => {
                state.scrollbarSize = event.target.value;
              }}
            />
          </Stack>
        </ConfiguratorControls>
      </Configurator>
      <Prism language="jsx">
        {`import { ScrollArea } from '@openlooks/react';

function Demo() {
  return (
    <ScrollArea h={250} c="variant-${state.variant} scrollbarSize-${state.scrollbarSize}">
      {/* ... content */}
    </ScrollArea>
  );
}`}
      </Prism>
    </DocPage>
  );
}
