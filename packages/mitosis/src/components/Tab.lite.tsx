import { useContext } from '@builder.io/mitosis';
import Context from './Tabs.context.lite';

export interface TabProps {
  value: string;
  children: any;
}

export default function Tab(props: TabProps) {
  const ctx = useContext(Context);
  return (
    <button
      class="openlooks tab"
      role="tab"
      aria-controls={`${props.value}-panel`}
      aria-selected={ctx.currentTab() === props.value}
      onClick={() => ctx.setCurrentTab(props.value)}
    >
      {props.children}
    </button>
  );
}
