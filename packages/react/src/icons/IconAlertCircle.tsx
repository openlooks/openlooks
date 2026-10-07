export interface IconAlertCircleProps {
  size?: string;
}
export function IconAlertCircle(props: IconAlertCircleProps) {
  return (
    <svg
      width={props.size || "24"}
      height={props.size || "24"}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
      <path d="M12 8v4" />
      <path d="M12 16h.01" />
    </svg>
  );
}
