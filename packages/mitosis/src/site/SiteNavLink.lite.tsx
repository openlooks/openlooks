import { useContext } from '@builder.io/mitosis';
import Context from '../components/Router.context.lite';
import { buildOpenLooksClassName } from '../utils/classname';

export interface SiteNavLinkProps {
  id?: string;
  c?: string;
  children?: any;
  href: string;
  onClick: (event: MouseEvent) => void;
}

export default function SiteNavLink(props: SiteNavLinkProps) {
  const router = useContext(Context);
  return (
    <a
      id={props.id}
      class={buildOpenLooksClassName('anchor text', props.c)}
      href={props.href}
      aria-current={router.url() === props.href ? 'page' : undefined}
      onClick={(event) => {
        event.preventDefault();
        router.navigate(props.href);
        props.onClick(event);
      }}
    >
      {props.children}
    </a>
  );
}
