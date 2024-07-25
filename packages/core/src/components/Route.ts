import { Component } from './Component';

export interface RouteProps {
  path: string;
  component: () => Component;
}

export class Route {
  component?: Component;

  constructor(public props: RouteProps) {}

  public getComponent(): Component {
    if (!this.component) {
      this.component = this.props.component();
      this.component.createDom();
    }
    return this.component;
  }
}
