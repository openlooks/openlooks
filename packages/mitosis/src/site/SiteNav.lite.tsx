import Navbar from '../components/Navbar/Navbar.lite';
import RouterLink from '../components/RouterLink/RouterLink.lite';

import './SiteNav.css';

export default function SiteNav() {
  return (
    <Navbar>
      <div class="navlinks">
        <div class="section">Layout</div>
        <RouterLink href="appshell">AppShell</RouterLink>
        <RouterLink href="aspectratio">AspectRatio</RouterLink>
        <RouterLink href="center">Center</RouterLink>
        <RouterLink href="container">Container</RouterLink>
        <RouterLink href="flex">Flex</RouterLink>
        <RouterLink href="grid">Grid</RouterLink>
        <RouterLink href="group">Group</RouterLink>
        <RouterLink href="mediaquery">MediaQuery</RouterLink>
        <RouterLink href="simplegrid">SimpleGrid</RouterLink>
        <RouterLink href="space">Space</RouterLink>
        <RouterLink href="stack">Stack</RouterLink>
        <div class="section">Buttons</div>
        <RouterLink href="actionicon">ActionIcon</RouterLink>
        <RouterLink href="button">Button</RouterLink>
        <RouterLink href="closebutton">CloseButton</RouterLink>
        <RouterLink href="copybutton">CopyButton</RouterLink>
        <RouterLink href="filebutton">FileButton</RouterLink>
        <RouterLink href="unstyledbutton">UnstyledButton</RouterLink>
        <div class="section">Inputs</div>
        <RouterLink href="nativeselect">NativeSelect</RouterLink>
        <RouterLink href="slider">Slider</RouterLink>
        <RouterLink href="textinput">TextInput</RouterLink>
        <div class="section">Navigation</div>
        <RouterLink href="anchor">Anchor</RouterLink>
        <RouterLink href="burger">Burger</RouterLink>
        <RouterLink href="tabs">Tabs</RouterLink>
        <div class="section">Data display</div>
        <RouterLink href="accordion">Accordion</RouterLink>
        <RouterLink href="avatar">Avatar</RouterLink>
        <RouterLink href="backgroundimage">BackgroundImage</RouterLink>
        <RouterLink href="badge">Badge</RouterLink>
        <RouterLink href="card">Card</RouterLink>
        <RouterLink href="colorswatch">ColorSwatch</RouterLink>
        <RouterLink href="image">Image</RouterLink>
        <RouterLink href="indicator">Indicator</RouterLink>
        <RouterLink href="kbd">Kbd</RouterLink>
        <RouterLink href="spoiler">Spoiler</RouterLink>
        <RouterLink href="themeicon">ThemeIcon</RouterLink>
        <RouterLink href="timeline">Timeline</RouterLink>
        <div class="section">Overlays</div>
        <RouterLink href="affix">Affix</RouterLink>
        <RouterLink href="dialog">Dialog</RouterLink>
        <RouterLink href="drawer">Drawer</RouterLink>
        <RouterLink href="hovercard">HoverCard</RouterLink>
        <RouterLink href="loadingoverlay">LoadingOverlay</RouterLink>
        <RouterLink href="menu">Menu</RouterLink>
        <RouterLink href="modal">Modal</RouterLink>
        <RouterLink href="overlay">Overlay</RouterLink>
        <RouterLink href="popover">Popover</RouterLink>
        <RouterLink href="tooltip">Tooltip</RouterLink>
        <div class="section">Typography</div>
        <RouterLink href="blockquote">Blockquote</RouterLink>
        <RouterLink href="code">Code</RouterLink>
        <RouterLink href="highlight">Highlight</RouterLink>
        <RouterLink href="list">List</RouterLink>
        <RouterLink href="mark">Mark</RouterLink>
        <RouterLink href="table">Table</RouterLink>
        <RouterLink href="text">Text</RouterLink>
        <RouterLink href="title">Title</RouterLink>
        <div class="section">Feedback</div>
        <RouterLink href="alert">Alert</RouterLink>
        <RouterLink href="loader">Loader</RouterLink>
        <RouterLink href="notification">Notification</RouterLink>
        <RouterLink href="progress">Progress</RouterLink>
        <RouterLink href="ringprogress">RingProgress</RouterLink>
        <RouterLink href="skeleton">Skeleton</RouterLink>
        <div class="section">Miscellaneous</div>
        <RouterLink href="box">Box</RouterLink>
        <RouterLink href="collapse">Collapse</RouterLink>
        <RouterLink href="divider">Divider</RouterLink>
        <RouterLink href="focustrap">FocusTrap</RouterLink>
        <RouterLink href="paper">Paper</RouterLink>
        <RouterLink href="portal">Portal</RouterLink>
        <RouterLink href="scrollarea">ScrollArea</RouterLink>
        <RouterLink href="transition">Transition</RouterLink>
      </div>
    </Navbar>
  );
}
