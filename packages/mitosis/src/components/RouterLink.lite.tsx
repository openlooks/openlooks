import { useContext } from '@builder.io/mitosis';
import Context from './Router.context.lite';

export interface RouterLinkProps {
  href: string;
  children: any;
}

export default function RouterLink(props: RouterLinkProps) {
  const router = useContext(Context);
  return (
    <a
      class="openlooks anchor"
      href={props.href}
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
