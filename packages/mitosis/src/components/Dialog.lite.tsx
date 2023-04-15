import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';
import Affix from './Affix.lite';

export interface DialogProps {
  id?: string;
  c?: string;
  sx?: Record<string, any>;
  children?: any;
}

export default function Dialog(props: DialogProps) {
  return (
    <Affix>
      <div
        id={props.id}
        class={buildOpenLooksClassName('popover paper', props.c, { shadow: 'xl', radius: 'sm', withBorder: true })}
        style={props.sx as JSX.CSS | undefined}
      >
        {props.children}
      </div>
    </Affix>
  );
}
