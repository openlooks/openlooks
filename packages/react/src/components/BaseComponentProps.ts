import { MouseEvent as ReactMouseEvent, ReactNode } from "react";

export type Color = 'black' | 'gray' | 'red' | 'pink' | 'grape' | 'violet' | 'indigo' | 'blue' | 'cyan' | 'teal' | 'green' | 'lime' | 'yellow' | 'orange';

export type Size = 0 | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];

export interface BaseComponentProps {
  id?: string;
  c?: string;
  sx?: Record<string, string | number | boolean>;
  children?: ReactNode;
  onClick?: (e: ReactMouseEvent) => void;
}
