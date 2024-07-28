import { ComponentProps } from '../components/Component';
import { SvgComponent } from '../components/SvgComponent';

export interface IconDatabaseProps extends ComponentProps {
  size?: string;
}

export class IconDatabase extends SvgComponent {
  constructor(props: IconDatabaseProps) {
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
<path d="M12 6m-8 0a8 3 0 1 0 16 0a8 3 0 1 0 -16 0" />
<path d="M4 6v6a8 3 0 0 0 16 0v-6" />
<path d="M4 12v6a8 3 0 0 0 16 0v-6" />
</svg>`,
    });
  }
}
