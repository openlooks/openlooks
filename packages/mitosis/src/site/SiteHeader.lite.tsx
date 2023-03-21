import Group from '../components/Group.lite';
import Header from '../components/Header.lite';
import RouterLink from '../components/RouterLink.lite';

export default function SiteHeader() {
  return (
    <Header>
      <Group position="apart" spacing="xs" p="md">
        <RouterLink href="/">OpenLooks</RouterLink>
      </Group>
    </Header>
  );
}
