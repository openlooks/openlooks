export interface ButtonProps {
  children: any;
  onClick?: (e: any) => void;
}

export default function Button(props: ButtonProps) {
  return <button onClick={(e) => props.onClick?.(e)}>{props.children}</button>;
}
