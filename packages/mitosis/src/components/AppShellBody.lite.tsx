import { buildOpenLooksClassName } from '../utils/classname';

export interface AppShellBodyProps {
  id?: string;
  c?: string;
  sx?: Record<string, any>;
  children?: any;
}

export default function AppShellBody(props: AppShellBodyProps) {
  return (
    <div class={buildOpenLooksClassName('body', props.c)} style={{ height: 'calc(100vh - 3.75rem)' }}>
      {props.children}
    </div>
  );
}
