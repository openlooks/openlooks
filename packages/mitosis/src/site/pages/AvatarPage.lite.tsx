import Avatar from '../../components/Avatar.lite';
import Group from '../../components/Group.lite';
import Paper from '../../components/Paper.lite';
import Title from '../../components/Title.lite';
import IconStar from '../../icons/IconStar.lite';
import IconUserCircle from '../../icons/IconUserCircle.lite';
import DocPage from '../components/DocPage.lite';
import Prism from '../components/Prism.lite';

export default function AvatarPage() {
  return (
    <DocPage title="Avatar" description="Display user profile image, initials or fallback icon">
      <Title order={2}>Usage</Title>
      <Paper c="p-xl withBorder">
        <Group>
          <Avatar c="radius-xl" src="/avatar.webp" alt="Generated by Midjourney" />
          <Avatar c="radius-xl">
            <IconUserCircle size="1.75rem" />
          </Avatar>
          <Avatar c="color-cyan radius-xl">MK</Avatar>
          <Avatar c="color-blue radius-sm">
            <IconStar size="1.5rem" />
          </Avatar>
        </Group>
      </Paper>
      <Prism language="jsx">{`import { Avatar } from '@openlooks/react';
import { IconStar } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      {/* With image */}
      <Avatar src="avatar.png" alt="it's me" />

      {/* Default placeholder */}
      <Avatar c="radius-xl" />

      {/* Letters with xl radius */}
      <Avatar c="color-cyan" c="radius-xl">MK</Avatar>

      {/* Custom placeholder icon */}
      <Avatar c="color-blue"  c="radius-sm">
        <IconStar size="1.5rem" />
      </Avatar>
    </>
  );
}`}</Prism>
    </DocPage>
  );
}
