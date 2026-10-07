import React from "react";
import { Button } from "@openlooks/react";
import { Center } from "@openlooks/react";
import { Menu } from "@openlooks/react";
import { MenuDivider } from "@openlooks/react";
import { MenuItem } from "@openlooks/react";
import { MenuLabel } from "@openlooks/react";
import { Paper } from "@openlooks/react";
import { Title } from "@openlooks/react";
import { IconArrowsLeftRight } from "@openlooks/react";
import { IconMessageCircle } from "@openlooks/react";
import { IconPhoto } from "@openlooks/react";
import { IconSearch } from "@openlooks/react";
import { IconSettings } from "@openlooks/react";
import { IconTrash } from "@openlooks/react";
import { DocPage } from "../components/DocPage";
export function MenuPage() {
  const [opacity, setOpacity] = React.useState("0");
  const [top, setTop] = React.useState("0");
  const [left, setLeft] = React.useState("0");
  React.useEffect(() => {
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
                const buttonBounds = event.target.getBoundingClientRect();
                const parentBounds =
                  event.target.parentElement.getBoundingClientRect();
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
