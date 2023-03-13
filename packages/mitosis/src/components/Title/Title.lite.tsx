export interface TitleProps {
  order: 1 | 2 | 3 | 4 | 5 | 6;
  children?: any;
}

export default function Title(props: TitleProps) {
  // switch (props.order) {
  //   case 1:
  return <h1 class="openlooks title">{props.children}</h1>;
  //   case 2:
  //     return <h2 class="openlooks title">{props.children}</h2>;
  //   case 3:
  //     return <h3 class="openlooks title">{props.children}</h3>;
  //   case 4:
  //     return <h4 class="openlooks title">{props.children}</h4>;
  //   case 5:
  //     return <h5 class="openlooks title">{props.children}</h5>;
  //   case 6:
  //     return <h6 class="openlooks title">{props.children}</h6>;
  // }
}
