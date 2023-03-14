import { Show, useContext } from '@builder.io/mitosis';
import Context from '../Router/Router.context.lite';

export interface RouteProps {
  path: string;
  children: any;
}

export default function Route(props: RouteProps) {
  const ctx = useContext(Context);
  return (
    <Show when={ctx.url() === props.path}>
      <>{props.children}</>
    </Show>
  );
}
