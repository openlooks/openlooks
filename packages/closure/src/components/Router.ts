import { scrollToTop } from '../utils/scrolltop';
import { Component, ComponentProps } from './Component';
import { Route } from './Route';

export interface RouterProps extends ComponentProps {
  routes: Route[];
}

export class Router extends Component<RouterProps, HTMLDivElement> {
  static instance: Router;
  private currentUrl?: string;
  private currentElements: Node[] = [];

  constructor(public props: RouterProps) {
    super(props);
    Router.instance = this;
  }

  public createDom(): HTMLDivElement {
    this.element = document.createElement('div');
    window.addEventListener('popstate', () => {
      this.render();
      scrollToTop();
    });
    return this.element;
  }

  public render(): void {
    if (window.location.pathname === this.currentUrl) {
      return;
    }

    const el = this.element as HTMLDivElement;

    if (this.currentElements.length > 0) {
      for (const element of this.currentElements) {
        el.removeChild(element);
      }
      this.currentElements.length = 0;
    }

    this.currentUrl = window.location.pathname;

    for (const route of this.props.routes) {
      if (route.props.path === this.currentUrl) {
        const childComponent = route.getComponent();
        const childElement = childComponent.getDom();
        el.appendChild(childElement);
        childComponent.render();
        this.currentElements.push(childElement);
      }
    }
  }
}

export function navigate(url: string) {
  window.history.pushState(null, '', url);
  Router.instance.render();
}
