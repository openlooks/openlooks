import Group from '../components/Group.lite';
import Header from '../components/Header.lite';
import RouterLink from '../components/RouterLink.lite';

export default function SiteHeader() {
  return (
    <Header sx={{ 'border-bottom': '1px solid var(--oc-gray-2)', height: '3.75rem' }}>
      <Group position="apart" spacing="xs" p="md">
        <RouterLink href="/">OpenLooks</RouterLink>
      </Group>
    </Header>
  );
}
