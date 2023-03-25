import ActionIcon from '../components/ActionIcon.lite';
import Group from '../components/Group.lite';
import Header from '../components/Header.lite';
import RouterLink from '../components/RouterLink.lite';
import IconSun from '../icons/IconSun.lite';
import { toggleTheme } from '../utils/theme';

export default function SiteHeader() {
  return (
    <Header>
      <Group position="apart" spacing="xs" p="md">
        <RouterLink href="/">OpenLooks</RouterLink>
        <Group>
          <ActionIcon variant="outline" radius="sm" size="md" color="gray" onClick={() => toggleTheme()}>
            <IconSun size="1rem" />
          </ActionIcon>
        </Group>
      </Group>
    </Header>
  );
}
