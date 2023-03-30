import { For } from '@builder.io/mitosis';
import Navbar from '../components/Navbar.lite';
import { siteNavLinks } from './SiteNav.links';
import SiteNavLink from './SiteNavLink.lite';

import './SiteNav.css';

export interface SiteNavProps {
  forceOpen: boolean;
  onLinkClick: (event: MouseEvent) => void;
}

export default function SiteNav(props: SiteNavProps) {
  return (
    <Navbar class={props.forceOpen ? 'open' : undefined}>
      <div class="navlinks">
        <For each={siteNavLinks}>
          {(section) => (
            <>
              <div class="section">{section.title}</div>
              <For each={section.links}>
                {(link) => (
                  <SiteNavLink href={link.href} onClick={(event) => props.onLinkClick(event)} dimmed={link.dimmed}>
                    {link.label}
                  </SiteNavLink>
                )}
              </For>
            </>
          )}
        </For>
      </div>
    </Navbar>
  );
}
