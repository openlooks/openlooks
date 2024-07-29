import {
  Alert,
  Button,
  ButtonProps,
  Color,
  ColorPicker,
  Configurator,
  ConfiguratorControls,
  ConfiguratorStage,
  Container,
  HtmlComponent,
  IconAlertCircle,
  NativeSelect,
  Size,
  SizeInput,
  Stack,
  Text,
  TextInput,
  Title,
} from '@openlooks/core';

export class HomePage extends HtmlComponent {
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
            new Title({ order: 1, text: 'OpenLooks' }),
            new Text({ text: 'Button' }),
            new Text({ text: 'This is a container test' }),
            new Alert({
              className: 'color-blue variant-filled mb-xl',
              icon: new IconAlertCircle({ size: '1rem' }),
              title: 'Project Status',
              children: [
                new Text({
                  className: 'openlooks color-yellow',
                  text: 'This is a pre alpha release of OpenLooks. Many components are unfinished. Expect breaking changes.',
                }),
              ],
            }),
            new Alert({
              className: 'color-teal variant-filled mb-xl',
              icon: new IconAlertCircle({ size: '1rem' }),
              title: 'Framework Support',
              children: [
                new Text({
                  className: 'openlooks color-yellow',
                  text: 'In theory, OpenLooks should work with all Mitosis target frameworks.',
                }),
                new HtmlComponent('br', ''),
                new Text({
                  className: 'openlooks color-yellow',
                  text: 'In practice, only <strong>React</strong>, <strong>Preact</strong>, and <strong>Solid</strong> are actively tested.',
                }),
              ],
            }),
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
          ],
        }),
      ],
    });

    this.buttonProps = buttonProps;
    this.button = button;
  }
}
