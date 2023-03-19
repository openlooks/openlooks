import { useStore } from '@builder.io/mitosis';
import { Color, Size } from '../../components/BaseComponentProps';
import Button from '../../components/Button.lite';
import ColorPicker from '../../components/ColorPicker.lite';
import Container from '../../components/Container.lite';
import NativeSelect from '../../components/NativeSelect.lite';
import Stack from '../../components/Stack.lite';
import Text from '../../components/Text.lite';
import TextInput from '../../components/TextInput.lite';
import Title from '../../components/Title.lite';

export default function ButtonPage() {
  const state = useStore({
    variant: 'filled' as 'filled' | 'light' | 'outline' | 'subtle',
    color: 'blue' as Color,
    radius: 'sm' as Size,
    size: 'sm' as Size,
    text: 'Settings',
  });

  return (
    <Container size="sm">
      <Title order={1}>Button</Title>
      <Text>Render button or link with button styles from mantine theme</Text>
      <Title order={2}>Usage</Title>
      <div class="configurator-wrapper">
        <div class="configurator-main">
          <Button
            variant={state.variant as 'filled' | 'light' | 'outline' | 'subtle'}
            color={state.color as Color}
            radius={state.radius as Size}
            size={state.size as Size}
          >
            {state.text}
          </Button>
        </div>
        <div class="configurator-controls">
          <Stack>
            <NativeSelect
              id="variant"
              label="Variant"
              data={['filled', 'light', 'outline', 'subtle']}
              onChange={(event) => {
                state.variant = event.target.value;
              }}
            />
            <ColorPicker
              id="color"
              name="color"
              label="Color"
              onChange={(event) => {
                state.color = event.target.value;
              }}
            />
            <NativeSelect
              id="radius"
              label="Radius"
              data={['xs', 'sm', 'md', 'lg', 'xl']}
              onChange={(event) => {
                state.radius = event.target.value;
              }}
            />
            <NativeSelect
              id="size"
              label="size"
              data={['xs', 'sm', 'md', 'lg', 'xl']}
              onChange={(event) => {
                state.size = event.target.value;
              }}
            />
            <TextInput
              id="size"
              label="size"
              defaultValue={state.text}
              onChange={(event) => {
                state.text = event.target.value;
              }}
            />
          </Stack>
        </div>
      </div>
    </Container>
  );
}
