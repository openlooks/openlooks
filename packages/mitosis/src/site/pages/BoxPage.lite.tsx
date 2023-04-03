import Box from '../../components/Box.lite';
import Paper from '../../components/Paper.lite';
import Text from '../../components/Text.lite';
import Title from '../../components/Title.lite';
import DocPage from '../components/DocPage.lite';
import Prism from '../components/Prism.lite';

export default function BoxPage() {
  return (
    <DocPage title="Box" description="Add inline styles to any element or component with sx">
      <Title order={2}>Usage</Title>
      <Text mb="xl">
        Box allows you to use sx prop with any element or component. Box itself does not include any styles.
      </Text>
      <Paper p="xl" withBorder>
        <Box p="xl" radius="xl" sx={{ background: 'var(--oc-gray-1)', cursor: 'pointer' }}>
          Box lets you add inline styles with sx prop
        </Box>
      </Paper>
      <Prism language="jsx">{`<Box p="xl" radius="xl" sx={{ background: 'var(--oc-gray-1)', cursor: 'pointer' }}>
  Box lets you add inline styles with sx prop
</Box>`}</Prism>
    </DocPage>
  );
}
