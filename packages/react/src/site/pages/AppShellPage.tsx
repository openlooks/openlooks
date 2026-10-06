import React from "react";
import ActionIcon from "../../components/ActionIcon";
import Anchor from "../../components/Anchor";
import AppShell from "../../components/AppShell";
import AppShellBody from "../../components/AppShellBody";
import AppShellMain from "../../components/AppShellMain";
import Button from "../../components/Button";
import Group from "../../components/Group";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Stack from "../../components/Stack";
import Text from "../../components/Text";
import Title from "../../components/Title";
import IconAdjustments from "../../icons/IconAdjustments";
import IconAlertCircle from "../../icons/IconAlertCircle";
import IconDatabase from "../../icons/IconDatabase";
import IconMessages from "../../icons/IconMessages";
import DocPage from "../components/DocPage";
import Prism from "../components/Prism";
export default function AppShellPage() {
    return (<DocPage title="AppShell" description="Responsive shell for your application with header and navbar">
      <Title order={2}>Usage</Title>
      <Text c="mb-xl">
        AppShell is a layout component that can be used to create a common Header - Navbar - Footer - Aside - Content
        layout pattern. AppShell, Header, Footer, Aside and Navbar components include bare minimum default styles to
        simplify customization.
      </Text>
      <AppShell sx={{ width: '44rem', height: '32rem', border: '1px solid var(--oc-gray-2)' }}>
        <Header c="p-md" sx={{ height: '3.75rem', 'border-bottom': '1px solid var(--oc-gray-2)' }}>
          <Anchor href="https://openlooks.dev">OpenLooks</Anchor>
        </Header>
        <AppShellBody sx={{ height: 'calc(100vh - 3.75rem)' }}>
          <Navbar c="p-sm">
            <Stack c="justify-flex-start spacing-xs">
              <Button c="variant-subtle color-gray radius-sm p-sm">
                <Group c="position-left spacing-xs">
                  <ActionIcon c="variant-light size-sm color-blue radius-sm">
                    <IconAdjustments size="0.875rem"/>
                  </ActionIcon>
                  Pull Requests
                </Group>
              </Button>
              <Button c="variant-subtle color-gray radius-sm p-sm">
                <Group c="position-left spacing-xs">
                  <ActionIcon c="variant-light size-sm color-cyan radius-sm">
                    <IconAlertCircle size="0.875rem"/>
                  </ActionIcon>
                  Open Issues
                </Group>
              </Button>
              <Button c="variant-subtle color-gray radius-sm p-sm">
                <Group c="position-left spacing-xs">
                  <ActionIcon c="variant-light size-sm color-violet radius-sm">
                    <IconMessages size="0.875rem"/>
                  </ActionIcon>
                  Discussions
                </Group>
              </Button>
              <Button c="variant-subtle color-gray radius-sm p-sm">
                <Group c="position-left spacing-xs">
                  <ActionIcon c="variant-light size-sm color-grape radius-sm">
                    <IconDatabase size="0.875rem"/>
                  </ActionIcon>
                  Databases
                </Group>
              </Button>
            </Stack>
          </Navbar>
          <AppShellMain c="p-xs" sx={{ 'background-color': 'var(--oc-gray-0)' }}>
            <Text>Your application goes here</Text>
          </AppShellMain>
        </AppShellBody>
      </AppShell>
      <Prism language="jsx" code={`import { AppShell, Navbar, Header } from '@openlooks/react';

function Demo() {
  return (
    <AppShell
      padding="md"
      navbar={<Navbar width={{ base: 300 }} p="xs">{/* Navbar content */}</Navbar>}
      header={<Header height={60} p="xs">{/* Header content */}</Header>}
    >
      {/* Your application here */}
    </AppShell>
  );
}`}/>
    </DocPage>);
}
