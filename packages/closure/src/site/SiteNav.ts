import { Component, ComponentProps } from '../components/Component';
import { Link } from '../components/Link';
import { siteNavLinks } from './SiteNav.links';

import './SiteNav.css';

export class SiteNav extends Component<ComponentProps, HTMLDivElement> {
  public createDom(): HTMLDivElement {
    const el = document.createElement('div');
    el.className = 'navlinks';

    for (const section of siteNavLinks) {
      const sectionEl = document.createElement('div');
      sectionEl.className = 'section';
      sectionEl.textContent = section.title;
      el.appendChild(sectionEl);

      for (const link of section.links) {
        el.appendChild(
          new Link({
            text: link.label,
            href: link.href,
            className: link.dimmed ? 'dimmed' : '',
          }).createDom()
        );
      }
    }

    this.element = el;
    return el;
  }
}
