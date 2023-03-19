/**
 * Builds a class name based on the base name and the props.
 * @param baseName The base component name.
 * @param props The props of the component.
 * @returns The filtered and joined class names.
 */
export function buildOpenLooksClassName(baseName: string, props: any): string {
  return [
    'openlooks',
    baseName,
    ...Object.entries(props)
      .filter(isClassSystemProp)
      .map(([key, value]) => `${key}-${value}`),
    props.class,
    props.className,
  ]
    .filter(Boolean)
    .join(' ');
}

const ignoredProps = ['children', 'class', 'className'];
const valueTypes = ['boolean', 'number', 'string'];

function isClassSystemProp(entry: [string, unknown]): boolean {
  const [key, value] = entry;
  const valueType = typeof value;
  return value !== undefined && value !== null && !ignoredProps.includes(key) && valueTypes.includes(valueType);
}
