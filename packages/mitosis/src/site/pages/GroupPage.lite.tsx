import Container from '../../components/Container.lite';
import Group from '../../components/Group.lite';
import Text from '../../components/Text.lite';
import Title from '../../components/Title.lite';

export default function GroupPage() {
  return (
    <Container size="sm">
      <Title order={1}>Group</Title>
      <Text>Compose elements and components in a horizontal flex container</Text>
      <Title order={2}>Usage</Title>
      <Group position="left">test group</Group>
    </Container>
  );
}
