import { useStore } from '@builder.io/mitosis';
import { Color, Size } from '../../components/BaseComponentProps';
import ColorPicker from '../../components/ColorPicker.lite';
import Configurator from '../../components/Configurator.lite';
import ConfiguratorControls from '../../components/ConfiguratorControls.lite';
import ConfiguratorStage from '../../components/ConfiguratorStage.lite';
import Container from '../../components/Container.lite';
import Slider from '../../components/Slider.lite';
import Stack from '../../components/Stack.lite';
import Title from '../../components/Title.lite';
import DocHeader from '../components/DocHeader.lite';
import SizeInput from '../components/SizeInput.lite';

export interface SliderConfiguratorProps {
  color: Color;
  radius: Size;
  size: Size;
  text: string;
}

export default function SliderPage() {
  const state = useStore<SliderConfiguratorProps>({
    color: 'blue',
    radius: 'sm',
    size: 'sm',
    text: 'Settings',
  });

  return (
    <>
      <DocHeader title="Slider" description="Capture user feedback from a range of values" />
      <Container size="sm">
        <Title order={2}>Usage</Title>
        <Configurator>
          <ConfiguratorStage>
            <Slider
              id="slider"
              color={state.color}
              radius={state.radius}
              size={state.size}
              marks={[
                { value: 20, label: '20%' },
                { value: 50, label: '50%' },
                { value: 80, label: '80%' },
              ]}
            />
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
      </Container>
    </>
  );
}
