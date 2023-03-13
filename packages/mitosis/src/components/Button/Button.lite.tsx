export interface ButtonProps {
  children: any;
  onClick?: (e: any) => void;
}

export default function Button(props: ButtonProps) {
  return (
    <button class="openlooks button color-blue size-sm radius-sm variant-filled" onClick={(e) => props.onClick?.(e)}>
      {props.children}
    </button>
  );
}
