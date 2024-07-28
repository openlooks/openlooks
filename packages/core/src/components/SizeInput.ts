import { convertNumberToSize, convertSizeToNumber } from '../utils/size';
import { Component, Size } from './Component';
import { Slider, SliderProps } from './Slider';

export interface SizeInputProps extends Omit<SliderProps, 'min' | 'max' | 'step' | 'marks'> {
  id: string;
  label: string;
  defaultValue?: Size;
}

export class SizeInput extends Component<HTMLDivElement, SliderProps> {
  slider?: Slider;

  constructor(public props: SizeInputProps) {
    super(props);
  }

  public createDom(): HTMLDivElement {
    this.slider = new Slider({
      ...this.props,
      min: 0,
      max: 100,
      step: 25,
      marks: [
        { value: 0, label: 'xs' },
        { value: 25, label: 'sm' },
        { value: 50, label: 'md' },
        { value: 75, label: 'lg' },
        { value: 100, label: 'xl' },
      ],

      defaultValue: convertSizeToNumber(this.props?.defaultValue ?? 'sm').toString(),
      onChange: (event) =>
        this.props?.onChange?.({
          target: {
            value: convertNumberToSize(Number.parseInt((event.target as HTMLInputElement).value)),
          } as HTMLInputElement,
        } as unknown as Event),
    });

    this.element = this.slider.createDom();
    return this.element;
  }
}
