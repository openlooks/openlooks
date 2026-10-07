import React from "react";
import { Button } from "@openlooks/react";
export function Counter() {
  const [count, setCount] = React.useState(0);
  return (
    <Button onClick={() => setCount(count + 1)}>
      {`Count: `}
      {count}
    </Button>
  );
}
