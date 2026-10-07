import { Navbar } from "@openlooks/react";
import type { JSX } from "react";
import { Fragment, MouseEvent } from "react";
import "./SiteNav.css";
import { siteNavLinks } from "./SiteNav.links";
import { SiteNavLink } from "./SiteNavLink";

export interface SiteNavProps {
  forceOpen: boolean;
  onLinkClick: (event: MouseEvent) => void;
}

export function SiteNav(props: SiteNavProps): JSX.Element {
  return (
    <Navbar c={props.forceOpen ? "open" : undefined}>
      <div className="navlinks">
        <>
          {siteNavLinks.map((section) => (
            <Fragment key={section.title}>
              <div className="section">{section.title}</div>
              <>
                {section.links.map((link) => (
                  <SiteNavLink
                    key={link.href}
                    href={link.href}
                    onClick={(event) => props.onLinkClick(event)}
                    c={link.dimmed ? "dimmed" : ""}
                  >
                    {link.label}
                  </SiteNavLink>
                ))}
              </>
            </Fragment>
          ))}
        </>
      </div>
    </Navbar>
  );
}
