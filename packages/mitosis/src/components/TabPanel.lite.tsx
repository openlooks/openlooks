import { useContext } from '@builder.io/mitosis';
import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';
import { BaseComponentProps } from './BaseComponentProps';
import Context from './Tabs.context.lite';

export interface TabPanelProps extends BaseComponentProps {
  value: string;
}

export default function TabPanel(props: TabPanelProps) {
  const ctx = useContext(Context);
  return (
    <div
      id={`${props.value}-panel`}
      class={buildOpenLooksClassName('tabpanel text', props)}
      style={props.sx as JSX.CSS | undefined}
      role="tabpanel"
      aria-expanded={ctx.currentTab() === props.value}
      hidden={ctx.currentTab() !== props.value}
    >
      {props.children}
    </div>
  );
}