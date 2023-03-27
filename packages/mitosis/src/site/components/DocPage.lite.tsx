import Anchor from '../../components/Anchor.lite';
import Container from '../../components/Container.lite';
import Grid from '../../components/Grid.lite';
import GridCol from '../../components/GridCol.lite';
import Text from '../../components/Text.lite';
import Title from '../../components/Title.lite';
import './DocPage.css';
import Prism from './Prism.lite';

export interface DocPageProps {
  title: string;
  description: string;
  children?: any;
}

export default function DocPage(props: DocPageProps) {
  return (
    <>
      <div class="doc-header">
        <Container size="sm" px="sm">
          <Title order={1} mt={0}>
            {props.title}
          </Title>
          <Text class="description">{props.description}</Text>
          <Grid gutter="xs">
            <GridCol>
              <Text color="gray" size="sm">
                Import
              </Text>
            </GridCol>
            <GridCol span={11}>
              <Prism language="js" p={0} m={0}>{`import { ${props.title} } from '@openlooks/mitosis';`}</Prism>
            </GridCol>
            <GridCol>
              <Text color="gray" size="sm">
                Source
              </Text>
            </GridCol>
            <GridCol span={11}>
              <Anchor href="https://github.com" size="sm">
                View source code
              </Anchor>
            </GridCol>
            <GridCol>
              <Text color="gray" size="sm">
                Docs
              </Text>
            </GridCol>
            <GridCol span={11}>
              <Anchor href="https://github.com" size="sm">
                Edit this page
              </Anchor>
            </GridCol>
            <GridCol>
              <Text color="gray" size="sm">
                Package
              </Text>
            </GridCol>
            <GridCol span={11}>
              <code>{`@openlooks/mitosis`}</code>
            </GridCol>
          </Grid>
        </Container>
      </div>
      <Container size="sm" px="sm" py="xl">
        {props.children}
      </Container>
    </>
  );
}
