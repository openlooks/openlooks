import { Component, ComponentChild } from '../components/Component';

export function addChild(parent: Node, child: ComponentChild): void {
  if (child instanceof Component) {
    parent.appendChild(child.createDom());
  } else if (typeof child === 'string') {
    parent.appendChild(document.createTextNode(child));
  } else {
    parent.appendChild(child);
  }
}

export function addChildren(parent: Node, children: ComponentChild[] | undefined): void {
  if (children) {
    for (const child of children) {
      addChild(parent, child);
    }
  }
}
