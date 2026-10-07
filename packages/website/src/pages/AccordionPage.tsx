import { Text, Title } from "@openlooks/react";
import type { JSX } from "react";
import { DocPage } from "../components/DocPage";

export function AccordionPage(): JSX.Element {
  return (
    <DocPage
      title="Accordion"
      description="Divide content into collapsible sections"
    >
      <Title order={2}>Usage</Title>
      <Text>TODO</Text>
    </DocPage>
  );
}
