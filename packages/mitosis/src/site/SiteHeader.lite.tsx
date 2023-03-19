import Group from '../components/Group/Group.lite';
import Header from '../components/Header/Header.lite';
import RouterLink from '../components/RouterLink/RouterLink.lite';

export default function SiteHeader() {
  return (
    <Header sx={{ height: '3.75rem' }}>
      <Group position="apart" spacing="xs" p="md">
        <RouterLink href="/">OpenLooks</RouterLink>
      </Group>
    </Header>
  );
}
