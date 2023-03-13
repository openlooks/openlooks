import { useStore } from '@builder.io/mitosis';
import Button from '../Button/Button.lite';

export default function Counter() {
  const state = useStore({
    count: 0,
  });

  return (
    <Button onClick={() => (state.count = state.count + 1)}>
      {`Count: `}
      {state.count}
    </Button>
  );
}
