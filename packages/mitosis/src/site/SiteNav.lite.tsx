import Navbar from '../components/Navbar.lite';
import RouterLink from '../components/RouterLink.lite';

import './SiteNav.css';

export interface SiteNavProps {
  forceOpen?: boolean;
}

export default function SiteNav(props: SiteNavProps) {
  return (
    <Navbar class={props.forceOpen ? 'open' : undefined}>
      <div class="navlinks">
        <div class="section">Layout</div>
        <RouterLink href="/app-shell">AppShell</RouterLink>
        <RouterLink href="/aspect-ratio">AspectRatio</RouterLink>
        <RouterLink href="/center">Center</RouterLink>
        <RouterLink href="/container">Container</RouterLink>
        <RouterLink href="/flex">Flex</RouterLink>
        <RouterLink href="/grid">Grid</RouterLink>
        <RouterLink href="/group">Group</RouterLink>
        <RouterLink href="/media-query">MediaQuery</RouterLink>
        <RouterLink href="/simple-grid">SimpleGrid</RouterLink>
        <RouterLink href="/space">Space</RouterLink>
        <RouterLink href="/stack">Stack</RouterLink>
        <div class="section">Buttons</div>
        <RouterLink href="/action-icon">ActionIcon</RouterLink>
        <RouterLink href="/button">Button</RouterLink>
        <RouterLink href="/close-button">CloseButton</RouterLink>
        <RouterLink href="/copy-button">CopyButton</RouterLink>
        <RouterLink href="/file-button">FileButton</RouterLink>
        <RouterLink href="/unstyled-button">UnstyledButton</RouterLink>
        <div class="section">Inputs</div>
        <RouterLink href="/autocomplete">Autocomplete</RouterLink>
        <RouterLink href="/checkbox">Checkbox</RouterLink>
        <RouterLink href="/chip">Chip</RouterLink>
        <RouterLink href="/color-input">ColorInput</RouterLink>
        <RouterLink href="/color-picker">ColorPicker</RouterLink>
        <RouterLink href="/file-input">FileInput</RouterLink>
        <RouterLink href="/input">Input</RouterLink>
        <RouterLink href="/json-input">JsonInput</RouterLink>
        <RouterLink href="/multi-select">MultiSelect</RouterLink>
        <RouterLink href="/native-select">NativeSelect</RouterLink>
        <RouterLink href="/number-input">NumberInput</RouterLink>
        <RouterLink href="/password-input">PasswordInput</RouterLink>
        <RouterLink href="/pin-input">PinInput</RouterLink>
        <RouterLink href="/radio">Radio</RouterLink>
        <RouterLink href="/rating">Rating</RouterLink>
        <RouterLink href="/segmented-control">SegmentedControl</RouterLink>
        <RouterLink href="/select">Select</RouterLink>
        <RouterLink href="/slider">Slider</RouterLink>
        <RouterLink href="/switch">Switch</RouterLink>
        <RouterLink href="/textarea">Textarea</RouterLink>
        <RouterLink href="/text-input">TextInput</RouterLink>
        <RouterLink href="/transfer-list">TransferList</RouterLink>
        <div class="section">Navigation</div>
        <RouterLink href="/anchor">Anchor</RouterLink>
        <RouterLink href="/breadcrumbs">Breadcrumbs</RouterLink>
        <RouterLink href="/burger">Burger</RouterLink>
        <RouterLink href="/nav-link">NavLink</RouterLink>
        <RouterLink href="/pagination">Pagination</RouterLink>
        <RouterLink href="/stepper">Stepper</RouterLink>
        <RouterLink href="/tabs">Tabs</RouterLink>
        <div class="section">Data display</div>
        <RouterLink href="/accordion">Accordion</RouterLink>
        <RouterLink href="/avatar">Avatar</RouterLink>
        <RouterLink href="/background-image">BackgroundImage</RouterLink>
        <RouterLink href="/badge">Badge</RouterLink>
        <RouterLink href="/card">Card</RouterLink>
        <RouterLink href="/color-swatch">ColorSwatch</RouterLink>
        <RouterLink href="/image">Image</RouterLink>
        <RouterLink href="/indicator">Indicator</RouterLink>
        <RouterLink href="/kbd">Kbd</RouterLink>
        <RouterLink href="/spoiler">Spoiler</RouterLink>
        <RouterLink href="/theme-icon">ThemeIcon</RouterLink>
        <RouterLink href="/timeline">Timeline</RouterLink>
        <div class="section">Overlays</div>
        <RouterLink href="/affix">Affix</RouterLink>
        <RouterLink href="/dialog">Dialog</RouterLink>
        <RouterLink href="/drawer">Drawer</RouterLink>
        <RouterLink href="/hover-card">HoverCard</RouterLink>
        <RouterLink href="/loading-overlay">LoadingOverlay</RouterLink>
        <RouterLink href="/menu">Menu</RouterLink>
        <RouterLink href="/modal">Modal</RouterLink>
        <RouterLink href="/overlay">Overlay</RouterLink>
        <RouterLink href="/popover">Popover</RouterLink>
        <RouterLink href="/tooltip">Tooltip</RouterLink>
        <div class="section">Typography</div>
        <RouterLink href="/blockquote">Blockquote</RouterLink>
        <RouterLink href="/code">Code</RouterLink>
        <RouterLink href="/highlight">Highlight</RouterLink>
        <RouterLink href="/list">List</RouterLink>
        <RouterLink href="/mark">Mark</RouterLink>
        <RouterLink href="/table">Table</RouterLink>
        <RouterLink href="/text">Text</RouterLink>
        <RouterLink href="/title">Title</RouterLink>
        <RouterLink href="/typography-styles-provider">TypographyStylesProvider</RouterLink>
        <div class="section">Feedback</div>
        <RouterLink href="/alert">Alert</RouterLink>
        <RouterLink href="/loader">Loader</RouterLink>
        <RouterLink href="/notification">Notification</RouterLink>
        <RouterLink href="/notifications">Notifications</RouterLink>
        <RouterLink href="/progress">Progress</RouterLink>
        <RouterLink href="/ring-progress">RingProgress</RouterLink>
        <RouterLink href="/skeleton">Skeleton</RouterLink>
        <div class="section">Miscellaneous</div>
        <RouterLink href="/box">Box</RouterLink>
        <RouterLink href="/collapse">Collapse</RouterLink>
        <RouterLink href="/divider">Divider</RouterLink>
        <RouterLink href="/focus-trap">FocusTrap</RouterLink>
        <RouterLink href="/paper">Paper</RouterLink>
        <RouterLink href="/portal">Portal</RouterLink>
        <RouterLink href="/scroll-area">ScrollArea</RouterLink>
        <RouterLink href="/transition">Transition</RouterLink>
      </div>
    </Navbar>
  );
}
