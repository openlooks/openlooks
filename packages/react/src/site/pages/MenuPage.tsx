import React from "react";
import Button from "../../components/Button";
import Center from "../../components/Center";
import Menu from "../../components/Menu";
import MenuDivider from "../../components/MenuDivider";
import MenuItem from "../../components/MenuItem";
import MenuLabel from "../../components/MenuLabel";
import Paper from "../../components/Paper";
import Title from "../../components/Title";
import IconArrowsLeftRight from "../../icons/IconArrowsLeftRight";
import IconMessageCircle from "../../icons/IconMessageCircle";
import IconPhoto from "../../icons/IconPhoto";
import IconSearch from "../../icons/IconSearch";
import IconSettings from "../../icons/IconSettings";
import IconTrash from "../../icons/IconTrash";
import DocPage from "../components/DocPage";
export default function MenuPage() {
    const [opacity, setOpacity] = React.useState('0');
    const [top, setTop] = React.useState('0');
    const [left, setLeft] = React.useState('0');
    React.useEffect(() => {
        document.addEventListener('click', (event) => {
            if ((event.target as HTMLElement | undefined)?.tagName !== 'BUTTON') {
                setOpacity('0');
            }
        });
    }, []);
    return (<DocPage title="Menu" description="Combine a list of secondary actions into single interactive area">
      <Title order={2}>Usage</Title>
      <Paper c="p-xl withBorder">
        <Center sx={{ position: 'relative' }}>
          <Button onClick={(event) => {
            event.preventDefault();
            if (opacity === '0') {
                const buttonBounds = event.target.getBoundingClientRect();
                const parentBounds = event.target.parentElement.getBoundingClientRect();
                setTop(`${buttonBounds.bottom - parentBounds.top + 8}px`);
                setLeft(`${buttonBounds.left - parentBounds.left}px`);
                setOpacity('1');
            }
            else {
                setOpacity('0');
            }
        }}>
            Toggle menu
          </Button>
          <Menu c="size-sm radius-sm" sx={{ opacity: opacity, top: top, left: left, width: '12.5rem' }}>
            <MenuLabel>Application</MenuLabel>
            <MenuItem slotIcon={<IconSettings size="0.875rem"/>}>Settings</MenuItem>
            <MenuItem slotIcon={<IconMessageCircle size="0.875rem"/>}>Messages</MenuItem>
            <MenuItem slotIcon={<IconPhoto size="0.875rem"/>}>Gallery</MenuItem>
            <MenuItem slotIcon={<IconSearch size="0.875rem"/>}>Search</MenuItem>
            <MenuDivider />
            <MenuLabel>Danger zone</MenuLabel>
            <MenuItem slotIcon={<IconArrowsLeftRight size="0.875rem"/>}>Transfer my data</MenuItem>
            <MenuItem slotIcon={<IconTrash size="0.875rem"/>} c="color-red">
              Delete my account
            </MenuItem>
          </Menu>
        </Center>
      </Paper>
    </DocPage>);
}
