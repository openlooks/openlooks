import { buildOpenLooksClassName } from '../utils/classname';
import { BaseComponentProps } from './BaseComponentProps';

export default function AppShellBody(props: BaseComponentProps) {
  return (
    <div class={buildOpenLooksClassName('body', props.c)} style={{ height: 'calc(100vh - 3.75rem)' }}>
      {props.children}
    </div>
  );
}
