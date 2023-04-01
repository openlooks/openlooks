import { useStore } from '@builder.io/mitosis';
import ActionIcon from '../../components/ActionIcon.lite';
import { Color, Size } from '../../components/BaseComponentProps';
import ColorPicker from '../../components/ColorPicker.lite';
import Configurator from '../../components/Configurator.lite';
import ConfiguratorControls from '../../components/ConfiguratorControls.lite';
import ConfiguratorStage from '../../components/ConfiguratorStage.lite';
import NativeSelect from '../../components/NativeSelect.lite';
import Stack from '../../components/Stack.lite';
import Title from '../../components/Title.lite';
import IconAdjustments from '../../icons/IconAdjustments.lite';
import DocPage from '../components/DocPage.lite';
import Prism from '../components/Prism.lite';
import SizeInput from '../components/SizeInput.lite';

export default function ActionIconPage() {
  const state = useStore({
    variant: 'filled' as 'filled' | 'light' | 'outline' | 'subtle',
    color: 'blue' as Color,
    radius: 'sm' as Size,
    size: 'sm' as Size,
  });

  return (
    <DocPage title="ActionIcon" description="Icon button">
      <Title order={2}>Usage</Title>
      <Configurator>
        <ConfiguratorStage>
          <ActionIcon variant={state.variant} color={state.color} radius={state.radius} size={state.size}>
            <IconAdjustments
              size={
                (
                  {
                    xs: '0.75rem',
                    sm: '0.875rem',
                    md: '1.125rem',
                    lg: '1.625rem',
                    xl: '2.125rem',
                  } as Record<Size, string>
                )[state.size as Size]
              }
            />
          </ActionIcon>
        </ConfiguratorStage>
        <ConfiguratorControls>
          <Stack>
            <NativeSelect
              id="variant"
              label="Variant"
              data={['filled', 'light', 'outline', 'subtle']}
              defaultValue={state.variant}
              onChange={(event) => {
                state.variant = event.target.value;
              }}
            />
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
              id="radius"
              label="Radius"
              defaultValue={state.radius as Size}
              onChange={(event) => {
                state.radius = event.target.value;
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
      <Prism language="jsx">
        {`import { ActionIcon } from '@openlooks/react';
import { IconAdjustments } from '@tabler/icons-react';

function Demo() {
  return (
    <ActionIcon color="${state.color}" size="${state.size}" radius="${state.radius}" variant="${state.variant}">
      <IconAdjustments size="1.625rem" />
    </ActionIcon>
  );
}`}
      </Prism>
    </DocPage>
  );
}
