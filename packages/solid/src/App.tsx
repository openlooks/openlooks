import type { Component } from 'solid-js';
import Counter from './components/Counter/Counter';

export const App: Component = () => {
  return (
    <div>
      <h1>Vite + Solid</h1>
      <Counter />
    </div>
  );
};
