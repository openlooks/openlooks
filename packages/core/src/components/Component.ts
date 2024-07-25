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

export interface ComponentProps {
  id?: string;
  className?: string;
  style?: Partial<CSSStyleDeclaration>;
  children?: (Component | Node)[];
}

export abstract class Component<
  TProps extends ComponentProps = ComponentProps,
  TElement extends Node = Node,
> {
  public element?: TElement;

  constructor(public props?: TProps) {}

  public abstract createDom(): TElement;

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
