import React from "react";
import { Navbar } from "@openlooks/react";
import { siteNavLinks } from "./SiteNav.links";
import { SiteNavLink } from "./SiteNavLink";
import "./SiteNav.css";
export interface SiteNavProps {
  forceOpen: boolean;
  onLinkClick: (event: React.MouseEvent) => void;
}
export function SiteNav(props: SiteNavProps) {
  return (
    <Navbar c={props.forceOpen ? "open" : undefined}>
      <div className="navlinks">
        <>
          {siteNavLinks.map((section) => (
            <>
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
            </>
          ))}
        </>
      </div>
    </Navbar>
  );
}
