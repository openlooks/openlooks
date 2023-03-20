import { useStore } from '@builder.io/mitosis';
import { Color, Size } from '../../components/BaseComponentProps';
import Button from '../../components/Button.lite';
import ColorPicker from '../../components/ColorPicker.lite';
import Configurator from '../../components/Configurator.lite';
import ConfiguratorControls from '../../components/ConfiguratorControls.lite';
import ConfiguratorStage from '../../components/ConfiguratorStage.lite';
import Container from '../../components/Container.lite';
import NativeSelect from '../../components/NativeSelect.lite';
import Stack from '../../components/Stack.lite';
import TextInput from '../../components/TextInput.lite';
import Title from '../../components/Title.lite';
import DocHeader from '../components/DocHeader.lite';

export interface ButtonConfiguratorProps {
  variant: 'filled' | 'light' | 'outline' | 'subtle';
  color: Color;
  radius: Size;
  size: Size;
  text: string;
}

export default function ButtonPage() {
  const state = useStore<ButtonConfiguratorProps>({
    variant: 'filled',
    color: 'blue',
    radius: 'sm',
    size: 'sm',
    text: 'Settings',
  });

  return (
    <>
      <DocHeader title="Button" description="Render button or link with button styles from mantine theme" />
      <Container size="sm">
        <Title order={2}>Usage</Title>
        <Configurator>
          <ConfiguratorStage>
            <Button variant={state.variant} color={state.color} radius={state.radius} size={state.size}>
              {state.text}
            </Button>
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
                label="Size"
                data={['xs', 'sm', 'md', 'lg', 'xl']}
                defaultValue={state.size}
                onChange={(event) => {
                  state.size = event.target.value;
                }}
              />
              <TextInput
                id="text"
                label="Text"
                defaultValue={state.text}
                onChange={(event) => {
                  state.text = event.target.value;
                }}
              />
            </Stack>
          </ConfiguratorControls>
        </Configurator>
      </Container>
    </>
  );
}
