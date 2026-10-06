import React from "react";
import Box from "../../components/Box";
import Paper from "../../components/Paper";
import Text from "../../components/Text";
import Title from "../../components/Title";
import DocPage from "../components/DocPage";
import Prism from "../components/Prism";
export default function BoxPage() {
    return (<DocPage title="Box" description="Add inline styles to any element or component with sx">
      <Title order={2}>Usage</Title>
      <Text c="mb-xl">
        Box allows you to use sx prop with any element or component. Box itself does not include any styles.
      </Text>
      <Paper c="p-xl withBorder">
        <Box c="p-xl radius-xl" sx={{ background: 'var(--oc-gray-1)', cursor: 'pointer' }}>
          Box lets you add inline styles with sx prop
        </Box>
      </Paper>
      <Prism language="jsx" code={`<Box c="p-xl radius-xl" sx={{ background: 'var(--oc-gray-1)', cursor: 'pointer' }}>
  Box lets you add inline styles with sx prop
</Box>`}/>
    </DocPage>);
}
