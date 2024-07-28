import { Button as ButtonComponent, ButtonProps } from '@openlooks/core/components/Button';
import React, { Component, ReactNode } from 'react';

export class Button extends Component<ButtonProps> {
  containerRef: React.RefObject<HTMLButtonElement>;
  component: ButtonComponent;
  element?: ReactNode;

  constructor(props: ButtonProps) {
    super(props);
    this.containerRef = React.createRef<HTMLButtonElement>();
    this.component = new ButtonComponent(this.props);
  }

  componentDidMount(): void {
    this.component.decorateDom(this.containerRef.current as HTMLButtonElement);
    this.component.render();
  }

  componentDidUpdate(prevProps: ButtonProps): void {
    if (prevProps !== this.props) {
      this.component.updateProps(this.props);
      this.component.render();
    }
  }

  componentWillUnmount(): void {
    this.component.undecorateDom(this.containerRef.current as HTMLButtonElement);
  }

  render(): ReactNode {
    if (!this.element) {
      // biome-ignore lint/a11y/useButtonType: <explanation>
      this.element = React.createElement('button', {
        type: 'button',
        ref: this.containerRef,
      });
    }
    return this.element;
  }
}
