import { ComponentProps } from '../components/Component';
import { SvgComponent } from '../components/SvgComponent';

export interface IconArrowsLeftRightProps extends ComponentProps {
  size?: string;
}

export class IconArrowsLeftRight extends SvgComponent {
  constructor(props: IconArrowsLeftRightProps) {
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
<path d="M21 17l-18 0" />
<path d="M6 10l-3 -3l3 -3" />
<path d="M3 7l18 0" />
<path d="M18 20l3 -3l-3 -3" />
</svg>`,
    });
  }
}
