import React from "react";
import Button from "../../components/Button";
import Center from "../../components/Center";
import Dialog from "../../components/Dialog";
import Group from "../../components/Group";
import Paper from "../../components/Paper";
import Text from "../../components/Text";
import TextInput from "../../components/TextInput";
import Title from "../../components/Title";
import DocPage from "../components/DocPage";
export default function DialogPage() {
    const [opacity, setOpacity] = React.useState('0');
    return (<DocPage title="Dialog" description="Display fixed overlay at any side of the screen">
      <Title order={2}>Usage</Title>
      <Paper c="p-xl withBorder">
        <Center>
          <Button onClick={(event) => {
            event.preventDefault();
            if (opacity === '0') {
                setOpacity('1');
            }
            else {
                setOpacity('0');
            }
        }}>
            Toggle dialog
          </Button>
          <Dialog c="radius-sm p-md" sx={{ opacity: opacity, width: '23rem' }}>
            <Text c="size-sm mb-xs weight-500">Subscribe to email newsletter</Text>
            <Group c="align-flex-end">
              <TextInput id="textinput" placeholder="hello@gluesticker.com" sx={{ flex: 1 }}/>
              <Button>Subscribe</Button>
            </Group>
          </Dialog>
        </Center>
      </Paper>
    </DocPage>);
}
