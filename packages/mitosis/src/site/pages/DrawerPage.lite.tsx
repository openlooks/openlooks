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
    display: 'none',
    opacity: '0',
  });

  onMount(() => {
    document.addEventListener('click', (event) => {
      if ((event.target as HTMLElement | undefined)?.classList.contains('overlay')) {
        state.opacity = '0';
        window.setTimeout(() => (state.display = 'none'), 300);
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
              if (state.opacity === '0') {
                state.display = 'block';
                state.opacity = '1';
              } else {
                state.opacity = '0';
                window.setTimeout(() => (state.display = 'none'), 300);
              }
            }}
          >
            Toggle drawer
          </Button>
          <Drawer c="p-md" sx={{ display: state.display, opacity: state.opacity, width: '27rem' }}>
            <AuthenticationForm formType="register" />
          </Drawer>
        </Center>
      </Paper>
    </DocPage>
  );
}
