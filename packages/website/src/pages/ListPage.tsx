import React from "react";
import { Text } from "@openlooks/react";
import { Title } from "@openlooks/react";
import { DocPage } from "../components/DocPage";
export function ListPage() {
  return (
    <DocPage title="List" description="Display ordered or unordered list">
      <Title order={2}>Usage</Title>
      <Text>TODO</Text>
    </DocPage>
  );
}
