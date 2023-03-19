export interface AnchorProps {
  href: string;
  children: any;
}

export default function Anchor(props: AnchorProps) {
  return (
    <a class="openlooks anchor" href={props.href}>
      {props.children}
    </a>
  );
}
