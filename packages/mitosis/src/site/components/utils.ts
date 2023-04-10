import type { Size } from '../../components/BaseComponentProps';

const numberToSize: Record<number, Size> = { 0: 'xs', 25: 'sm', 50: 'md', 75: 'lg', 100: 'xl' };
const sizeToNumber: Record<Size, number> = { 0: 0, xs: 0, sm: 25, md: 50, lg: 75, xl: 100 };

export function convertSizeToNumber(size: string): number {
  return sizeToNumber[size as Size];
}

export function convertNumberToSize(size: number): Size {
  return numberToSize[size];
}
