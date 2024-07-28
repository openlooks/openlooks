export type Color =
  | 'black'
  | 'gray'
  | 'red'
  | 'pink'
  | 'grape'
  | 'violet'
  | 'indigo'
  | 'blue'
  | 'cyan'
  | 'teal'
  | 'green'
  | 'lime'
  | 'yellow'
  | 'orange';

export type Size = 0 | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];

export type ComponentChild = Component | Node | string;

export interface ComponentProps {
  id?: string;
  className?: string;
  style?: Partial<CSSStyleDeclaration>;
  children?: ComponentChild[];
}

export abstract class Component<
  TElement extends Node = Node,
  TProps extends ComponentProps = ComponentProps,
> {
  public element?: TElement;

  constructor(public props?: TProps) {}

  public abstract createDom(): TElement;

  public destroyDom(): void {
    // Children classes should override this method
  }

  public decorateDom(element: TElement): void {
    this.element = element;
  }

  public undecorateDom(_element: TElement): void {
    this.element = undefined;
  }

  public getDom(): TElement {
    if (!this.element) {
      this.element = this.createDom();
    }
    return this.element;
  }

  public updateProps(props: TProps): void {
    this.props = props;
  }

  public render(): void {
    if (this.props?.children) {
      for (const child of this.props.children) {
        if (child instanceof Component) {
          child.render();
        }
      }
    }
  }
}
