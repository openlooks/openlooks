import { scrollToTop } from '../utils/scrolltop';
import { Component, ComponentProps } from './Component';
import { Route } from './Route';

export interface RouterProps extends ComponentProps {
  routes: Route[];
}

export class Router extends Component<RouterProps, HTMLDivElement> {
  static instance: Router;
  lastUrl?: string;

  constructor(props: RouterProps) {
    super(props);
    Router.instance = this;
  }

  public createDom(): HTMLElement {
    this.element = document.createElement('div');
    window.addEventListener('popstate', () => {
      this.render();
      scrollToTop();
    });
    return this.element;
  }

  public render(): void {
    const prevUrl = this.lastUrl;
    const currentUrl = window.location.pathname;
    const el = this.element as HTMLDivElement;

    for (const route of this.props.routes) {
      if (route.props.path === prevUrl && route.element) {
        el.removeChild(route.element);
      } else if (route.props.path === currentUrl) {
        if (!route.element) {
          route.createDom();
        }
        el.appendChild(route.element as HTMLElement);
      }
    }

    this.lastUrl = currentUrl;
  }
}

export function navigate(url: string) {
  window.history.pushState(null, '', url);
  Router.instance.render();
}
