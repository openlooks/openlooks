import { Show } from '@builder.io/mitosis';

export interface TitleProps {
  order: 1 | 2 | 3 | 4 | 5 | 6;
  children?: any;
}

export default function Title(props: TitleProps) {
  // TODO: Figure out how to use Solid "Dynamic" in Mitosis
  return (
    <>
      <Show when={props.order === 1}>
        <h1 class="openlooks title">{props.children}</h1>
      </Show>
      <Show when={props.order === 2}>
        <h2 class="openlooks title">{props.children}</h2>
      </Show>
      <Show when={props.order === 3}>
        <h3 class="openlooks title">{props.children}</h3>
      </Show>
      <Show when={props.order === 4}>
        <h4 class="openlooks title">{props.children}</h4>
      </Show>
      <Show when={props.order === 5}>
        <h5 class="openlooks title">{props.children}</h5>
      </Show>
      <Show when={props.order === 6}>
        <h6 class="openlooks title">{props.children}</h6>
      </Show>
    </>
  );
}
