import Burger from '../../components/Burger.lite';
import Text from '../../components/Text.lite';
import Title from '../../components/Title.lite';
import DocPage from '../components/DocPage.lite';

export default function BurgerPage() {
  return (
    <DocPage title="Burger" description="Open/close navigation button">
      <Title order={2}>Usage</Title>
      <Text>
        Burger component renders open/close menu button. Set opened and onClick props to control Burger state. If opened
        prop is set cross will be rendered, otherwise - burger:
      </Text>
      <Burger sx={{ '--size': '2.125rem' }} />
    </DocPage>
  );
}
