export interface AppShellProps {
  slotHeader?: any;
  slotNavbar?: any;
  children: any;
}

export default function AppShell(props: AppShellProps) {
  return (
    <div class="openlooks appshell">
      {props.slotHeader}
      <div class="openlooks body" style={{ height: 'calc(100vh - 3.75rem)' }}>
        {props.slotNavbar}
        <main class="openlooks main">{props.children}</main>
      </div>
    </div>
  );
}
