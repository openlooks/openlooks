import { createElement } from '../utils/dom';
import { Component } from './Component';
import { InputWrapper, InputWrapperProps } from './InputWrapper';

export interface SliderMark {
  value: number;
  label: string;
}

export interface SliderProps extends InputWrapperProps {
  id: string;
  min?: number;
  max?: number;
  step?: number;
  marks?: SliderMark[];
  defaultValue?: string | number;
  onChange?: (e: Event) => void;
}

export class Slider extends Component<SliderProps, HTMLDivElement> {
  private inputWrapper?: InputWrapper;
  private inputElement?: HTMLInputElement;

  constructor(public props: SliderProps) {
    super(props);
  }

  public createDom(): HTMLDivElement {
    this.inputElement = createElement('input', 'slider', undefined, undefined, this.props);
    this.inputElement.type = 'range';

    if (this.props.name) {
      this.inputElement.name = this.props.name;
    }

    if (this.props.min !== undefined) {
      this.inputElement.min = this.props.min.toString();
    }

    if (this.props.max !== undefined) {
      this.inputElement.max = this.props.max.toString();
    }

    if (this.props.step !== undefined) {
      this.inputElement.step = this.props.step.toString();
    }

    if (this.props.defaultValue !== undefined) {
      this.inputElement.value = this.props.defaultValue.toString();
    }

    if (this.props.onChange) {
      this.inputElement.addEventListener('change', this.props.onChange);
      this.inputElement.addEventListener('input', this.props.onChange);
    }

    const children: Node[] = [this.inputElement];

    if (this.props.marks) {
      const datalist = document.createElement('datalist');
      datalist.id = `${this.props.id}-marks`;
      datalist.className = 'openlooks';
      for (const mark of this.props.marks) {
        const option = document.createElement('option');
        option.value = mark.value.toString();
        option.label = mark.label;
        datalist.appendChild(option);
      }

      children.push(datalist);
    }

    this.inputWrapper = new InputWrapper({
      ...this.props,
      children,
    });

    this.element = this.inputWrapper.createDom();
    return this.element;
  }
}
