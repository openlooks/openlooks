import ActionIcon from '../components/ActionIcon.lite';
import Burger from '../components/Burger.lite';
import Group from '../components/Group.lite';
import Header from '../components/Header.lite';
import RouterLink from '../components/RouterLink.lite';
import IconBrandDiscordFilled from '../icons/IconBrandDiscordFilled.lite';
import IconBrandGithub from '../icons/IconBrandGithub.lite';
import IconSun from '../icons/IconSun.lite';
import { toggleTheme } from '../utils/theme';
import Logo from './components/Logo.lite';
import './SiteHeader.css';

export interface SiteHeaderProps {
  onBurgerClick: () => void;
}

export default function SiteHeader(props: SiteHeaderProps) {
  return (
    <Header>
      <Group position="apart" spacing="xs" p="md">
        <Group spacing="md">
          <Burger id="nav-burger" sx={{ '--size': '1rem' }} onClick={() => props.onBurgerClick()} />
          <RouterLink href="/" label="OpenLooks" sx={{ height: '1.75rem' }}>
            <Logo />
          </RouterLink>
        </Group>
        <Group spacing="xs">
          <ActionIcon
            title="Discord"
            variant="outline"
            radius="sm"
            size="md"
            color="gray"
            onClick={() => (window.location.href = 'https://discord.gg/')}
          >
            <IconBrandDiscordFilled size="1rem" />
          </ActionIcon>
          <ActionIcon
            title="GitHub"
            variant="outline"
            radius="sm"
            size="md"
            color="gray"
            onClick={() => (window.location.href = 'https://github.com/openlooks/openlooks')}
          >
            <IconBrandGithub size="1rem" />
          </ActionIcon>
          <ActionIcon
            title="Toggle dark mode"
            variant="outline"
            radius="sm"
            size="md"
            color="gray"
            onClick={() => toggleTheme()}
          >
            <IconSun size="1rem" />
          </ActionIcon>
        </Group>
      </Group>
    </Header>
  );
}
