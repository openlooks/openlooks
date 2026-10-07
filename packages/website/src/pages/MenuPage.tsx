import {
  Button,
  Center,
  IconArrowsLeftRight,
  IconMessageCircle,
  IconPhoto,
  IconSearch,
  IconSettings,
  IconTrash,
  Menu,
  MenuDivider,
  MenuItem,
  MenuLabel,
  Paper,
  Title,
} from "@openlooks/react";
import type { JSX } from "react";
import { useEffect, useState } from "react";
import { DocPage } from "../components/DocPage";

export function MenuPage(): JSX.Element {
  const [opacity, setOpacity] = useState("0");
  const [top, setTop] = useState("0");
  const [left, setLeft] = useState("0");
  useEffect(() => {
    document.addEventListener("click", (event) => {
      if ((event.target as HTMLElement | undefined)?.tagName !== "BUTTON") {
        setOpacity("0");
      }
    });
  }, []);
  return (
    <DocPage
      title="Menu"
      description="Combine a list of secondary actions into single interactive area"
    >
      <Title order={2}>Usage</Title>
      <Paper c="p-xl withBorder">
        <Center sx={{ position: "relative" }}>
          <Button
            onClick={(event) => {
              event.preventDefault();
              if (opacity === "0") {
                const target = event.target as HTMLButtonElement;
                const parent = target.parentElement as HTMLElement;
                const buttonBounds = target.getBoundingClientRect();
                const parentBounds = parent.getBoundingClientRect();
                setTop(`${buttonBounds.bottom - parentBounds.top + 8}px`);
                setLeft(`${buttonBounds.left - parentBounds.left}px`);
                setOpacity("1");
              } else {
                setOpacity("0");
              }
            }}
          >
            Toggle menu
          </Button>
          <Menu
            c="size-sm radius-sm"
            sx={{ opacity: opacity, top: top, left: left, width: "12.5rem" }}
          >
            <MenuLabel>Application</MenuLabel>
            <MenuItem slotIcon={<IconSettings size="0.875rem" />}>
              Settings
            </MenuItem>
            <MenuItem slotIcon={<IconMessageCircle size="0.875rem" />}>
              Messages
            </MenuItem>
            <MenuItem slotIcon={<IconPhoto size="0.875rem" />}>
              Gallery
            </MenuItem>
            <MenuItem slotIcon={<IconSearch size="0.875rem" />}>
              Search
            </MenuItem>
            <MenuDivider />
            <MenuLabel>Danger zone</MenuLabel>
            <MenuItem slotIcon={<IconArrowsLeftRight size="0.875rem" />}>
              Transfer my data
            </MenuItem>
            <MenuItem slotIcon={<IconTrash size="0.875rem" />} c="color-red">
              Delete my account
            </MenuItem>
          </Menu>
        </Center>
      </Paper>
    </DocPage>
  );
}
