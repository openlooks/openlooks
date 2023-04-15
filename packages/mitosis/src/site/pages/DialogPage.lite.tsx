import { useStore } from '@builder.io/mitosis';
import Button from '../../components/Button.lite';
import Center from '../../components/Center.lite';
import Dialog from '../../components/Dialog.lite';
import Group from '../../components/Group.lite';
import Paper from '../../components/Paper.lite';
import Text from '../../components/Text.lite';
import TextInput from '../../components/TextInput.lite';
import Title from '../../components/Title.lite';
import DocPage from '../components/DocPage.lite';

export default function DialogPage() {
  const state = useStore({
    opacity: '0',
  });

  return (
    <DocPage title="Dialog" description="Display fixed overlay at any side of the screen">
      <Title order={2}>Usage</Title>
      <Paper c="p-xl withBorder">
        <Center>
          <Button
            onClick={(event) => {
              event.preventDefault();
              if (state.opacity === '0') {
                state.opacity = '1';
              } else {
                state.opacity = '0';
              }
            }}
          >
            Toggle dialog
          </Button>
          <Dialog c="radius-sm p-md" sx={{ opacity: state.opacity, width: '23rem' }}>
            <Text c="size-sm mb-xs weight-500">Subscribe to email newsletter</Text>
            <Group c="align-flex-end">
              <TextInput id="textinput" placeholder="hello@gluesticker.com" sx={{ flex: 1 }} />
              <Button>Subscribe</Button>
            </Group>
          </Dialog>
        </Center>
      </Paper>
    </DocPage>
  );
}
