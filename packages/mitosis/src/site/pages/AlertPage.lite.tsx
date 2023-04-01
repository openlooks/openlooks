import { useStore } from '@builder.io/mitosis';
import Alert from '../../components/Alert.lite';
import { Color, Size } from '../../components/BaseComponentProps';
import ColorPicker from '../../components/ColorPicker.lite';
import Configurator from '../../components/Configurator.lite';
import ConfiguratorControls from '../../components/ConfiguratorControls.lite';
import ConfiguratorStage from '../../components/ConfiguratorStage.lite';
import NativeSelect from '../../components/NativeSelect.lite';
import Stack from '../../components/Stack.lite';
import TextInput from '../../components/TextInput.lite';
import Title from '../../components/Title.lite';
import IconAlertCircle from '../../icons/IconAlertCircle.lite';
import DocPage from '../components/DocPage.lite';
import SizeInput from '../components/SizeInput.lite';

export default function AlertPage() {
  const state = useStore({
    title: 'Bummer!',
    message: 'Something terrible happened! You made a mistake and there is no going back, your data was lost forever!',
    color: 'blue' as Color,
    radius: 'sm' as Size,
    variant: 'filled' as 'light' | 'filled' | 'outline',
  });

  return (
    <DocPage title="Alert" description="Attract user attention with important static message">
      <Title order={2}>Usage</Title>
      <Configurator>
        <ConfiguratorStage>
          <Alert
            icon={<IconAlertCircle size="1rem" />}
            title={state.title}
            color={state.color}
            radius={state.radius}
            variant={state.variant}
          >
            {state.message}
          </Alert>
        </ConfiguratorStage>
        <ConfiguratorControls>
          <Stack>
            <TextInput
              id="title"
              label="Title"
              defaultValue={state.title}
              onChange={(event) => {
                state.title = event.target.value;
              }}
            />
            <TextInput
              id="message"
              label="Message"
              defaultValue={state.message}
              onChange={(event) => {
                state.message = event.target.value;
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
              defaultValue={state.radius}
              onChange={(event) => {
                state.radius = event.target.value;
              }}
            />
            <NativeSelect
              id="variant"
              label="Variant"
              data={['light', 'filled', 'outline']}
              defaultValue={state.variant}
              onChange={(event) => {
                state.variant = event.target.value;
              }}
            />
          </Stack>
        </ConfiguratorControls>
      </Configurator>
    </DocPage>
  );
}
