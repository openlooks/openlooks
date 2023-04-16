import type { Size } from '../../components/BaseComponentProps';

const numberToSize: Record<number, Size> = { 0: 'xs', 25: 'sm', 50: 'md', 75: 'lg', 100: 'xl' };
const sizeToNumber: Record<Size, number> = { 0: 0, xs: 0, sm: 25, md: 50, lg: 75, xl: 100 };
const iconSizes: Record<Size, string> = {
  0: '0',
  xs: '0.75rem',
  sm: '1rem',
  md: '1.25rem',
  lg: '1.75rem',
  xl: '2.125rem',
};

export function convertSizeToNumber(size: Size): number {
  return sizeToNumber[size];
}

export function convertNumberToSize(size: number): Size {
  return numberToSize[size];
}

export function convertSizeToIconSize(size: Size | undefined, defaultSize: Size): string {
  return iconSizes[size || defaultSize];
}
