import React from "react";
import { AppShell } from "@openlooks/react";
import { AppShellBody } from "@openlooks/react";
import { AppShellMain } from "@openlooks/react";
import { Notifications } from "@openlooks/react";
import { Route } from "@openlooks/react";
import { Router } from "@openlooks/react";
import { SiteHeader } from "./SiteHeader";
import { SiteNav } from "./SiteNav";
import { AccordionPage } from "./pages/AccordionPage";
import { ActionIconPage } from "./pages/ActionIconPage";
import { AffixPage } from "./pages/AffixPage";
import { AlertPage } from "./pages/AlertPage";
import { AnchorPage } from "./pages/AnchorPage";
import { AppShellPage } from "./pages/AppShellPage";
import { AspectRatioPage } from "./pages/AspectRatioPage";
import { AutocompletePage } from "./pages/AutocompletePage";
import { AvatarPage } from "./pages/AvatarPage";
import { BackgroundImagePage } from "./pages/BackgroundImagePage";
import { BadgePage } from "./pages/BadgePage";
import { BlockquotePage } from "./pages/BlockquotePage";
import { BoxPage } from "./pages/BoxPage";
import { BreadcrumbsPage } from "./pages/BreadcrumbsPage";
import { BurgerPage } from "./pages/BurgerPage";
import { ButtonPage } from "./pages/ButtonPage";
import { CardPage } from "./pages/CardPage";
import { CenterPage } from "./pages/CenterPage";
import { CheckboxPage } from "./pages/CheckboxPage";
import { ChipPage } from "./pages/ChipPage";
import { CloseButtonPage } from "./pages/CloseButtonPage";
import { CodePage } from "./pages/CodePage";
import { CollapsePage } from "./pages/CollapsePage";
import { ColorInputPage } from "./pages/ColorInputPage";
import { ColorPickerPage } from "./pages/ColorPickerPage";
import { ColorSwatchPage } from "./pages/ColorSwatchPage";
import { ContainerPage } from "./pages/ContainerPage";
import { CopyButtonPage } from "./pages/CopyButtonPage";
import { DialogPage } from "./pages/DialogPage";
import { DividerPage } from "./pages/DividerPage";
import { DrawerPage } from "./pages/DrawerPage";
import { FileButtonPage } from "./pages/FileButtonPage";
import { FileInputPage } from "./pages/FileInputPage";
import { FlexPage } from "./pages/FlexPage";
import { FocusTrapPage } from "./pages/FocusTrapPage";
import { GridPage } from "./pages/GridPage";
import { GroupPage } from "./pages/GroupPage";
import { HighlightPage } from "./pages/HighlightPage";
import { HomePage } from "./pages/HomePage";
import { HoverCardPage } from "./pages/HoverCardPage";
import { ImagePage } from "./pages/ImagePage";
import { IndicatorPage } from "./pages/IndicatorPage";
import { InputPage } from "./pages/InputPage";
import { JsonInputPage } from "./pages/JsonInputPage";
import { KbdPage } from "./pages/KbdPage";
import { ListPage } from "./pages/ListPage";
import { LoaderPage } from "./pages/LoaderPage";
import { LoadingOverlayPage } from "./pages/LoadingOverlayPage";
import { MarkPage } from "./pages/MarkPage";
import { MediaQueryPage } from "./pages/MediaQueryPage";
import { MenuPage } from "./pages/MenuPage";
import { ModalPage } from "./pages/ModalPage";
import { MultiSelectPage } from "./pages/MultiSelectPage";
import { NativeSelectPage } from "./pages/NativeSelectPage";
import { NavLinkPage } from "./pages/NavLinkPage";
import { NotificationPage } from "./pages/NotificationPage";
import { NotificationsPage } from "./pages/NotificationsPage";
import { NumberInputPage } from "./pages/NumberInputPage";
import { OverlayPage } from "./pages/OverlayPage";
import { PaginationPage } from "./pages/PaginationPage";
import { PaperPage } from "./pages/PaperPage";
import { PasswordInputPage } from "./pages/PasswordInputPage";
import { PinInputPage } from "./pages/PinInputPage";
import { PopoverPage } from "./pages/PopoverPage";
import { PortalPage } from "./pages/PortalPage";
import { ProgressPage } from "./pages/ProgressPage";
import { RadioPage } from "./pages/RadioPage";
import { RatingPage } from "./pages/RatingPage";
import { RingProgressPage } from "./pages/RingProgressPage";
import { ScrollAreaPage } from "./pages/ScrollAreaPage";
import { SegmentedControlPage } from "./pages/SegmentedControlPage";
import { SelectPage } from "./pages/SelectPage";
import { SimpleGridPage } from "./pages/SimpleGridPage";
import { SkeletonPage } from "./pages/SkeletonPage";
import { SliderPage } from "./pages/SliderPage";
import { SpacePage } from "./pages/SpacePage";
import { SpoilerPage } from "./pages/SpoilerPage";
import { StackPage } from "./pages/StackPage";
import { StepperPage } from "./pages/StepperPage";
import { SwitchPage } from "./pages/SwitchPage";
import { TablePage } from "./pages/TablePage";
import { TabsPage } from "./pages/TabsPage";
import { TextInputPage } from "./pages/TextInputPage";
import { TextPage } from "./pages/TextPage";
import { TextareaPage } from "./pages/TextareaPage";
import { ThemeIconPage } from "./pages/ThemeIconPage";
import { TimelinePage } from "./pages/TimelinePage";
import { TitlePage } from "./pages/TitlePage";
import { TooltipPage } from "./pages/TooltipPage";
import { TransferListPage } from "./pages/TransferListPage";
import { TransitionPage } from "./pages/TransitionPage";
import { TypographyStylesProviderPage } from "./pages/TypographyStylesProviderPage";
import { UnstyledButtonPage } from "./pages/UnstyledButtonPage";
import "./index.css";
export function App() {
  const [navOpen, setNavOpen] = React.useState(false);
  return (
    <Router>
      <AppShell>
        <SiteHeader
          burgerOpen={navOpen}
          onBurgerClick={() => {
            setNavOpen(!navOpen);
          }}
        />
        <AppShellBody sx={{ height: "calc(100vh - 3.75rem)" }}>
          <SiteNav
            forceOpen={navOpen}
            onLinkClick={(event) => {
              event.preventDefault();
              setNavOpen(false);
            }}
          />
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
