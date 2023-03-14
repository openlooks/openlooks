import { useContext } from '@builder.io/mitosis';
import Context from '../Router/Router.context.lite';

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
      onClick={(event) => {
        event.preventDefault();
        router.navigate(props.href);
      }}
    >
      {props.children}
    </a>
  );
}
