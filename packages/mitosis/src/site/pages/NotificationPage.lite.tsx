import Container from '../../components/Container.lite';
import Text from '../../components/Text.lite';
import Title from '../../components/Title.lite';
import DocHeader from '../components/DocHeader.lite';

export default function NotificationPage() {
  return (
    <>
      <DocHeader
        title="Notification"
        description="Show dynamic notifications and alerts to user, part of notifications system"
      />
      <Container size="sm">
        <Title order={2}>Usage</Title>
        <Text>TODO</Text>
      </Container>
    </>
  );
}
