import { Text } from "@openlooks/react";
import { Title } from "@openlooks/react";
import { DocPage } from "../components/DocPage";
export function AspectRatioPage() {
  return (
    <DocPage
      title="AspectRatio"
      description="Maintain responsive consistent width/height ratio"
    >
      <Title order={2}>Usage</Title>
      <Text>
        AspectRatio allows to maintain consistent width/height ratio. It can be
        used to display images, maps, videos and other media.
      </Text>
    </DocPage>
  );
}
