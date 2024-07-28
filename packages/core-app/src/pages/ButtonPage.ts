import {
  Button,
  ButtonProps,
  Color,
  ColorPicker,
  Configurator,
  ConfiguratorControls,
  ConfiguratorStage,
  Container,
  HtmlComponent,
  Link,
  NativeSelect,
  Size,
  SizeInput,
  Stack,
  Text,
  TextInput,
  Title,
} from '@openlooks/core';

export class ButtonPage extends HtmlComponent {
  readonly buttonProps: ButtonProps;
  readonly button: Button;

  constructor() {
    const buttonProps: ButtonProps = {
      variant: 'filled',
      color: 'blue',
      radius: 'sm',
      size: 'sm',
      text: 'Click me',
    };

    const button = new Button(buttonProps);

    super('div', '', undefined, undefined, {
      children: [
        new Container({
          className: 'doc-body size-sm p-sm py-xl',
          children: [
            new Title({ order: 1, text: 'Button' }),
            new Text({ text: 'Button' }),
            new Text({ text: 'This is a container test' }),
            new Configurator({
              children: [
                new ConfiguratorStage({
                  children: [button],
                }),
                new ConfiguratorControls({
                  children: [
                    new Stack({
                      children: [
                        new NativeSelect({
                          data: ['filled', 'light', 'outline', 'subtle'],
                          label: 'Variant',
                          defaultValue: 'filled',
                          onChange: (e) => {
                            buttonProps.variant = (e.target as HTMLInputElement).value;
                            button.updateProps(buttonProps);
                            button.render();
                          },
                        }),
                        new ColorPicker({
                          name: 'color',
                          label: 'Color',
                          defaultValue: buttonProps.color,
                          onChange: (e) => {
                            buttonProps.color = (e.target as HTMLInputElement).value as Color;
                            button.updateProps(buttonProps);
                            button.render();
                          },
                        }),
                        new SizeInput({
                          id: 'radius',
                          name: 'radius',
                          label: 'Radius',
                          defaultValue: buttonProps.radius,
                          onChange: (e) => {
                            buttonProps.radius = (e.target as HTMLInputElement).value as Size;
                            button.updateProps(buttonProps);
                            button.render();
                          },
                        }),
                        new SizeInput({
                          id: 'size',
                          name: 'size',
                          label: 'Size',
                          defaultValue: buttonProps.size,
                          onChange: (e) => {
                            buttonProps.size = (e.target as HTMLInputElement).value as Size;
                            button.updateProps(buttonProps);
                            button.render();
                          },
                        }),
                        new TextInput({
                          name: 'text',
                          label: 'Text',
                          defaultValue: buttonProps.text,
                          onChange: (e) => {
                            buttonProps.text = (e.target as HTMLInputElement).value;
                            button.updateProps(buttonProps);
                            button.render();
                          },
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            new Link({ href: '/', text: 'Back to home' }),
          ],
        }),
      ],
    });

    this.buttonProps = buttonProps;
    this.button = button;
  }
}
