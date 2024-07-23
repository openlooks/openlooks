import { ComponentProps } from '../components/Component';

/**
 * Builds a class name based on the base name and the props.
 * @param baseName The base component name.
 * @param classKeys The keys to use for the class names.
 * @param defaultProps The default props of the component.
 * @param props The props of the component.
 * @returns The filtered and joined class names.
 */
export function buildClassName<T extends ComponentProps>(
  baseName: string,
  classKeys: (keyof T)[] | undefined,
  defaultProps: Partial<T> | undefined,
  props: T | undefined
): string {
  let result = `openlooks ${baseName}`;
  if (props?.className) {
    result += ` ${props.className}`;
  }
  if (classKeys) {
    for (const key of classKeys) {
      const prefix = `${key as string}-`;
      if (!result.includes(prefix)) {
        const value = props?.[key] ?? defaultProps?.[key];
        if (value) {
          result += ` ${prefix}${value}`;
        }
      }
    }
  }
  return result;
}
