import { ComponentProps } from '../components/Component';
import { SvgComponent } from '../components/SvgComponent';

export interface IconXProps extends ComponentProps {
  size?: string;
}

export class IconX extends SvgComponent {
  constructor(props: IconXProps) {
    super({
      svg: `<svg
width=${props.size || '24'}
height=${props.size || '24'}
viewBox="0 0 24 24"
fill="none"
stroke="currentColor"
stroke-width="2"
stroke-linecap="round"
stroke-linejoin="round"
>
<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
<path d="M18 6l-12 12" />
<path d="M6 6l12 12" />
</svg>`,
    });
  }
}
