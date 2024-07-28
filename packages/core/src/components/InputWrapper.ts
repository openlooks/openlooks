import { addChildren } from '../utils/addchild';
import { createElement } from '../utils/dom';
import { Component, ComponentProps } from './Component';

export interface InputWrapperProps extends ComponentProps {
  name?: string;
  label?: string;
  description?: string;
  error?: string;
  required?: boolean;
}

export class InputWrapper extends Component<HTMLDivElement, InputWrapperProps> {
  public createDom(): HTMLDivElement {
    this.element = createElement('div', 'inputwrapper');

    if (this.props?.label) {
      const label = document.createElement('label');
      label.className = 'label';
      label.textContent = this.props.label;
      if (this.props.required) {
        const required = document.createElement('span');
        required.textContent = ' *';
        label.appendChild(required);
      }
      this.element.appendChild(label);
    }

    if (this.props?.description) {
      const description = document.createElement('div');
      description.className = 'description';
      description.textContent = this.props.description;
      this.element.appendChild(description);
    }

    addChildren(this.element, this.props?.children);

    if (this.props?.error) {
      const error = document.createElement('div');
      error.className = 'error';
      error.textContent = this.props.error;
      this.element.appendChild(error);
    }

    return this.element;
  }
}
