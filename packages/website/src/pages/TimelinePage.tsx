import React from "react";
import { Text } from "@openlooks/react";
import { Title } from "@openlooks/react";
import { DocPage } from "../components/DocPage";
export function TimelinePage() {
  return (
    <DocPage
      title="Timeline"
      description="Display list of events in chronological order"
    >
      <Title order={2}>Usage</Title>
      <Text>TODO</Text>
    </DocPage>
  );
}
