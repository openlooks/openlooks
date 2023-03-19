export interface NavbarProps {
  children: any;
}

export default function Navbar(props: NavbarProps) {
  return (
    <nav class="openlooks navbar scrollarea" style={{ width: '16rem' }}>
      {props.children}
    </nav>
  );
}
