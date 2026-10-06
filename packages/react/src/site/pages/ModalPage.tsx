import React from "react";
import Button from "../../components/Button";
import Center from "../../components/Center";
import Modal from "../../components/Modal";
import Paper from "../../components/Paper";
import Title from "../../components/Title";
import AuthenticationForm from "../components/AuthenticationForm";
import DocPage from "../components/DocPage";
export default function ModalPage() {
    const [visible, setVisible] = React.useState(false);
    return (<DocPage title="Modal" description="An accessible overlay dialog">
      <Title order={2}>Usage</Title>
      <Paper c="p-xl withBorder">
        <Center>
          <Button onClick={(event) => {
            event.preventDefault();
            setVisible(!visible);
        }}>
            Open modal
          </Button>
          <Modal title="Authentication" c="p-md" width="27.5rem" visible={visible} onClose={() => (setVisible(false))}>
            <AuthenticationForm formType="register"/>
          </Modal>
        </Center>
      </Paper>
    </DocPage>);
}
