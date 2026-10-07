import { Button } from "@openlooks/react";
import type { JSX } from "react";
import { useState } from "react";

export function Counter(): JSX.Element {
  const [count, setCount] = useState(0);
  return (
    <Button onClick={() => setCount(count + 1)}>
      {`Count: `}
      {count}
    </Button>
  );
}
