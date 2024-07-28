import { ComponentProps } from '../components/Component';
import { SvgComponent } from '../components/SvgComponent';

export interface IconMessagesProps extends ComponentProps {
  size?: string;
}

export class IconMessages extends SvgComponent {
  constructor(props: IconMessagesProps) {
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
<path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
<path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
</svg>`,
    });
  }
}
