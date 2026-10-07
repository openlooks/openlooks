import { Text } from "@openlooks/react";
import { Title } from "@openlooks/react";
import { DocPage } from "../components/DocPage";
export function ProgressPage() {
  return (
    <DocPage
      title="Progress"
      description="Give user feedback for status of the task"
    >
      <Title order={2}>Usage</Title>
      <Text>TODO</Text>
    </DocPage>
  );
}
