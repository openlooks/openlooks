import React from "react";
import { ActionIcon } from "@openlooks/react";
import { Burger } from "@openlooks/react";
import { Group } from "@openlooks/react";
import { Header } from "@openlooks/react";
import { RouterLink } from "@openlooks/react";
import { IconBrandDiscord } from "@openlooks/react";
import { IconBrandGithub } from "@openlooks/react";
import { IconSun } from "@openlooks/react";
import { toggleTheme } from "@openlooks/react";
import { Logo } from "./components/Logo";
import "./SiteHeader.css";
export interface SiteHeaderProps {
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
