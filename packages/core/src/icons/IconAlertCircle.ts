import { ComponentProps } from '../components/Component';
import { SvgComponent } from '../components/SvgComponent';

export interface IconAlertCircleProps extends ComponentProps {
  size?: string;
}

export class IconAlertCircle extends SvgComponent {
  constructor(props: IconAlertCircleProps) {
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
<path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
<path d="M12 8v4" />
<path d="M12 16h.01" />
</svg>`,
    });
  }
}
