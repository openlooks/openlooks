import ActionIcon from '../../components/ActionIcon.lite';
import Anchor from '../../components/Anchor.lite';
import AppShell from '../../components/AppShell.lite';
import AppShellBody from '../../components/AppShellBody.lite';
import AppShellMain from '../../components/AppShellMain.lite';
import Container from '../../components/Container.lite';
import Group from '../../components/Group.lite';
import Header from '../../components/Header.lite';
import Navbar from '../../components/Navbar.lite';
import Stack from '../../components/Stack.lite';
import Text from '../../components/Text.lite';
import Title from '../../components/Title.lite';
import UnstyledButton from '../../components/UnstyledButton.lite';
import IconAdjustments from '../../icons/IconAdjustments.lite';
import IconAlertCircle from '../../icons/IconAlertCircle.lite';
import IconDatabase from '../../icons/IconDatabase.lite';
import IconMessages from '../../icons/IconMessages.lite';
import DocPage from '../components/DocPage.lite';

export default function AppShellPage() {
  return (
    <DocPage title="AppShell" description="Responsive shell for your application with header and navbar">
      <Title order={2}>Usage</Title>
      <Text mb="xl">
        AppShell is a layout component that can be used to create a common Header - Navbar - Footer - Aside - Content
        layout pattern. AppShell, Header, Footer, Aside and Navbar components include bare minimum default styles to
        simplify customization.
      </Text>
      <AppShell sx={{ width: '44rem', height: '32rem', border: '1px solid var(--oc-gray-2)' }}>
        <Header p="md" sx={{ height: '3.75rem', 'border-bottom': '1px solid var(--oc-gray-2)' }}>
          <Anchor href="https://openlooks.dev">OpenLooks</Anchor>
        </Header>
        <AppShellBody>
          <Navbar p="sm">
            <Stack justify="flex-start" spacing="xs">
              <UnstyledButton radius="sm" p="sm" class="demo-nav-button">
                <Group position="left" spacing="xs">
                  <ActionIcon variant="light" size="sm" color="blue" radius="sm">
                    <IconAdjustments size="0.875rem" />
                  </ActionIcon>
                  Pull Requests
                </Group>
              </UnstyledButton>
              <UnstyledButton radius="sm" p="sm" class="demo-nav-button">
                <Group position="left" spacing="xs">
                  <ActionIcon variant="light" size="sm" color="cyan" radius="sm">
                    <IconAlertCircle size="0.875rem" />
                  </ActionIcon>
                  Open Issues
                </Group>
              </UnstyledButton>
              <UnstyledButton radius="sm" p="sm" class="demo-nav-button">
                <Group position="left" spacing="xs">
                  <ActionIcon variant="light" size="sm" color="violet" radius="sm">
                    <IconMessages size="0.875rem" />
                  </ActionIcon>
                  Discussions
                </Group>
              </UnstyledButton>
              <UnstyledButton radius="sm" p="sm" class="demo-nav-button">
                <Group position="left" spacing="xs">
                  <ActionIcon variant="light" size="sm" color="grape" radius="sm">
                    <IconDatabase size="0.875rem" />
                  </ActionIcon>
                  Databases
                </Group>
              </UnstyledButton>
            </Stack>
          </Navbar>
          <AppShellMain p="xs" sx={{ 'background-color': 'var(--oc-gray-0)' }}>
            <Text>Your application goes here</Text>
          </AppShellMain>
        </AppShellBody>
      </AppShell>
    </DocPage>
  );
}
