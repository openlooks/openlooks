import React from "react";
import Container from "../../components/Container";
import Text from "../../components/Text";
import Title from "../../components/Title";
import DocPage from "../components/DocPage";
import Prism from "../components/Prism";
export default function ContainerPage() {
    return (<DocPage title="Container" description="Center content horizontally with predefined max-width">
      <Title order={2}>Usage</Title>
      <Text>
        Container is the most basic layout element, it centers content horizontally and adds horizontal padding from
        theme.
      </Text>
      <Container c="my-xl" sx={{ background: 'var(--oc-blue-0)' }}>
        <Text>Default container</Text>
      </Container>
      <Container c="my-xl size-xs px-xs" sx={{ background: 'var(--oc-blue-0)' }}>
        <Text>xs container with xs horizontal padding</Text>
      </Container>
      <Prism language="jsx" code={`import { Container } from '@openlooks/react';

function Demo() {
  return (
    <>
      <Container>
        Default container
      </Container>

      <Container c="size-xs px-xs">
        xs container with xs horizontal padding
      </Container>
    </>
  );
}`}/>
    </DocPage>);
}
