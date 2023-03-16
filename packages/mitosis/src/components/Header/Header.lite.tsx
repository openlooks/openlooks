export interface HeaderProps {
  children: any;
}

export default function Header(props: HeaderProps) {
  return (
    <header class="openlooks header" style={{ height: '3.75rem' }}>
      {props.children}
    </header>
  );
}
