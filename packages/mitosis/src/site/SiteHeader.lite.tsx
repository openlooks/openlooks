import ActionIcon from '../components/ActionIcon.lite';
import Burger from '../components/Burger.lite';
import Group from '../components/Group.lite';
import Header from '../components/Header.lite';
import RouterLink from '../components/RouterLink.lite';
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
          <RouterLink href="/">
            <Logo />
          </RouterLink>
        </Group>
        <Group>
          <ActionIcon variant="outline" radius="sm" size="md" color="gray" onClick={() => toggleTheme()}>
            <IconSun size="1rem" />
          </ActionIcon>
        </Group>
      </Group>
    </Header>
  );
}
