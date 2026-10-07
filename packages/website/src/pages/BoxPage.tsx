import { Box } from "@openlooks/react";
import { Paper } from "@openlooks/react";
import { Text } from "@openlooks/react";
import { Title } from "@openlooks/react";
import { DocPage } from "../components/DocPage";
import { Prism } from "../components/Prism";
export function BoxPage() {
  return (
    <DocPage
      title="Box"
      description="Add inline styles to any element or component with sx"
    >
      <Title order={2}>Usage</Title>
      <Text c="mb-xl">
        Box allows you to use sx prop with any element or component. Box itself
        does not include any styles.
      </Text>
      <Paper c="p-xl withBorder">
        <Box
          c="p-xl radius-xl"
          sx={{ background: "var(--oc-gray-1)", cursor: "pointer" }}
        >
          Box lets you add inline styles with sx prop
        </Box>
      </Paper>
      <Prism
        language="jsx"
        code={`<Box c="p-xl radius-xl" sx={{ background: 'var(--oc-gray-1)', cursor: 'pointer' }}>
  Box lets you add inline styles with sx prop
</Box>`}
      />
    </DocPage>
  );
}
