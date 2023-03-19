import { useStore } from '@builder.io/mitosis';
import Button from '../components/Button.lite';

export default function Counter() {
  const state = useStore({
    count: 0,
  });

  return (
    <Button variant="filled" color="blue" size="sm" radius="sm" onClick={() => (state.count = state.count + 1)}>
      {`Count: `}
      {state.count}
    </Button>
  );
}
