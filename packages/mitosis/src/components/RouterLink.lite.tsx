import { useContext } from '@builder.io/mitosis';
import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';
import Context from './Router.context.lite';

export interface RouterLinkProps {
  id?: string;
  c?: string;
  sx?: Record<string, any>;
  label?: string;
  children?: any;
  href: string;
}

export default function RouterLink(props: RouterLinkProps) {
  const router = useContext(Context);
  return (
    <a
      id={props.id}
      class={buildOpenLooksClassName('anchor text', props.c)}
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
