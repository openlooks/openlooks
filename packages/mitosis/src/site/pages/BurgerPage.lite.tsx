import { useStore } from '@builder.io/mitosis';
import Burger from '../../components/Burger.lite';
import Center from '../../components/Center.lite';
import Paper from '../../components/Paper.lite';
import Text from '../../components/Text.lite';
import Title from '../../components/Title.lite';
import DocPage from '../components/DocPage.lite';

export default function BurgerPage() {
  const state = useStore({
    opened: false,
  });
  return (
    <DocPage title="Burger" description="Open/close navigation button">
      <Title order={2}>Usage</Title>
      <Text>
        Burger component renders open/close menu button. Set opened and onClick props to control Burger state. If opened
        prop is set cross will be rendered, otherwise - burger:
      </Text>
      <Paper p="xl" withBorder>
        <Center>
          <Burger
            sx={{ '--size': '2.125rem' }}
            opened={state.opened}
            onClick={() => {
              state.opened = !state.opened;
            }}
          />
        </Center>
      </Paper>
    </DocPage>
  );
}
