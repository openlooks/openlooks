import React from "react";
import Text from "../../components/Text";
import Title from "../../components/Title";
import DocPage from "../components/DocPage";
export default function SkeletonPage() {
    return (<DocPage title="Skeleton" description="Indicate content loading state">
      <Title order={2}>Usage</Title>
      <Text>TODO</Text>
    </DocPage>);
}
