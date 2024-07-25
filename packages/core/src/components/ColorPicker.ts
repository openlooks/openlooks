import { createElement } from '../utils/dom';
import { Component } from './Component';
import { InputWrapper, InputWrapperProps } from './InputWrapper';

export interface ColorPickerProps extends InputWrapperProps {
  name: string;
  defaultValue?: string;
  onChange?: (e: Event) => void;
}

const colors = [
  'black',
  'gray',
  'red',
  'pink',
  'grape',
  'violet',
  'indigo',
  'blue',
  'cyan',
  'teal',
  'green',
  'lime',
  'yellow',
  'orange',
];

export class ColorPicker extends Component<ColorPickerProps, HTMLDivElement> {
  private inputWrapper?: InputWrapper;
  private innerDiv?: HTMLDivElement;

  constructor(public props: ColorPickerProps) {
    super(props);
  }

  public createDom(): HTMLDivElement {
    this.innerDiv = createElement('div', 'colorpicker');

    for (const color of colors) {
      const div = document.createElement('div');
      const input = document.createElement('input');
      input.type = 'radio';
      input.id = `${this.props.id}-${color}`;
      input.name = this.props.name;
      input.value = color;
      input.checked = color === this.props.defaultValue;
      input.addEventListener('change', (event) => {
        if (this.props.onChange) {
          this.props.onChange(event);
        }
      });
      div.appendChild(input);

      const label = document.createElement('label');
      label.htmlFor = `${this.props.id}-${color}`;
      label.style.background = color === 'black' ? 'black' : `var(--oc-${color}-6)`;
      label.title = color;
      label.textContent = '✓';
      div.appendChild(label);

      this.innerDiv.appendChild(div);
    }

    this.inputWrapper = new InputWrapper({
      ...this.props,
      children: [this.innerDiv],
    });

    this.element = this.inputWrapper.createDom();
    return this.element;
  }
}
