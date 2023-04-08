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
  burgerOpen: boolean;
  onBurgerClick: () => void;
}

export default function SiteHeader(props: SiteHeaderProps) {
  return (
    <Header>
      <Group c="position-apart spacing-xs p-md">
        <Group c="spacing-md">
          <Burger
            id="nav-burger"
            label="Toggle navbar"
            sx={{ '--size': '1rem' }}
            opened={props.burgerOpen}
            onClick={() => props.onBurgerClick()}
          />
          <RouterLink href="/" label="OpenLooks" sx={{ height: '1.75rem' }}>
            <Logo />
          </RouterLink>
        </Group>
        <Group c="spacing-xs">
          <ActionIcon
            title="Discord"
            c="variant-outline radius-sm size-sm color-gray"
            onClick={() => (window.location.href = 'https://discord.gg/')}
          >
            <IconBrandDiscordFilled size="1rem" />
          </ActionIcon>
          <ActionIcon
            title="GitHub"
            c="variant-outline radius-sm size-sm color-gray"
            onClick={() => (window.location.href = 'https://github.com/openlooks/openlooks')}
          >
            <IconBrandGithub size="1rem" />
          </ActionIcon>
          <ActionIcon
            title="Toggle dark mode"
            c="variant-outline radius-sm size-sm color-gray"
            onClick={() => toggleTheme()}
          >
            <IconSun size="1rem" />
          </ActionIcon>
        </Group>
      </Group>
    </Header>
  );
}
