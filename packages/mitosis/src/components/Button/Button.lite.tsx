export interface ButtonProps {
  children: any;
  onClick?: (e: Event) => void;
}

export default function Button(props: ButtonProps) {
  return <button onClick={props.onClick}>{props.children}</button>;
}
