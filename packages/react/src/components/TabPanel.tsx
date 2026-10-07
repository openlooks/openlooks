import type { JSX } from "react";
import { useContext } from "react";
import { buildOpenLooksClassName } from "../utils/classname";
import { TabsContext } from "./Tabs.context";
import type { BaseComponentProps } from "./BaseComponentProps";

export interface TabPanelProps extends BaseComponentProps {
  value: string;
}

export function TabPanel(props: TabPanelProps): JSX.Element {
  const ctx = useContext(TabsContext);
  return (
    <div
      id={`${props.value}-panel`}
      className={buildOpenLooksClassName("tabpanel text", props.c)}
      style={props.sx}
      role="tabpanel"
      hidden={ctx.currentTab() !== props.value}
    >
      {props.children}
    </div>
  );
}
