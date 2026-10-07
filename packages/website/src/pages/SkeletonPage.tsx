import React from "react";
import { Text } from "@openlooks/react";
import { Title } from "@openlooks/react";
import { DocPage } from "../components/DocPage";
export function SkeletonPage() {
  return (
    <DocPage title="Skeleton" description="Indicate content loading state">
      <Title order={2}>Usage</Title>
      <Text>TODO</Text>
    </DocPage>
  );
}
