import { scrollToTop } from '../utils/scrolltop';
import { Component, ComponentProps } from './Component';
import { Route } from './Route';

export interface RouterProps extends ComponentProps {
  routes: Route[];
}

export class Router extends Component<HTMLDivElement, RouterProps> {
  static instance: Router;
  eventTarget: EventTarget;
  currentUrl?: string;
  private currentElements: Node[] = [];

  constructor(public props: RouterProps) {
    super(props);
    this.eventTarget = new EventTarget();
    Router.instance = this;
  }

  public createDom(): HTMLDivElement {
    this.element = document.createElement('div');
    window.addEventListener('popstate', () => {
      this.render();
      scrollToTop();
      this.eventTarget.dispatchEvent(new Event('change'));
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
  if (url.startsWith('http')) {
    window.location.href = url;
  } else {
    window.history.pushState(null, '', url);
    Router.instance.render();
    Router.instance.eventTarget.dispatchEvent(new Event('change'));
  }
}
