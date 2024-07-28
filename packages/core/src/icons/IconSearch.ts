import { ComponentProps } from '../components/Component';
import { SvgComponent } from '../components/SvgComponent';

export interface IconSearchProps extends ComponentProps {
  size?: string;
}

export class IconSearch extends SvgComponent {
  constructor(props: IconSearchProps) {
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
<path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
<path d="M21 21l-6 -6" />
</svg>`,
    });
  }
}
