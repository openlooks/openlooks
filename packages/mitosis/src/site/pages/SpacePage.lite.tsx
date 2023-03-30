import { useStore } from '@builder.io/mitosis';
import { Size } from '../../components/BaseComponentProps';
import Configurator from '../../components/Configurator.lite';
import ConfiguratorControls from '../../components/ConfiguratorControls.lite';
import ConfiguratorStage from '../../components/ConfiguratorStage.lite';
import Space from '../../components/Space.lite';
import Stack from '../../components/Stack.lite';
import Text from '../../components/Text.lite';
import Title from '../../components/Title.lite';
import DocPage from '../components/DocPage.lite';
import Prism from '../components/Prism.lite';
import SizeInput from '../components/SizeInput.lite';

export interface SpaceConfigurationProps {
  h: Size;
  w: Size;
}

export default function SpacePage() {
  const state = useStore<SpaceConfigurationProps>({
    h: 'md',
    w: 'md',
  });

  return (
    <DocPage title="Space" description="Add horizontal or vertical spacing from theme">
      <Title order={2}>Usage</Title>
      <Configurator>
        <ConfiguratorStage>
          <div>
            <Text>First line</Text>
            <Space h={state.h} />
            <Text>Second line</Text>
          </div>
        </ConfiguratorStage>
        <ConfiguratorControls>
          <Stack>
            <SizeInput
              id="h"
              label="H"
              defaultValue={state.h}
              onChange={(event) => {
                state.h = event.target.value;
              }}
            />
          </Stack>
        </ConfiguratorControls>
      </Configurator>
      <Prism language="jsx">
        {`import { Text, Space } from '@openlooks/react';

function Demo() {
  return (
    <>
      <Text>First line</Text>
      <Space h="${state.h}" />
      <Text>Second line</Text>
    </>
  );
}`}
      </Prism>
      <Configurator>
        <ConfiguratorStage>
          <div style={{ display: 'flex' }}>
            <Text>First part</Text>
            <Space w={state.w} />
            <Text>Second part</Text>
          </div>
        </ConfiguratorStage>
        <ConfiguratorControls>
          <Stack>
            <SizeInput
              id="w"
              label="W"
              defaultValue={state.w}
              onChange={(event) => {
                state.w = event.target.value;
              }}
            />
          </Stack>
        </ConfiguratorControls>
      </Configurator>
      <Prism language="jsx">
        {`import { Text, Space } from '@openlooks/react';

function Demo() {
  return (
    <>
      <Text>First part</Text>
      <Space w="${state.w}" />
      <Text>Second part</Text>
    </>
  );
}`}
      </Prism>
      <Title order={2} mt="xl">
        Where to use
      </Title>
      <Text mb="lg">
        In most cases, you would want to use margin props instead of Space when working with Mantine components:
      </Text>
      <Prism language="jsx">{`<Text>First line</Text>
// <Space h="md" /> is not required as the same can be achieved with margin
<Text mt="md">Second line</Text>`}</Prism>
      <Text my="lg">
        But when you work with regular HTML elements you do not have access to theme.spacing and you may want to use
        Space component to skip direct theme subscription:
      </Text>
      <Prism language="jsx">{`<div>First line</div>
<Space h="md" />
// Margin props are not available on div, use Space to add spacing from theme
<div>Second line</div>`}</Prism>
    </DocPage>
  );
}
