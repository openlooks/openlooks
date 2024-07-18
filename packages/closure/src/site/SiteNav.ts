import { Component, ComponentProps } from '../components/Component';
import { Link } from '../components/Link';
import { siteNavLinks } from './SiteNav.links';

import './SiteNav.css';

export class SiteNav extends Component<ComponentProps, HTMLDivElement> {
  constructor() {
    super({});
  }
  //   super(undefined);
  //   // return (
  //   //   <Navbar c={props.forceOpen ? "open" : undefined}>
  //   //     <div className="navlinks">
  //   //       <>
  //   //         {siteNavLinks.map((section) => (
  //   //           <>
  //   //             <div className="section">{section.title}</div>
  //   //             <>
  //   //               {section.links.map((link) => (
  //   //                 <SiteNavLink
  //   //                   key={link.href}
  //   //                   href={link.href}
  //   //                   onClick={(event) => props.onLinkClick(event)}
  //   //                   c={link.dimmed ? "dimmed" : ""}
  //   //                 >
  //   //                   {link.label}
  //   //                 </SiteNavLink>
  //   //               ))}
  //   //             </>
  //   //           </>
  //   //         ))}
  //   //       </>
  //   //     </div>
  //   //   </Navbar>
  //   // );
  // }

  public createDom(): HTMLElement {
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
          }).createDom()
        );
      }
    }

    return el;
  }

  // public updateProps(props: SiteNavProps): void {
  //   this.props = props;
  //   this.render();
  // }

  // public render(): void {
  //   throw new Error('Method not implemented.');
  // }
}
