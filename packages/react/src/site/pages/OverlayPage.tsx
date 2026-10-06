import React from "react";
import Button from "../../components/Button";
import Center from "../../components/Center";
import Image from "../../components/Image";
import Overlay from "../../components/Overlay";
import Paper from "../../components/Paper";
import Text from "../../components/Text";
import Title from "../../components/Title";
import DocPage from "../components/DocPage";
import Prism from "../components/Prism";
export default function OverlayPage() {
    const [visible, setVisible] = React.useState(false);
    return (<DocPage title="Overlay" description="Overlays parent element with div element with any color and opacity">
      <Title order={2}>Usage</Title>
      <Text>
        Overlay takes 100% of width and height of parent container or viewport if fixed prop is set. Set color and
        opacity props to change Overlay background-color. Note that opacity prop does not change CSS opacity property,
        it changes background-color. For example, if you set {`color="#000"`} and {`opacity={0.85}`} background-color
        will be {`rgba(0, 0, 0, 0.85)`}:
      </Text>
      <Paper c="p-xl mt-xl withBorder">
        <Center>
          <div style={{ width: '400px', height: '225px', position: 'relative', margin: 'auto', overflow: 'hidden' }}>
            <Image src="https://images.unsplash.com/photo-1618359057154-e21ae64350b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80" alt="Dog"/>
            <Overlay visible={visible}/>
          </div>
          <Button c="mt-xl" onClick={() => (setVisible(!visible))}>
            Toggle overlay
          </Button>
        </Center>
      </Paper>
      <Prism language="jsx" code={`import { useStore } from '@builder.io/mitosis';
import { Button, Image, Overlay } from '@openlooks/react';

function Demo() {
  const state = useStore({ visible: false });
  return (
    <>
      <div style={{ width: '400px', height: '225px', position: 'relative', margin: 'auto', overflow: 'hidden' }}>
        <Image
          src="https://images.unsplash.com/photo-1618359057154-e21ae64350b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
          alt="Dog"
        />
        <Overlay visible={state.visible} />
      </div>
      <Button c="mt-xl" onClick={() => (state.visible = !state.visible)}>
        Toggle overlay
      </Button>
    </>
  );
}`}/>
    </DocPage>);
}
