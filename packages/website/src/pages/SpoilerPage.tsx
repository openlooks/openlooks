import React from "react";
import { Text } from "@openlooks/react";
import { Title } from "@openlooks/react";
import { DocPage } from "../components/DocPage";
export function SpoilerPage() {
  return (
    <DocPage
      title="Spoiler"
      description="Hide long sections of content under spoiler"
    >
      <Title order={2}>Usage</Title>
      <Text>TODO</Text>
    </DocPage>
  );
}
