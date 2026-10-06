import React from "react";
import Text from "../../components/Text";
import Title from "../../components/Title";
import DocPage from "../components/DocPage";
export default function ListPage() {
    return (<DocPage title="List" description="Display ordered or unordered list">
      <Title order={2}>Usage</Title>
      <Text>TODO</Text>
    </DocPage>);
}
