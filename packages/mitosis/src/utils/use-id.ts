export const randomId = (): string => `id-${Math.random().toString(36).slice(2, 11)}`;

export function useId(staticId?: string): string {
  return staticId || randomId();
}
