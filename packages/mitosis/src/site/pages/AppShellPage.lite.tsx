import ActionIcon from '../../components/ActionIcon.lite';
import AppShell from '../../components/AppShell.lite';
import Container from '../../components/Container.lite';
import Group from '../../components/Group.lite';
import Header from '../../components/Header.lite';
import Navbar from '../../components/Navbar.lite';
import Stack from '../../components/Stack.lite';
import Title from '../../components/Title.lite';
import UnstyledButton from '../../components/UnstyledButton.lite';
import IconAdjustments from '../../icons/IconAdjustments.lite';
import IconAlertCircle from '../../icons/IconAlertCircle.lite';
import IconDatabase from '../../icons/IconDatabase.lite';
import IconMessages from '../../icons/IconMessages.lite';
import DocHeader from '../components/DocHeader.lite';

export default function AppShellPage() {
  return (
    <>
      <DocHeader title="AppShell" description="Responsive shell for your application with header and navbar" />
      <Container size="sm">
        <Title order={2}>Usage</Title>
        <AppShell
          sx={{ width: '44rem', height: '32rem', border: '1px solid var(--oc-gray-2)' }}
          slotHeader={
            <Header p="md" sx={{ height: '3.75rem', 'border-bottom': '1px solid var(--oc-gray-2)' }}>
              <a href="#" class="openlooks anchor">
                OpenLooks
              </a>
            </Header>
          }
          slotNavbar={
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
          }
        >
          <main class="openlooks main p-xs" style={{ 'background-color': 'var(--oc-gray-0)' }}>
            <p class="openlooks text">Your application goes here</p>
          </main>
        </AppShell>
      </Container>
    </>
  );
}
