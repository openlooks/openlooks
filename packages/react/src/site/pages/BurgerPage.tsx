import React from "react";
import Burger from "../../components/Burger";
import Center from "../../components/Center";
import Paper from "../../components/Paper";
import Text from "../../components/Text";
import Title from "../../components/Title";
import DocPage from "../components/DocPage";
export default function BurgerPage() {
    const [opened, setOpened] = React.useState(false);
    return (<DocPage title="Burger" description="Open/close navigation button">
      <Title order={2}>Usage</Title>
      <Text>
        Burger component renders open/close menu button. Set opened and onClick props to control Burger state. If opened
        prop is set cross will be rendered, otherwise - burger:
      </Text>
      <Paper c="p-xl withBorder">
        <Center>
          <Burger sx={{ '--size': '2.125rem' }} opened={opened} onClick={() => {
            setOpened(!opened);
        }}/>
        </Center>
      </Paper>
    </DocPage>);
}
