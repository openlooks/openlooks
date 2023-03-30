/**
 * Builds a class name based on the base name and the props.
 * @param baseName The base component name.
 * @param props The props of the component.
 * @returns The filtered and joined class names.
 */
export function buildOpenLooksClassName(baseName: string, props: any, defaultProps?: any): string {
  // Important to use `Object.keys` rather than `Object.entries` to avoid issues with Solid Proxy.
  return [
    'openlooks',
    baseName,
    ...getKeys(props, defaultProps)
      .filter(isClassSystemProp)
      .map((key) => getClassName(key, props, defaultProps)),
    props.class,
    props.className,
  ]
    .filter(Boolean)
    .join(' ');
}

function getKeys(props: any, defaultProps?: any): string[] {
  const keys = Object.keys(props);
  if (defaultProps) {
    const defaultKeys = Object.keys(defaultProps);
    return [...new Set([...keys, ...defaultKeys])];
  }
  return keys;
}

function getClassName(key: string, props: any, defaultProps?: any): string | undefined {
  // Beware "0" in truthiness checks, because "0" is a valid value.
  if (key in props) {
    return `${key}-${props[key]}`;
  }
  if (defaultProps && key in defaultProps) {
    return `${key}-${defaultProps[key]}`;
  }
  return undefined;
}

const ignoredProps = [
  'children',
  'class',
  'className',
  'defaultValue',
  'description',
  'error',
  'href',
  'icon',
  'label',
  'required',
  'sx',
  'title',
  'value',
];

function isClassSystemProp(key: string): boolean {
  return !ignoredProps.includes(key) && !/^on[A-Z]/.test(key);
}
