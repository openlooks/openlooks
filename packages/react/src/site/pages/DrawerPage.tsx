import React from "react";
import Button from "../../components/Button";
import Center from "../../components/Center";
import Drawer from "../../components/Drawer";
import Paper from "../../components/Paper";
import Title from "../../components/Title";
import AuthenticationForm from "../components/AuthenticationForm";
import DocPage from "../components/DocPage";
export default function DrawerPage() {
    const [visible, setVisible] = React.useState(false);
    return (<DocPage title="Drawer" description="Display overlay area at any side of the screen">
      <Title order={2}>Usage</Title>
      <Paper c="p-xl withBorder">
        <Center>
          <Button onClick={(event) => {
            event.preventDefault();
            setVisible(!visible);
        }}>
            Toggle drawer
          </Button>
          <Drawer title="Authentication" c="p-md" width="27.5rem" visible={visible} onClose={() => (setVisible(false))}>
            <AuthenticationForm formType="register"/>
          </Drawer>
        </Center>
      </Paper>
    </DocPage>);
}
