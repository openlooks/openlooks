import { useStore } from '@builder.io/mitosis';
import { Size } from '../../components/BaseComponentProps';
import Configurator from '../../components/Configurator.lite';
import ConfiguratorControls from '../../components/ConfiguratorControls.lite';
import ConfiguratorStage from '../../components/ConfiguratorStage.lite';
import Paper from '../../components/Paper.lite';
import Stack from '../../components/Stack.lite';
import Text from '../../components/Text.lite';
import Title from '../../components/Title.lite';
import DocPage from '../components/DocPage.lite';
import SizeInput from '../components/SizeInput.lite';

export default function PaperPage() {
  const state = useStore({
    shadow: 'xs' as Size,
    radius: 'sm' as Size,
    padding: 'md' as Size,
    withBorder: false,
  });

  return (
    <DocPage title="Paper" description="Renders white or dark background depending on color scheme">
      <Title order={2}>Usage</Title>
      <Text mb="xl">
        Paper component renders white (or theme.colors.dark[7] for dark theme) background with shadow, border-radius and
        padding from theme.
      </Text>
      <Configurator>
        <ConfiguratorStage sx={{ background: 'var(--oc-gray-0)' }}>
          <Paper shadow={state.shadow} radius={state.radius} p={state.padding} withBorder={state.withBorder}>
            <Text>Paper is the most basic ui component</Text>
            <Text>
              Use it to create cards, dropdowns, modals and other components that require background with shadow
            </Text>
          </Paper>
        </ConfiguratorStage>
        <ConfiguratorControls>
          <Stack>
            <SizeInput
              id="shadow"
              label="Shadow"
              defaultValue={state.shadow as Size}
              onChange={(event) => {
                state.shadow = event.target.value;
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
              id="padding"
              label="Padding"
              defaultValue={state.padding}
              onChange={(event) => {
                state.padding = event.target.value;
              }}
            />
          </Stack>
        </ConfiguratorControls>
      </Configurator>
    </DocPage>
  );
}
