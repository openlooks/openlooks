import { onMount, useStore } from '@builder.io/mitosis';
import Button from '../../components/Button.lite';
import Center from '../../components/Center.lite';
import Drawer from '../../components/Drawer.lite';
import Paper from '../../components/Paper.lite';
import Title from '../../components/Title.lite';
import AuthenticationForm from '../components/AuthenticationForm.lite';
import DocPage from '../components/DocPage.lite';

export default function DrawerPage() {
  const state = useStore({
    visible: false,
  });

  onMount(() => {
    document.addEventListener('click', (event) => {
      if ((event.target as HTMLElement | undefined)?.classList.contains('overlay')) {
        state.visible = false;
      }
    });
  });

  return (
    <DocPage title="Drawer" description="Display overlay area at any side of the screen">
      <Title order={2}>Usage</Title>
      <Paper c="p-xl withBorder">
        <Center>
          <Button
            onClick={(event) => {
              event.preventDefault();
              state.visible = !state.visible;
            }}
          >
            Toggle drawer
          </Button>
          <Drawer
            title="Authentication"
            c="p-md"
            width="27.5rem"
            visible={state.visible}
            onClose={() => (state.visible = false)}
          >
            <AuthenticationForm formType="register" />
          </Drawer>
        </Center>
      </Paper>
    </DocPage>
  );
}
