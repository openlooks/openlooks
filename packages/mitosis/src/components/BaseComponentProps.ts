export type Color =
  | 'black'
  | 'gray'
  | 'red'
  | 'pink'
  | 'grape'
  | 'violet'
  | 'indigo'
  | 'blue'
  | 'cyan'
  | 'teal'
  | 'green'
  | 'lime'
  | 'yellow'
  | 'orange';

export type Size = 0 | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];

export interface BaseComponentProps {
  // All components can optionally specify id
  id?: string;

  // Mitosis CSS styles
  // Note that we cannot use the "style" prop name because it is reserved by Vue.
  // Note that we cannot use the "css" prop name because it is reserved by Mitosis.
  // See: https://github.com/BuilderIO/mitosis/blob/main/docs/components.md#css
  // Instead we use "sx" based on Mantine: https://mantine.dev/styles/sx/
  // Ideally we could use "JSX.CSS" or "CSSProperties" but we cannot use those in Mitosis helpers currently
  sx?: Record<string, string | number>;

  // Custom class names appended to the end of system generated class names
  // See: https://github.com/BuilderIO/mitosis/blob/main/docs/components.md#class-vs-classname
  class?: string;

  // Optional children
  // See: https://github.com/BuilderIO/mitosis/blob/main/docs/components.md#children
  children?: any;

  // OpenLooks color system
  // Uses Open Color: https://yeun.github.io/open-color/
  // Based on Mantine color system: https://mantine.dev/theming/colors/
  color?: Color;

  // Border radius
  radius?: Size;

  // Font weight
  weight?: number;

  m?: Size;
  my?: Size;
  mx?: Size;
  mt?: Size;
  mb?: Size;
  ml?: Size;
  mr?: Size;

  p?: Size;
  py?: Size;
  px?: Size;
  pt?: Size;
  pb?: Size;
  pl?: Size;
  pr?: Size;
}
