import Grid from '../../components/Grid.lite';
import GridCol from '../../components/GridCol.lite';
import Paper from '../../components/Paper.lite';
import Text from '../../components/Text.lite';
import Title from '../../components/Title.lite';
import DocPage from '../components/DocPage.lite';

export default function GridPage() {
  return (
    <DocPage title="Grid" description="Flexbox grid system with variable amount of columns">
      <Title order={2}>Usage</Title>
      <Paper p="xl" withBorder>
        <Grid gutter="md">
          <GridCol span={4}>
            <Text p="xl" ta="center" color="blue" fw={700} sx={{ background: 'var(--oc-blue-0)' }}>
              1
            </Text>
          </GridCol>
          <GridCol span={4}>
            <Text p="xl" ta="center" color="blue" fw={700} sx={{ background: 'var(--oc-blue-0)' }}>
              2
            </Text>
          </GridCol>
          <GridCol span={4}>
            <Text p="xl" ta="center" color="blue" fw={700} sx={{ background: 'var(--oc-blue-0)' }}>
              3
            </Text>
          </GridCol>
          <GridCol span={4}>
            <Text p="xl" ta="center" color="blue" fw={700} sx={{ background: 'var(--oc-blue-0)' }}>
              4
            </Text>
          </GridCol>
          <GridCol span={4}>
            <Text p="xl" ta="center" color="blue" fw={700} sx={{ background: 'var(--oc-blue-0)' }}>
              5
            </Text>
          </GridCol>
        </Grid>
      </Paper>
    </DocPage>
  );
}
