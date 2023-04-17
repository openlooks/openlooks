import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';

export interface CardSectionProps {
  id?: string;
  c?: string;
  sx?: Record<string, any>;
  children?: any;
}

export default function CardSection(props: CardSectionProps) {
  return (
    <div id={props.id} class={buildOpenLooksClassName('card-section', props.c)} style={props.sx as JSX.CSS | undefined}>
      {props.children}
    </div>
  );
}
