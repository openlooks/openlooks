import React from "react";
import { Badge } from "@openlooks/react";
import { Button } from "@openlooks/react";
import { Card } from "@openlooks/react";
import { CardSection } from "@openlooks/react";
import { Center } from "@openlooks/react";
import { Group } from "@openlooks/react";
import { Image } from "@openlooks/react";
import { Paper } from "@openlooks/react";
import { Text } from "@openlooks/react";
import { Title } from "@openlooks/react";
import { DocPage } from "../components/DocPage";
import { Prism } from "../components/Prism";
export function CardPage() {
  return (
    <DocPage
      title="Card"
      description="Card with context styles for Image and Divider components"
    >
      <Title order={2}>Usage</Title>
      <Text>
        Card component is a wrapper around Paper component with context styles
        for Card.Section component:
      </Text>
      <Paper c="p-xl mt-xl withBorder">
        <Center>
          <div style={{ "max-width": "21.25rem" }}>
            <Card c="shadow-sm p-lg radius-md withBorder">
              <CardSection>
                <Image
                  src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                  sx={{ height: "160px" }}
                  alt="Norway"
                />
              </CardSection>

              <Group c="position-apart mt-md mb-xs">
                <Text c="weight-500">Norway Fjord Adventures</Text>
                <Badge c="color-pink variant-light">On Sale</Badge>
              </Group>

              <Text c="size-sm color-gray">
                With Fjord Tours you can explore more of the magical fjord
                landscapes with tours and activities on and around the fjords of
                Norway
              </Text>

              <Button c="variant-light color-blue mt-md radius-md fullWidth">
                Book classic tour now
              </Button>
            </Card>
          </div>
        </Center>
      </Paper>
      <Prism
        language="jsx"
        code={`import { CloseButton, Group } from '@openlooks/react';

function Demo() {
  return (
    <Card c="shadow-sm p-lg radius-md withBorder">
      <CardSection>
        <Image
          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          sx={{ height: '160px' }}
          alt="Norway"
        />
      </CardSection>

      <Group c="position-apart mt-md mb-xs">
        <Text c="weight-500">Norway Fjord Adventures</Text>
        <Badge c="color-pink variant-light">On Sale</Badge>
      </Group>

      <Text c="size-sm color-gray">
        With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and
        around the fjords of Norway
      </Text>

      <Button c="variant-light color-blue mt-md radius-md fullWidth">Book classic tour now</Button>
    </Card>
  );
}`}
      />
    </DocPage>
  );
}
