import { useContext } from '@builder.io/mitosis';
import { AnchorProps } from '../components/Anchor.lite';
import Context from '../components/Router.context.lite';
import { buildOpenLooksClassName } from '../utils/classname';

export interface SiteNavLinkProps extends AnchorProps {
  onClick: (event: MouseEvent) => void;
  dimmed?: boolean;
}

export default function SiteNavLink(props: SiteNavLinkProps) {
  const router = useContext(Context);
  return (
    <a
      class={buildOpenLooksClassName('anchor text', props)}
      href={props.href}
      aria-current={router.url() === props.href ? 'page' : undefined}
      onClick={(event: MouseEvent) => {
        event.preventDefault();
        router.navigate(props.href);
        props.onClick(event);
      }}
    >
      {props.children}
    </a>
  );
}
