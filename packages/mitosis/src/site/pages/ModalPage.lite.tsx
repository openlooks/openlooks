import { useStore } from '@builder.io/mitosis';
import Button from '../../components/Button.lite';
import Center from '../../components/Center.lite';
import Modal from '../../components/Modal.lite';
import Paper from '../../components/Paper.lite';
import Title from '../../components/Title.lite';
import AuthenticationForm from '../components/AuthenticationForm.lite';
import DocPage from '../components/DocPage.lite';

export default function ModalPage() {
  const state = useStore({
    visible: false,
  });

  return (
    <DocPage title="Modal" description="An accessible overlay dialog">
      <Title order={2}>Usage</Title>
      <Paper c="p-xl withBorder">
        <Center>
          <Button
            onClick={(event) => {
              event.preventDefault();
              state.visible = !state.visible;
            }}
          >
            Open modal
          </Button>
          <Modal
            title="Authentication"
            c="p-md"
            width="27.5rem"
            visible={state.visible}
            onClose={() => (state.visible = false)}
          >
            <AuthenticationForm formType="register" />
          </Modal>
        </Center>
      </Paper>
    </DocPage>
  );
}
