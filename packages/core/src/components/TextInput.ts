import { createElement } from '../utils/dom';
import { Component } from './Component';
import { InputWrapper, InputWrapperProps } from './InputWrapper';

export interface TextInputProps extends InputWrapperProps {
  defaultValue?: string;
  onChange?: (e: Event) => void;
}

export class TextInput extends Component<HTMLDivElement, TextInputProps> {
  private inputWrapper?: InputWrapper;
  private inputElement?: HTMLInputElement;

  constructor(public props: TextInputProps) {
    super(props);
  }

  public createDom(): HTMLDivElement {
    this.inputElement = createElement('input', 'textinput', undefined, undefined, this.props);

    if (this.props.name) {
      this.inputElement.name = this.props.name;
    }

    if (this.props.defaultValue !== undefined) {
      this.inputElement.value = this.props.defaultValue;
    }

    if (this.props.onChange) {
      this.inputElement.addEventListener('change', this.props.onChange);
      this.inputElement.addEventListener('input', this.props.onChange);
    }

    this.inputWrapper = new InputWrapper({
      ...this.props,
      children: [this.inputElement],
    });

    this.element = this.inputWrapper.createDom();
    return this.element;
  }
}
