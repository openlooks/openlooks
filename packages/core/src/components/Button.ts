import { updateElement } from '../utils/dom';
import { Color, ComponentProps, Size } from './Component';
import { SimpleComponent } from './SimpleComponent';

export interface ButtonProps extends ComponentProps {
  text: string;
  variant?: string;
  color?: Color;
  size?: Size;
  radius?: Size;
  onClick?: (e: MouseEvent) => void;
}

const classKeys: (keyof ButtonProps)[] = ['variant', 'color', 'size', 'radius'];

const defaultProps: Partial<ButtonProps> = {
  variant: 'filled',
  color: 'blue',
  size: 'sm',
  radius: 'sm',
};

export class Button extends SimpleComponent<ButtonProps, HTMLButtonElement> {
  constructor(public props: ButtonProps) {
    super('button', 'button', classKeys, defaultProps, props);
  }

  public createDom(): HTMLButtonElement {
    this.element = super.createDom();
    if (this.props.onClick) {
      this.element.addEventListener('click', this.props.onClick);
    }
    return this.element;
  }

  public updateProps(props: ButtonProps): void {
    super.updateProps(props);
    updateElement(
      this.element as HTMLButtonElement,
      this.baseClassName,
      classKeys,
      defaultProps,
      this.props
    );
  }

  public render(): void {
    const el = this.element as HTMLButtonElement;
    el.textContent = this.props.text;
  }
}

// export default function Button(props: ButtonProps) {
//   return (
//     <button
//       id={props.id}
//       class={buildClassName('button', props.c, { variant: 'filled', color: 'blue', size: 'sm', radius: 'sm' })}
//       style={props.sx as JSX.CSS | undefined}
//       onClick={(event) => props.onClick?.(event)}
//       data-loading={props.loading}
//       disabled={props.loading}
//     >
//       <Show when={props.slotIcon && !props.loading}>
//         <div class={buildClassName('icon', undefined, { variant: 'none' })}>{props.slotIcon}</div>
//       </Show>
//       <Show when={props.loading}>
//         <div class={buildClassName('icon', undefined, { variant: 'none' })}>
//           <Loader c="color-white variant-none" />
//         </div>
//       </Show>
//       {props.children}
//     </button>
//   );
// }
