import React from "react";
import { Affix } from "@openlooks/react";
import { Button } from "@openlooks/react";
import { Center } from "@openlooks/react";
import { Paper } from "@openlooks/react";
import { Text } from "@openlooks/react";
import { Title } from "@openlooks/react";
import { DocPage } from "../components/DocPage";
import { Prism } from "../components/Prism";
export function AffixPage() {
  return (
    <DocPage
      title="Affix"
      description="Render react node inside portal at fixed position"
    >
      <Title order={2}>Usage</Title>
      <Text>
        Affix renders div element with fixed position inside Portal component.
        Use component to display elements fixed at any position on screen, for
        example, scroll to top button:
      </Text>
      <Paper c="p-xl mt-xl withBorder">
        <Center>
          <>
            <Text>
              Affix is located at the bottom of the screen, scroll to see it
            </Text>
            <Affix>
              <Button
                onClick={() => {
                  (
                    document.querySelector(".main.scrollarea") as HTMLDivElement
                  ).scrollTop = 0;
                }}
              >
                Scroll to top
              </Button>
            </Affix>
          </>
        </Center>
      </Paper>
      <Prism
        language="jsx"
        code={`import { Anchor } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text>Affix is located at the bottom of the screen, scroll to see it</Text>
      <Affix>
        <Button>Scroll to top</Button>
      </Affix>
    </>
  );
}`}
      />
    </DocPage>
  );
}
