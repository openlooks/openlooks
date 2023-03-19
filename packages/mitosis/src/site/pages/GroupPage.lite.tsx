import Container from '../../components/Container.lite';
import Group from '../../components/Group.lite';
import Title from '../../components/Title.lite';
import DocHeader from '../components/DocHeader.lite';

export default function GroupPage() {
  return (
    <>
      <DocHeader title="Group" description="Compose elements and components in a horizontal flex container" />
      <Container size="sm">
        <Title order={2}>Usage</Title>
        <Group position="left">test group</Group>
      </Container>
    </>
  );
}
