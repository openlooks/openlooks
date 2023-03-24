/**
 * Builds a class name based on the base name and the props.
 * @param baseName The base component name.
 * @param props The props of the component.
 * @returns The filtered and joined class names.
 */
export function buildOpenLooksClassName(baseName: string, props: any): string {
  // Important to use `Object.keys` rather than `Object.entries` to avoid issues with Solid Proxy.
  return [
    'openlooks',
    baseName,
    ...Object.keys(props)
      .filter(isClassSystemProp)
      .map((key) => `${key}-${props[key]}`),
    props.class,
    props.className,
  ]
    .filter(Boolean)
    .join(' ');
}

const ignoredProps = ['children', 'class', 'className', 'sx', 'label', 'description', 'error', 'required'];

function isClassSystemProp(key: string): boolean {
  return !ignoredProps.includes(key) && !/^on[A-Z]/.test(key);
}
