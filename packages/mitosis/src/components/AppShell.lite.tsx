import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';
import { BaseComponentProps } from './BaseComponentProps';

export interface AppShellProps extends BaseComponentProps {
  slotHeader?: any;
  slotNavbar?: any;
}

export default function AppShell(props: AppShellProps) {
  return (
    <div class={buildOpenLooksClassName('appshell', props)} style={props.sx as JSX.CSS | undefined}>
      {props.slotHeader}
      <div class="openlooks body" style={{ height: 'calc(100vh - 3.75rem)', overflow: 'hidden' }}>
        {props.slotNavbar}
        <main class="openlooks main">{props.children}</main>
      </div>
    </div>
  );
}
