import { useContext } from "react";
import { TabsContext } from "./Tabs.context";

export interface TabProps {
  value: string;
  children: any;
}

export function Tab(props: TabProps) {
  const ctx = useContext(TabsContext);
  return (
    <button
      className="openlooks tab"
      role="tab"
      aria-controls={`${props.value}-panel`}
      aria-selected={ctx.currentTab() === props.value}
      onClick={() => ctx.setCurrentTab(props.value)}
    >
      {props.children}
    </button>
  );
}
