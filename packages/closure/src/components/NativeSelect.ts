import { createElement } from '../utils/dom';
import { Component } from './Component';
import { InputWrapper, InputWrapperProps } from './InputWrapper';

export interface NativeSelectProps extends InputWrapperProps {
  data: string[];
  defaultValue?: string;
  onChange?: (e: Event) => void;
}

export class NativeSelect extends Component<NativeSelectProps, HTMLDivElement> {
  private inputWrapper?: InputWrapper;
  private selectElement?: HTMLSelectElement;

  constructor(public props: NativeSelectProps) {
    super(props);
  }

  public createDom(): HTMLDivElement {
    this.selectElement = createElement('select', 'nativeselect');

    if (this.props.name) {
      this.selectElement.name = this.props.name;
    }

    if (this.props.onChange) {
      this.selectElement.addEventListener('change', this.props.onChange);
    }

    for (const item of this.props.data) {
      const option = document.createElement('option');
      option.textContent = item;
      option.selected = item === this.props.defaultValue;
      this.selectElement.appendChild(option);
    }

    this.inputWrapper = new InputWrapper({
      ...this.props,
      children: [this.selectElement],
    });

    this.element = this.inputWrapper.createDom();
    return this.element;
  }
}
