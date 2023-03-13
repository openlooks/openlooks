// Tabler Icons as Web Components
// https://github.com/tabler/tabler-icons

class SvgIcon extends HTMLElement {
  constructor(template) {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.setSize(this.getAttribute('size'));
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'size') {
      this.setSize(newValue);
    }
  }

  setSize(size) {
    if (size) {
      const host = this.shadowRoot.host;
      host.style.width = size;
      host.style.height = size;

      const svg = this.shadowRoot.querySelector('svg');
      svg.setAttribute('width', size);
      svg.setAttribute('height', size);
    }
  }

  static get observedAttributes() {
    return ['size'];
  }
}

function createIcon(html) {
  const template = document.createElement('template');
  template.innerHTML = `<style>:host { display: block; }</style>` + html;
  return class extends SvgIcon {
    constructor() {
      super(template);
    }
  };
}

window.customElements.define(
  'icon-adjustments',
  createIcon(`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-adjustments" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
<circle cx="6" cy="10" r="2" />
<line x1="6" y1="4" x2="6" y2="8" />
<line x1="6" y1="12" x2="6" y2="20" />
<circle cx="12" cy="16" r="2" />
<line x1="12" y1="4" x2="12" y2="14" />
<line x1="12" y1="18" x2="12" y2="20" />
<circle cx="18" cy="7" r="2" />
<line x1="18" y1="4" x2="18" y2="5" />
<line x1="18" y1="9" x2="18" y2="20" />
</svg>`)
);

window.customElements.define(
  'icon-arrows-left-right',
  createIcon(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
<line x1="21" y1="17" x2="3" y2="17" />
<path d="M6 10l-3 -3l3 -3" />
<line x1="3" y1="7" x2="21" y2="7" />
<path d="M18 20l3 -3l-3 -3" />
</svg>`)
);

window.customElements.define(
  'icon-message-circle',
  createIcon(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
<path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />
<line x1="12" y1="12" x2="12" y2="12.01" />
<line x1="8" y1="12" x2="8" y2="12.01" />
<line x1="16" y1="12" x2="16" y2="12.01" />
</svg>`)
);

window.customElements.define(
  'icon-photo',
  createIcon(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
<line x1="15" y1="8" x2="15.01" y2="8" />
<rect x="4" y="4" width="16" height="16" rx="3" />
<path d="M4 15l4 -4a3 5 0 0 1 3 0l5 5" />
<path d="M14 14l1 -1a3 5 0 0 1 3 0l2 2" />
</svg>`)
);

window.customElements.define(
  'icon-search',
  createIcon(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
<circle cx="10" cy="10" r="7" />
<line x1="21" y1="21" x2="15" y2="15" />
</svg>`)
);

window.customElements.define(
  'icon-settings',
  createIcon(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
<path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
<circle cx="12" cy="12" r="3" />
</svg>`)
);

window.customElements.define(
  'icon-sun',
  createIcon(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
<circle cx="12" cy="12" r="4" />
<path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
</svg>`)
);

window.customElements.define(
  'icon-trash',
  createIcon(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
<line x1="4" y1="7" x2="20" y2="7" />
<line x1="10" y1="11" x2="10" y2="17" />
<line x1="14" y1="11" x2="14" y2="17" />
<path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
<path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
</svg>
`)
);
