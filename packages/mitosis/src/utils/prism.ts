export interface PrismLike {
  manual: boolean;
  languages: Record<string, any>;
  highlight(code: string, languageDefinition: any, languageCode: string): string;
}

declare global {
  interface Window {
    Prism: PrismLike;
  }
}

export function getPrism(): PrismLike {
  window.Prism = window.Prism || {};
  return window.Prism;
}
