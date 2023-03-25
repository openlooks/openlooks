import AppShell from '../components/AppShell.lite';
import AppShellBody from '../components/AppShellBody.lite';
import AppShellMain from '../components/AppShellMain.lite';
import Notifications from '../components/Notifications.lite';
import Route from '../components/Route.lite';
import Router from '../components/Router.lite';
import AccordionPage from './pages/AccordionPage.lite';
import ActionIconPage from './pages/ActionIconPage.lite';
import AffixPage from './pages/AffixPage.lite';
import AlertPage from './pages/AlertPage.lite';
import AnchorPage from './pages/AnchorPage.lite';
import AppShellPage from './pages/AppShellPage.lite';
import AspectRatioPage from './pages/AspectRatioPage.lite';
import AutocompletePage from './pages/AutocompletePage.lite';
import AvatarPage from './pages/AvatarPage.lite';
import BackgroundImagePage from './pages/BackgroundImagePage.lite';
import BadgePage from './pages/BadgePage.lite';
import BlockquotePage from './pages/BlockquotePage.lite';
import BoxPage from './pages/BoxPage.lite';
import BreadcrumbsPage from './pages/BreadcrumbsPage.lite';
import BurgerPage from './pages/BurgerPage.lite';
import ButtonPage from './pages/ButtonPage.lite';
import CardPage from './pages/CardPage.lite';
import CenterPage from './pages/CenterPage.lite';
import CheckboxPage from './pages/CheckboxPage.lite';
import ChipPage from './pages/ChipPage.lite';
import CloseButtonPage from './pages/CloseButtonPage.lite';
import CodePage from './pages/CodePage.lite';
import CollapsePage from './pages/CollapsePage.lite';
import ColorInputPage from './pages/ColorInputPage.lite';
import ColorPickerPage from './pages/ColorPickerPage.lite';
import ColorSwatchPage from './pages/ColorSwatchPage.lite';
import ContainerPage from './pages/ContainerPage.lite';
import CopyButtonPage from './pages/CopyButtonPage.lite';
import DialogPage from './pages/DialogPage.lite';
import DividerPage from './pages/DividerPage.lite';
import DrawerPage from './pages/DrawerPage.lite';
import FileButtonPage from './pages/FileButtonPage.lite';
import FileInputPage from './pages/FileInputPage.lite';
import FlexPage from './pages/FlexPage.lite';
import FocusTrapPage from './pages/FocusTrapPage.lite';
import GridPage from './pages/GridPage.lite';
import GroupPage from './pages/GroupPage.lite';
import HighlightPage from './pages/HighlightPage.lite';
import HomePage from './pages/HomePage.lite';
import HoverCardPage from './pages/HoverCardPage.lite';
import ImagePage from './pages/ImagePage.lite';
import IndicatorPage from './pages/IndicatorPage.lite';
import InputPage from './pages/InputPage.lite';
import JsonInputPage from './pages/JsonInputPage.lite';
import KbdPage from './pages/KbdPage.lite';
import ListPage from './pages/ListPage.lite';
import LoaderPage from './pages/LoaderPage.lite';
import LoadingOverlayPage from './pages/LoadingOverlayPage.lite';
import MarkPage from './pages/MarkPage.lite';
import MediaQueryPage from './pages/MediaQueryPage.lite';
import MenuPage from './pages/MenuPage.lite';
import ModalPage from './pages/ModalPage.lite';
import MultiSelectPage from './pages/MultiSelectPage.lite';
import NativeSelectPage from './pages/NativeSelectPage.lite';
import NavLinkPage from './pages/NavLinkPage.lite';
import NotificationPage from './pages/NotificationPage.lite';
import NotificationsPage from './pages/NotificationsPage.lite';
import NumberInputPage from './pages/NumberInputPage.lite';
import OverlayPage from './pages/OverlayPage.lite';
import PaginationPage from './pages/PaginationPage.lite';
import PaperPage from './pages/PaperPage.lite';
import PasswordInputPage from './pages/PasswordInputPage.lite';
import PinInputPage from './pages/PinInputPage.lite';
import PopoverPage from './pages/PopoverPage.lite';
import PortalPage from './pages/PortalPage.lite';
import ProgressPage from './pages/ProgressPage.lite';
import RadioPage from './pages/RadioPage.lite';
import RatingPage from './pages/RatingPage.lite';
import RingProgressPage from './pages/RingProgressPage.lite';
import ScrollAreaPage from './pages/ScrollAreaPage.lite';
import SegmentedControlPage from './pages/SegmentedControlPage.lite';
import SelectPage from './pages/SelectPage.lite';
import SimpleGridPage from './pages/SimpleGridPage.lite';
import SkeletonPage from './pages/SkeletonPage.lite';
import SliderPage from './pages/SliderPage.lite';
import SpacePage from './pages/SpacePage.lite';
import SpoilerPage from './pages/SpoilerPage.lite';
import StackPage from './pages/StackPage.lite';
import StepperPage from './pages/StepperPage.lite';
import SwitchPage from './pages/SwitchPage.lite';
import TablePage from './pages/TablePage.lite';
import TabsPage from './pages/TabsPage.lite';
import TextareaPage from './pages/TextareaPage.lite';
import TextInputPage from './pages/TextInputPage.lite';
import TextPage from './pages/TextPage.lite';
import ThemeIconPage from './pages/ThemeIconPage.lite';
import TimelinePage from './pages/TimelinePage.lite';
import TitlePage from './pages/TitlePage.lite';
import TooltipPage from './pages/TooltipPage.lite';
import TransferListPage from './pages/TransferListPage.lite';
import TransitionPage from './pages/TransitionPage.lite';
import TypographyStylesProviderPage from './pages/TypographyStylesProviderPage.lite';
import UnstyledButtonPage from './pages/UnstyledButtonPage.lite';
import SiteHeader from './SiteHeader.lite';
import SiteNav from './SiteNav.lite';

import { useStore } from '@builder.io/mitosis';
import './index.css';

export default function App() {
  const state = useStore({
    navOpen: false,
  });

  return (
    <Router>
      <AppShell>
        <SiteHeader
          onBurgerClick={() => {
            console.log('CODY onBurgerClick');
            state.navOpen = !state.navOpen;
          }}
        />
        <AppShellBody>
          <SiteNav forceOpen={state.navOpen} />
          <AppShellMain>
            <Route path="/">
              <HomePage />
            </Route>
            <Route path="/accordion">
              <AccordionPage />
            </Route>
            <Route path="/action-icon">
              <ActionIconPage />
            </Route>
            <Route path="/affix">
              <AffixPage />
            </Route>
            <Route path="/alert">
              <AlertPage />
            </Route>
            <Route path="/anchor">
              <AnchorPage />
            </Route>
            <Route path="/app-shell">
              <AppShellPage />
            </Route>
            <Route path="/aspect-ratio">
              <AspectRatioPage />
            </Route>
            <Route path="/autocomplete">
              <AutocompletePage />
            </Route>
            <Route path="/avatar">
              <AvatarPage />
            </Route>
            <Route path="/background-image">
              <BackgroundImagePage />
            </Route>
            <Route path="/badge">
              <BadgePage />
            </Route>
            <Route path="/blockquote">
              <BlockquotePage />
            </Route>
            <Route path="/box">
              <BoxPage />
            </Route>
            <Route path="/breadcrumbs">
              <BreadcrumbsPage />
            </Route>
            <Route path="/burger">
              <BurgerPage />
            </Route>
            <Route path="/button">
              <ButtonPage />
            </Route>
            <Route path="/card">
              <CardPage />
            </Route>
            <Route path="/center">
              <CenterPage />
            </Route>
            <Route path="/checkbox">
              <CheckboxPage />
            </Route>
            <Route path="/chip">
              <ChipPage />
            </Route>
            <Route path="/close-button">
              <CloseButtonPage />
            </Route>
            <Route path="/code">
              <CodePage />
            </Route>
            <Route path="/collapse">
              <CollapsePage />
            </Route>
            <Route path="/color-input">
              <ColorInputPage />
            </Route>
            <Route path="/color-picker">
              <ColorPickerPage />
            </Route>
            <Route path="/color-swatch">
              <ColorSwatchPage />
            </Route>
            <Route path="/container">
              <ContainerPage />
            </Route>
            <Route path="/copy-button">
              <CopyButtonPage />
            </Route>
            <Route path="/dialog">
              <DialogPage />
            </Route>
            <Route path="/divider">
              <DividerPage />
            </Route>
            <Route path="/drawer">
              <DrawerPage />
            </Route>
            <Route path="/file-button">
              <FileButtonPage />
            </Route>
            <Route path="/file-input">
              <FileInputPage />
            </Route>
            <Route path="/flex">
              <FlexPage />
            </Route>
            <Route path="/focus-trap">
              <FocusTrapPage />
            </Route>
            <Route path="/grid">
              <GridPage />
            </Route>
            <Route path="/group">
              <GroupPage />
            </Route>
            <Route path="/highlight">
              <HighlightPage />
            </Route>
            <Route path="/hover-card">
              <HoverCardPage />
            </Route>
            <Route path="/image">
              <ImagePage />
            </Route>
            <Route path="/indicator">
              <IndicatorPage />
            </Route>
            <Route path="/input">
              <InputPage />
            </Route>
            <Route path="/json-input">
              <JsonInputPage />
            </Route>
            <Route path="/kbd">
              <KbdPage />
            </Route>
            <Route path="/list">
              <ListPage />
            </Route>
            <Route path="/loader">
              <LoaderPage />
            </Route>
            <Route path="/loading-overlay">
              <LoadingOverlayPage />
            </Route>
            <Route path="/mark">
              <MarkPage />
            </Route>
            <Route path="/media-query">
              <MediaQueryPage />
            </Route>
            <Route path="/menu">
              <MenuPage />
            </Route>
            <Route path="/modal">
              <ModalPage />
            </Route>
            <Route path="/multi-select">
              <MultiSelectPage />
            </Route>
            <Route path="/native-select">
              <NativeSelectPage />
            </Route>
            <Route path="/nav-link">
              <NavLinkPage />
            </Route>
            <Route path="/notification">
              <NotificationPage />
            </Route>
            <Route path="/notifications">
              <NotificationsPage />
            </Route>
            <Route path="/number-input">
              <NumberInputPage />
            </Route>
            <Route path="/overlay">
              <OverlayPage />
            </Route>
            <Route path="/pagination">
              <PaginationPage />
            </Route>
            <Route path="/paper">
              <PaperPage />
            </Route>
            <Route path="/password-input">
              <PasswordInputPage />
            </Route>
            <Route path="/pin-input">
              <PinInputPage />
            </Route>
            <Route path="/popover">
              <PopoverPage />
            </Route>
            <Route path="/portal">
              <PortalPage />
            </Route>
            <Route path="/progress">
              <ProgressPage />
            </Route>
            <Route path="/radio">
              <RadioPage />
            </Route>
            <Route path="/rating">
              <RatingPage />
            </Route>
            <Route path="/ring-progress">
              <RingProgressPage />
            </Route>
            <Route path="/scroll-area">
              <ScrollAreaPage />
            </Route>
            <Route path="/segmented-control">
              <SegmentedControlPage />
            </Route>
            <Route path="/select">
              <SelectPage />
            </Route>
            <Route path="/simple-grid">
              <SimpleGridPage />
            </Route>
            <Route path="/skeleton">
              <SkeletonPage />
            </Route>
            <Route path="/slider">
              <SliderPage />
            </Route>
            <Route path="/space">
              <SpacePage />
            </Route>
            <Route path="/spoiler">
              <SpoilerPage />
            </Route>
            <Route path="/stack">
              <StackPage />
            </Route>
            <Route path="/stepper">
              <StepperPage />
            </Route>
            <Route path="/switch">
              <SwitchPage />
            </Route>
            <Route path="/table">
              <TablePage />
            </Route>
            <Route path="/tabs">
              <TabsPage />
            </Route>
            <Route path="/text">
              <TextPage />
            </Route>
            <Route path="/text-input">
              <TextInputPage />
            </Route>
            <Route path="/textarea">
              <TextareaPage />
            </Route>
            <Route path="/theme-icon">
              <ThemeIconPage />
            </Route>
            <Route path="/timeline">
              <TimelinePage />
            </Route>
            <Route path="/title">
              <TitlePage />
            </Route>
            <Route path="/tooltip">
              <TooltipPage />
            </Route>
            <Route path="/transfer-list">
              <TransferListPage />
            </Route>
            <Route path="/transition">
              <TransitionPage />
            </Route>
            <Route path="/typography-styles-provider">
              <TypographyStylesProviderPage />
            </Route>
            <Route path="/unstyled-button">
              <UnstyledButtonPage />
            </Route>
            <Notifications />
          </AppShellMain>
        </AppShellBody>
      </AppShell>
    </Router>
  );
}
