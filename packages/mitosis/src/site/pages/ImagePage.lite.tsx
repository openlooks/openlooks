import Center from '../../components/Center.lite';
import Image from '../../components/Image.lite';
import Paper from '../../components/Paper.lite';
import Text from '../../components/Text.lite';
import Title from '../../components/Title.lite';
import DocPage from '../components/DocPage.lite';
import Prism from '../components/Prism.lite';

export default function ImagePage() {
  return (
    <DocPage title="Image" description="Image with optional placeholder for loading and error state">
      <Title order={2}>Usage</Title>
      <Text>
        Image component is a wrapper around img element with option to change object fit, radius and placeholder:
      </Text>
      <Paper c="p-xl mt-xl withBorder">
        <Center>
          <div style={{ width: '400px', height: '225px', position: 'relative', margin: 'auto', overflow: 'hidden' }}>
            <Image
              c="radius-md"
              src="https://images.unsplash.com/photo-1618359057154-e21ae64350b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
              alt="Dog"
            />
          </div>
        </Center>
      </Paper>
      <Prism
        language="jsx"
        code={`import { Image } from '@openlooks/react';

function Demo() {
  return (
    <Image maw={400} mx="auto" radius="md" src="./avatar.png" alt="Random image" />
  );
}`}
      />
    </DocPage>
  );
}
