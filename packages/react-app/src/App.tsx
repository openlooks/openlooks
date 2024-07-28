import { Button } from "@openlooks/react";
import { useState } from "react";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Button
        text={`Count: ${count}`}
        onClick={() => setCount((prev) => prev + 1)}
      />
    </div>
  );
}
