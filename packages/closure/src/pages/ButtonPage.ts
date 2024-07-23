import { Button, ButtonProps } from '../components/Button';
import { ColorPicker } from '../components/ColorPicker';
import { Color, Size } from '../components/Component';
import { Configurator } from '../components/Configurator';
import { ConfiguratorControls } from '../components/ConfiguratorControls';
import { ConfiguratorStage } from '../components/ConfiguratorStage';
import { Container } from '../components/Container';
import { Link } from '../components/Link';
import { NativeSelect } from '../components/NativeSelect';
import { SimpleComponent } from '../components/SimpleComponent';
import { SizeInput } from '../components/SizeInput';
import { Stack } from '../components/Stack';
import { Text } from '../components/Text';
import { TextInput } from '../components/TextInput';
import { Title } from '../components/Title';

export class ButtonPage extends SimpleComponent {
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
