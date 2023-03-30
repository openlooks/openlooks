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
        <RouterLink href="/aspect-ratio" class="dimmed">
          AspectRatio
        </RouterLink>
        <RouterLink href="/center">Center</RouterLink>
        <RouterLink href="/container">Container</RouterLink>
        <RouterLink href="/flex">Flex</RouterLink>
        <RouterLink href="/grid">Grid</RouterLink>
        <RouterLink href="/group">Group</RouterLink>
        <RouterLink href="/media-query" class="dimmed">
          MediaQuery
        </RouterLink>
        <RouterLink href="/simple-grid">SimpleGrid</RouterLink>
        <RouterLink href="/space">Space</RouterLink>
        <RouterLink href="/stack">Stack</RouterLink>
        <div class="section">Buttons</div>
        <RouterLink href="/action-icon">ActionIcon</RouterLink>
        <RouterLink href="/button">Button</RouterLink>
        <RouterLink href="/close-button" class="dimmed">
          CloseButton
        </RouterLink>
        <RouterLink href="/copy-button" class="dimmed">
          CopyButton
        </RouterLink>
        <RouterLink href="/file-button" class="dimmed">
          FileButton
        </RouterLink>
        <RouterLink href="/unstyled-button" class="dimmed">
          UnstyledButton
        </RouterLink>
        <div class="section">Inputs</div>
        <RouterLink href="/autocomplete" class="dimmed">
          Autocomplete
        </RouterLink>
        <RouterLink href="/checkbox" class="dimmed">
          Checkbox
        </RouterLink>
        <RouterLink href="/chip" class="dimmed">
          Chip
        </RouterLink>
        <RouterLink href="/color-input" class="dimmed">
          ColorInput
        </RouterLink>
        <RouterLink href="/color-picker" class="dimmed">
          ColorPicker
        </RouterLink>
        <RouterLink href="/file-input" class="dimmed">
          FileInput
        </RouterLink>
        <RouterLink href="/input">Input</RouterLink>
        <RouterLink href="/json-input" class="dimmed">
          JsonInput
        </RouterLink>
        <RouterLink href="/multi-select" class="dimmed">
          MultiSelect
        </RouterLink>
        <RouterLink href="/native-select" class="dimmed">
          NativeSelect
        </RouterLink>
        <RouterLink href="/number-input" class="dimmed">
          NumberInput
        </RouterLink>
        <RouterLink href="/password-input" class="dimmed">
          PasswordInput
        </RouterLink>
        <RouterLink href="/pin-input" class="dimmed">
          PinInput
        </RouterLink>
        <RouterLink href="/radio" class="dimmed">
          Radio
        </RouterLink>
        <RouterLink href="/rating" class="dimmed">
          Rating
        </RouterLink>
        <RouterLink href="/segmented-control" class="dimmed">
          SegmentedControl
        </RouterLink>
        <RouterLink href="/select" class="dimmed">
          Select
        </RouterLink>
        <RouterLink href="/slider" class="dimmed">
          Slider
        </RouterLink>
        <RouterLink href="/switch" class="dimmed">
          Switch
        </RouterLink>
        <RouterLink href="/textarea" class="dimmed">
          Textarea
        </RouterLink>
        <RouterLink href="/text-input">TextInput</RouterLink>
        <RouterLink href="/transfer-list" class="dimmed">
          TransferList
        </RouterLink>
        <div class="section">Navigation</div>
        <RouterLink href="/anchor">Anchor</RouterLink>
        <RouterLink href="/breadcrumbs" class="dimmed">
          Breadcrumbs
        </RouterLink>
        <RouterLink href="/burger">Burger</RouterLink>
        <RouterLink href="/nav-link">NavLink</RouterLink>
        <RouterLink href="/pagination" class="dimmed">
          Pagination
        </RouterLink>
        <RouterLink href="/stepper" class="dimmed">
          Stepper
        </RouterLink>
        <RouterLink href="/tabs">Tabs</RouterLink>
        <div class="section">Data display</div>
        <RouterLink href="/accordion" class="dimmed">
          Accordion
        </RouterLink>
        <RouterLink href="/avatar" class="dimmed">
          Avatar
        </RouterLink>
        <RouterLink href="/background-image" class="dimmed">
          BackgroundImage
        </RouterLink>
        <RouterLink href="/badge" class="dimmed">
          Badge
        </RouterLink>
        <RouterLink href="/card" class="dimmed">
          Card
        </RouterLink>
        <RouterLink href="/color-swatch" class="dimmed">
          ColorSwatch
        </RouterLink>
        <RouterLink href="/image" class="dimmed">
          Image
        </RouterLink>
        <RouterLink href="/indicator" class="dimmed">
          Indicator
        </RouterLink>
        <RouterLink href="/kbd" class="dimmed">
          Kbd
        </RouterLink>
        <RouterLink href="/spoiler" class="dimmed">
          Spoiler
        </RouterLink>
        <RouterLink href="/theme-icon" class="dimmed">
          ThemeIcon
        </RouterLink>
        <RouterLink href="/timeline" class="dimmed">
          Timeline
        </RouterLink>
        <div class="section">Overlays</div>
        <RouterLink href="/affix" class="dimmed">
          Affix
        </RouterLink>
        <RouterLink href="/dialog" class="dimmed">
          Dialog
        </RouterLink>
        <RouterLink href="/drawer" class="dimmed">
          Drawer
        </RouterLink>
        <RouterLink href="/hover-card" class="dimmed">
          HoverCard
        </RouterLink>
        <RouterLink href="/loading-overlay" class="dimmed">
          LoadingOverlay
        </RouterLink>
        <RouterLink href="/menu">Menu</RouterLink>
        <RouterLink href="/modal" class="dimmed">
          Modal
        </RouterLink>
        <RouterLink href="/overlay" class="dimmed">
          Overlay
        </RouterLink>
        <RouterLink href="/popover" class="dimmed">
          Popover
        </RouterLink>
        <RouterLink href="/tooltip" class="dimmed">
          Tooltip
        </RouterLink>
        <div class="section">Typography</div>
        <RouterLink href="/blockquote" class="dimmed">
          Blockquote
        </RouterLink>
        <RouterLink href="/code">Code</RouterLink>
        <RouterLink href="/highlight" class="dimmed">
          Highlight
        </RouterLink>
        <RouterLink href="/list">List</RouterLink>
        <RouterLink href="/mark" class="dimmed">
          Mark
        </RouterLink>
        <RouterLink href="/table" class="dimmed">
          Table
        </RouterLink>
        <RouterLink href="/text">Text</RouterLink>
        <RouterLink href="/title">Title</RouterLink>
        <RouterLink href="/typography-styles-provider" class="dimmed">
          TypographyStylesProvider
        </RouterLink>
        <div class="section">Feedback</div>
        <RouterLink href="/alert">Alert</RouterLink>
        <RouterLink href="/loader">Loader</RouterLink>
        <RouterLink href="/notification">Notification</RouterLink>
        <RouterLink href="/notifications">Notifications</RouterLink>
        <RouterLink href="/progress" class="dimmed">
          Progress
        </RouterLink>
        <RouterLink href="/ring-progress" class="dimmed">
          RingProgress
        </RouterLink>
        <RouterLink href="/skeleton" class="dimmed">
          Skeleton
        </RouterLink>
        <div class="section">Miscellaneous</div>
        <RouterLink href="/box">Box</RouterLink>
        <RouterLink href="/collapse" class="dimmed">
          Collapse
        </RouterLink>
        <RouterLink href="/divider" class="dimmed">
          Divider
        </RouterLink>
        <RouterLink href="/focus-trap" class="dimmed">
          FocusTrap
        </RouterLink>
        <RouterLink href="/paper">Paper</RouterLink>
        <RouterLink href="/portal" class="dimmed">
          Portal
        </RouterLink>
        <RouterLink href="/scroll-area">ScrollArea</RouterLink>
        <RouterLink href="/transition" class="dimmed">
          Transition
        </RouterLink>
      </div>
    </Navbar>
  );
}
