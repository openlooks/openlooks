import Text from '../../components/Text.lite';
import Title from '../../components/Title.lite';
import DocPage from '../components/DocPage.lite';

export default function LoadingOverlayPage() {
  return (
    <DocPage title="LoadingOverlay" description="Overlay over given container with centered Loader">
      <Title order={2}>Usage</Title>
      <Text>
        Use LoadingOverlay to overlay element to disable interactions and indicate loading state. Note that elements
        under overlay are still focusable with keyboard. Remember to add additional logic to handle this case.
      </Text>
      <Text>
        Overlay has absolute position and will take 100% of width and height of nearest parent container with relative
        position. Use it when you need to disable user interactions and indicate loading state, for example, while form
        is submitting.
      </Text>
    </DocPage>
  );
}
