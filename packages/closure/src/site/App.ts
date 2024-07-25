import { AppShell } from '../components/AppShell';
import { AppShellBody } from '../components/AppShellBody';
import { AppShellMain } from '../components/AppShellMain';
import { Component, ComponentProps } from '../components/Component';
import { Route } from '../components/Route';
import { Router } from '../components/Router';
import { ScrollArea } from '../components/ScrollArea';
import { ButtonPage } from '../pages/ButtonPage';
import { HomePage } from '../pages/HomePage';
import { NotificationPage } from '../pages/NotificationPage';
import { TestPage } from '../pages/TestPage';
import { SiteNav } from './SiteNav';

export class App extends Component<ComponentProps, HTMLDivElement> {
  readonly router: Router;
  readonly appShell: AppShell;

  constructor() {
    super();

    this.router = new Router({
      routes: [
        new Route({ path: '/', component: () => new HomePage() }),
        new Route({ path: '/button', component: () => new ButtonPage() }),
        new Route({ path: '/notification', component: () => new NotificationPage() }),
        new Route({ path: '/test', component: () => new TestPage() }),
      ],
    });

    this.appShell = new AppShell({
      children: [
        new AppShellBody({
          // style: { height: 'calc(100vh - 3.75rem)' },
          style: { height: '100vh' },
          children: [
            new ScrollArea({
              children: [new SiteNav()],
            }),
            new AppShellMain({
              children: [this.router],
            }),
          ],
        }),
      ],
    });
  }

  public createDom(): HTMLDivElement {
    const el = document.createElement('div');
    el.appendChild(this.appShell.createDom());
    this.appShell.render();
    return el;
  }
}
