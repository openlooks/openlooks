import { useContext } from '@builder.io/mitosis';
import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';
import { AnchorProps } from './Anchor.lite';
import Context from './Router.context.lite';

export default function RouterLink(props: AnchorProps) {
  const router = useContext(Context);
  return (
    <a
      class={buildOpenLooksClassName('anchor text', props)}
      style={props.sx as JSX.CSS | undefined}
      href={props.href}
      aria-label={props.label}
      aria-current={router.url() === props.href ? 'page' : undefined}
      onClick={(event) => {
        event.preventDefault();
        router.navigate(props.href);
      }}
    >
      {props.children}
    </a>
  );
}
