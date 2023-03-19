import { useStore } from '@builder.io/mitosis';
import ActionIcon from '../../components/ActionIcon.lite';
import { Color, Size } from '../../components/BaseComponentProps';
import ColorPicker from '../../components/ColorPicker.lite';
import Configurator from '../../components/Configurator.lite';
import ConfiguratorControls from '../../components/ConfiguratorControls.lite';
import ConfiguratorStage from '../../components/ConfiguratorStage.lite';
import Container from '../../components/Container.lite';
import NativeSelect from '../../components/NativeSelect.lite';
import Stack from '../../components/Stack.lite';
import Title from '../../components/Title.lite';
import IconAdjustments from '../../icons/IconAdjustments.lite';
import DocHeader from '../components/DocHeader.lite';

export interface ActionIconConfiguratorProps {
  variant: 'filled' | 'light' | 'outline' | 'subtle';
  color: Color;
  radius: Size;
  size: Size;
}

export default function ActionIconPage() {
  const state = useStore<ActionIconConfiguratorProps>({
    variant: 'filled',
    color: 'blue',
    radius: 'sm',
    size: 'sm',
  });

  return (
    <>
      <DocHeader title="ActionIcon" description="Icon button" />
      <Container size="sm">
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
              <NativeSelect
                id="radius"
                label="Radius"
                data={['xs', 'sm', 'md', 'lg', 'xl']}
                defaultValue={state.radius}
                onChange={(event) => {
                  state.radius = event.target.value;
                }}
              />
              <NativeSelect
                id="size"
                label="size"
                data={['xs', 'sm', 'md', 'lg', 'xl']}
                defaultValue={state.size}
                onChange={(event) => {
                  state.size = event.target.value;
                }}
              />
            </Stack>
          </ConfiguratorControls>
        </Configurator>
      </Container>
    </>
  );
}
