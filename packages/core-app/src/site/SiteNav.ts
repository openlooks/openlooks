import { Component, ComponentProps, Link } from '@openlooks/core';
import { siteNavLinks } from './SiteNav.links';

import './SiteNav.css';

export class SiteNav extends Component<HTMLDivElement, ComponentProps> {
  public createDom(): HTMLDivElement {
    const el = document.createElement('div');
    el.className = 'navlinks';

    for (const section of siteNavLinks) {
      const sectionEl = document.createElement('div');
      sectionEl.className = 'section';
      sectionEl.textContent = section.title;
      el.appendChild(sectionEl);

      for (const link of section.links) {
        const linkComponent = new Link({
          text: link.label,
          href: link.href,
          className: link.dimmed ? 'dimmed' : '',
        });
        el.appendChild(linkComponent.createDom());
        linkComponent.render();
      }
    }

    this.element = el;
    return el;
  }
}
