import { ComponentProps } from './Component';
import { SimpleComponent } from './SimpleComponent';

export interface ScrollAreaProps extends ComponentProps {
  variant?: string;
  scrollbarSize?: string;
}

const classKeys: (keyof ScrollAreaProps)[] = ['variant', 'scrollbarSize'];

const defaultProps: Partial<ScrollAreaProps> = {
  variant: 'hover',
  scrollbarSize: 'md',
};

export class ScrollArea extends SimpleComponent<ScrollAreaProps, HTMLDivElement> {
  constructor(props?: ComponentProps) {
    super('div', 'scrollarea', classKeys, defaultProps, props);
  }
}

// import { JSX } from '@builder.io/mitosis/jsx-runtime';
// import { buildOpenLooksClassName } from '../utils/classname';

// export interface ScrollAreaProps {
//   id?: string;
//   c?: string;
//   sx?: Record<string, any>;
//   children?: any;
// }

// export default function ScrollArea(props: ScrollAreaProps) {
//   return (
//     <div
//       id={props.id}
//       class={buildOpenLooksClassName('scrollarea', props.c, { variant: 'hover', scrollbarSize: 'md' })}
//       style={props.sx as JSX.CSS | undefined}
//     >
//       {props.children}
//     </div>
//   );
// }
