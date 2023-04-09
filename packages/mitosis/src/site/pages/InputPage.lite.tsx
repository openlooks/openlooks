import Text from '../../components/Text.lite';
import Title from '../../components/Title.lite';
import DocPage from '../components/DocPage.lite';
import Prism from '../components/Prism.lite';

export default function InputPage() {
  return (
    <DocPage title="Input" description="Base component to create custom inputs">
      <Title order={2}>Disclaimer</Title>
      <Text>
        <strong>Important:</strong>
        {` `}In most cases, you should not use Input component in your application. Input component is a base for other
        inputs and was not designed to be used directly.
      </Text>
      <Prism
        language="jsx"
        code={`// Incorrect usage, input is not accessible
<Input.Wrapper label="Input label">
  <Input />
</Input.Wrapper>

// Use TextInput instead of Input everywhere you want to use Input,
// it is accessible by default and includes Input.Wrapper
<TextInput label="Input label" description="Input description" />`}
      />
      <Title order={2} c="mt-xl">
        Usage
      </Title>
      <Text>
        Input component is used as base for some other inputs (Select, TextInput, Textarea, etc.). The purpose of Input
        is to provide shared styles and features to other inputs:
      </Text>
    </DocPage>
  );
}
