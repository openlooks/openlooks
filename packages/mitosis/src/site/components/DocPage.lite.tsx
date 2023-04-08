import { onMount } from '@builder.io/mitosis';
import Anchor from '../../components/Anchor.lite';
import Container from '../../components/Container.lite';
import Grid from '../../components/Grid.lite';
import GridCol from '../../components/GridCol.lite';
import Text from '../../components/Text.lite';
import Title from '../../components/Title.lite';
import Prism from './Prism.lite';

import './DocPage.css';

export interface DocPageProps {
  title: string;
  description: string;
  children?: any;
}

export default function DocPage(props: DocPageProps) {
  onMount(() => {
    document.title = props.title + ' | Openlooks';
  });

  return (
    <>
      <div class="doc-header">
        <Container c="size-sm px-sm">
          <Title c="mt-0">{props.title}</Title>
          <Text c="description">{props.description}</Text>
          <Grid c="gutter-xs">
            <GridCol>
              <Text c="color-gray size-sm">Import</Text>
            </GridCol>
            <GridCol c="span-11">
              <Prism language="js" c="p-0 m-0">{`import { ${props.title} } from '@openlooks/mitosis';`}</Prism>
            </GridCol>
            <GridCol>
              <Text c="color-gray size-sm">Source</Text>
            </GridCol>
            <GridCol c="span-11">
              <Anchor href="https://github.com" c="size-sm">
                View source code
              </Anchor>
            </GridCol>
            <GridCol>
              <Text c="color-gray size-sm">Docs</Text>
            </GridCol>
            <GridCol c="span-11">
              <Anchor href="https://github.com" c="size-sm">
                Edit this page
              </Anchor>
            </GridCol>
            <GridCol>
              <Text c="color-gray size-sm">Package</Text>
            </GridCol>
            <GridCol c="span-11">
              <code>{`@openlooks/mitosis`}</code>
            </GridCol>
          </Grid>
        </Container>
      </div>
      <Container c="doc-body size-sm p-sm py-xl">{props.children}</Container>
    </>
  );
}
