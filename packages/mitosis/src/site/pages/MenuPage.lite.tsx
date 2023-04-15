import { onMount, useStore } from '@builder.io/mitosis';
import Button from '../../components/Button.lite';
import Center from '../../components/Center.lite';
import Menu from '../../components/Menu.lite';
import MenuDivider from '../../components/MenuDivider.lite';
import MenuItem from '../../components/MenuItem.lite';
import MenuLabel from '../../components/MenuLabel.lite';
import Paper from '../../components/Paper.lite';
import Title from '../../components/Title.lite';
import IconArrowsLeftRight from '../../icons/IconArrowsLeftRight.lite';
import IconMessageCircle from '../../icons/IconMessageCircle.lite';
import IconPhoto from '../../icons/IconPhoto.lite';
import IconSearch from '../../icons/IconSearch.lite';
import IconSettings from '../../icons/IconSettings.lite';
import IconTrash from '../../icons/IconTrash.lite';
import DocPage from '../components/DocPage.lite';

export default function MenuPage() {
  const state = useStore({
    opacity: '0',
    top: '0',
    left: '0',
  });

  onMount(() => {
    document.addEventListener('click', (event) => {
      if ((event.target as HTMLElement | undefined)?.tagName !== 'BUTTON') {
        state.opacity = '0';
      }
    });
  });

  return (
    <DocPage title="Menu" description="Combine a list of secondary actions into single interactive area">
      <Title order={2}>Usage</Title>
      <Paper c="p-xl withBorder">
        <Center sx={{ position: 'relative' }}>
          <Button
            onClick={(event) => {
              event.preventDefault();
              if (state.opacity === '0') {
                const buttonBounds = event.target.getBoundingClientRect();
                const parentBounds = event.target.parentElement.getBoundingClientRect();
                state.top = `${buttonBounds.bottom - parentBounds.top + 8}px`;
                state.left = `${buttonBounds.left - parentBounds.left}px`;
                state.opacity = '1';
              } else {
                state.opacity = '0';
              }
            }}
          >
            Toggle menu
          </Button>
          <Menu
            c="size-sm radius-sm"
            sx={{ opacity: state.opacity, top: state.top, left: state.left, width: '12.5rem' }}
          >
            <MenuLabel>Application</MenuLabel>
            <MenuItem icon={<IconSettings size="0.875rem" />}>Settings</MenuItem>
            <MenuItem icon={<IconMessageCircle size="0.875rem" />}>Messages</MenuItem>
            <MenuItem icon={<IconPhoto size="0.875rem" />}>Gallery</MenuItem>
            <MenuItem icon={<IconSearch size="0.875rem" />}>Search</MenuItem>
            <MenuDivider />
            <MenuLabel>Danger zone</MenuLabel>
            <MenuItem icon={<IconArrowsLeftRight size="0.875rem" />}>Transfer my data</MenuItem>
            <MenuItem icon={<IconTrash size="0.875rem" />} c="color-red">
              Delete my account
            </MenuItem>
          </Menu>
        </Center>
      </Paper>
    </DocPage>
  );
}
