import {
  AppShell,
  AppShellBody,
  AppShellMain,
  Component,
  ComponentProps,
  Group,
  Header,
  Link,
  Route,
  Router,
  ScrollArea,
} from '@openlooks/core';
import { ActionIconPage } from '../pages/ActionIconPage';
import { AvatarPage } from '../pages/AvatarPage';
import { ButtonPage } from '../pages/ButtonPage';
import { CardPage } from '../pages/CardPage';
import { FlexPage } from '../pages/FlexPage';
import { HomePage } from '../pages/HomePage';
import { NotificationPage } from '../pages/NotificationPage';
import { TablePage } from '../pages/TablePage';
import { TestPage } from '../pages/TestPage';
import { SiteNav } from './SiteNav';

export class App extends Component<HTMLDivElement, ComponentProps> {
  readonly appShell: AppShell;

  constructor() {
    super();
    this.appShell = new AppShell({
      children: [
        new Header({
          children: [
            new Group({
              className: 'position-apart spacing-xs p-md',
              children: [
                new Group({
                  className: 'spacing-md',
                  children: [new Link({ href: '/', text: 'OpenLooks' })],
                }),
                new Group({
                  className: 'spacing-xs',
                  children: [
                    new Link({ href: 'https://github.com/openlooks/openlooks', text: 'GitHub' }),
                    new Link({ href: 'https://github.com/openlooks/openlooks', text: 'Discord' }),
                  ],
                }),
              ],
            }),
          ],
        }),
        new AppShellBody({
          style: { height: 'calc(100vh - 3.75rem)' },
          children: [
            new ScrollArea({
              children: [new SiteNav()],
            }),
            new AppShellMain({
              children: [
                new Router({
                  routes: [
                    new Route({ path: '/', component: () => new HomePage() }),
                    new Route({ path: '/action-icon', component: () => new ActionIconPage() }),
                    new Route({ path: '/avatar', component: () => new AvatarPage() }),
                    new Route({ path: '/button', component: () => new ButtonPage() }),
                    new Route({ path: '/card', component: () => new CardPage() }),
                    new Route({ path: '/flex', component: () => new FlexPage() }),
                    new Route({ path: '/notification', component: () => new NotificationPage() }),
                    new Route({ path: '/table', component: () => new TablePage() }),
                    new Route({ path: '/test', component: () => new TestPage() }),
                  ],
                }),
              ],
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
