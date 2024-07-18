import { AppShell } from '../components/AppShell';
import { AppShellBody } from '../components/AppShellBody';
import { AppShellMain } from '../components/AppShellMain';
import { Component, ComponentProps } from '../components/Component';
import { Fragment } from '../components/Fragment';
import { Link } from '../components/Link';
import { Route } from '../components/Route';
import { Router } from '../components/Router';
import { Text } from '../components/Text';
import { SiteNav } from './SiteNav';

export class App extends Component<ComponentProps, HTMLDivElement> {
  readonly siteNav: SiteNav;
  readonly router: Router;
  readonly appShell: AppShell;

  constructor() {
    super({});

    this.siteNav = new SiteNav();

    this.router = new Router({
      routes: [
        new Route({
          path: '/',
          children: new Fragment({
            children: [
              new Text({ text: 'Home' }),
              new Link({ href: '/test', text: 'At home, go to Test' }),
            ],
          }),
        }),
        new Route({
          path: '/test',
          children: new Fragment({
            children: [
              new Text({ text: 'Test' }),
              new Link({ href: '/', text: 'At test, go to Home' }),
            ],
          }),
        }),
      ],
    });

    this.appShell = new AppShell({
      children: [
        new AppShellBody({
          children: [
            this.siteNav,
            new AppShellMain({
              children: [this.router],
            }),
          ],
        }),
      ],
    });
  }

  public createDom(): HTMLElement {
    const el = document.createElement('div');
    el.appendChild(this.appShell.createDom());
    this.appShell.render();
    return el;
  }
}
