import { CSSProperties, useContext } from "react";
import { buildOpenLooksClassName } from "../utils/classname";
import { TabsContext } from "./Tabs.context";

export interface TabPanelProps {
  c?: string;
  sx?: Record<string, any>;
  value: string;
  children?: any;
}

export function TabPanel(props: TabPanelProps) {
  const ctx = useContext(TabsContext);
  return (
    <div
      id={`${props.value}-panel`}
      className={buildOpenLooksClassName("tabpanel text", props.c)}
      style={props.sx as CSSProperties | undefined}
      role="tabpanel"
      hidden={ctx.currentTab() !== props.value}
    >
      {props.children}
    </div>
  );
}
