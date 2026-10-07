import {
  ActionIcon,
  BaseComponentProps,
  Burger,
  Group,
  Header,
  IconBrandDiscord,
  IconBrandGithub,
  IconSun,
  RouterLink,
  toggleTheme,
} from "@openlooks/react";
import { Logo } from "./components/Logo";
import "./SiteHeader.css";

export interface SiteHeaderProps extends BaseComponentProps {
  burgerOpen: boolean;
  onBurgerClick: () => void;
}

export function SiteHeader(props: SiteHeaderProps) {
  return (
    <Header>
      <Group c="position-apart spacing-xs p-md">
        <Group c="spacing-md">
          <Burger
            id="nav-burger"
            label="Toggle navbar"
            sx={{ "--size": "1rem" }}
            opened={props.burgerOpen}
            onClick={() => props.onBurgerClick()}
          />
          <RouterLink href="/" label="OpenLooks" sx={{ height: "1.75rem" }}>
            <Logo />
          </RouterLink>
        </Group>
        <Group c="spacing-xs">
          <ActionIcon
            title="Discord"
            c="variant-outline radius-sm size-md color-gray"
            onClick={() => (window.location.href = "https://discord.gg/")}
          >
            <IconBrandDiscord size="1rem" />
          </ActionIcon>
          <ActionIcon
            title="GitHub"
            c="variant-outline radius-sm size-md color-gray"
            onClick={() =>
              (window.location.href = "https://github.com/openlooks/openlooks")
            }
          >
            <IconBrandGithub size="1rem" />
          </ActionIcon>
          <ActionIcon
            title="Toggle dark mode"
            c="variant-outline radius-sm size-md color-gray"
            onClick={() => toggleTheme()}
          >
            <IconSun size="1rem" />
          </ActionIcon>
        </Group>
      </Group>
    </Header>
  );
}
