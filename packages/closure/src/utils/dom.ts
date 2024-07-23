import { ComponentProps } from '../components/Component';
import { buildClassName } from './classname';

export function createElement<K extends keyof HTMLElementTagNameMap, T extends ComponentProps>(
  tagName: K,
  baseName: string,
  classKeys?: (keyof T)[],
  defaultProps?: Partial<T> | undefined,
  props?: T | undefined
): HTMLElementTagNameMap[K] {
  const el = document.createElement(tagName);
  el.className = buildClassName(baseName, classKeys, defaultProps, props);
  if (props?.id) {
    el.id = props.id;
  }
  if (props?.style) {
    Object.assign(el.style, props.style);
  }
  return el;
}

export function updateElement<T extends ComponentProps>(
  el: HTMLElement,
  baseName: string,
  classKeys?: (keyof T)[],
  defaultProps?: Partial<T> | undefined,
  props?: T | undefined
): void {
  el.className = buildClassName(baseName, classKeys, defaultProps, props);
  if (props?.id) {
    el.id = props.id;
  }
  if (props?.style) {
    Object.assign(el.style, props.style);
  }
}
