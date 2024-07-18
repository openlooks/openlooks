/**
 * Builds a class name based on the base name and the props.
 * @param baseName The base component name.
 * @param props The props of the component.
 * @returns The filtered and joined class names.
 */
export function buildOpenLooksClassName(
  baseName: string,
  propsClassName: string | undefined,
  defaultProps?: any
): string {
  let result = 'openlooks ' + baseName;
  if (propsClassName) {
    result += ' ' + propsClassName;
  }
  if (defaultProps) {
    for (const [key, value] of Object.entries(defaultProps)) {
      const prefix = key + '-';
      if (!result.includes(prefix)) {
        result += ' ' + prefix + value;
      }
    }
  }
  return result;
}
