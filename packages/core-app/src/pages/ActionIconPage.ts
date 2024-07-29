import {
  ActionIcon,
  ActionIconProps,
  Color,
  ColorPicker,
  Configurator,
  ConfiguratorControls,
  ConfiguratorStage,
  Container,
  HtmlComponent,
  IconAdjustments,
  NativeSelect,
  Size,
  SizeInput,
  Stack,
  Text,
  Title,
} from '@openlooks/core';

export class ActionIconPage extends HtmlComponent {
  readonly actionIconProps: ActionIconProps;
  readonly actionIcon: ActionIcon;

  constructor() {
    const actionIconProps: ActionIconProps = {
      variant: 'filled',
      color: 'blue',
      radius: 'sm',
      size: 'sm',
      children: [new IconAdjustments({ size: 'sm' })],
    };

    const actionIcon = new ActionIcon(actionIconProps);

    super('div', '', undefined, undefined, {
      children: [
        new Container({
          className: 'doc-body size-sm p-sm py-xl',
          children: [
            new Title({ order: 1, text: 'ActionIcon' }),
            new Text({ text: 'ActionIcon' }),
            new Configurator({
              children: [
                new ConfiguratorStage({
                  children: [actionIcon],
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
                            actionIconProps.variant = (e.target as HTMLInputElement).value;
                            actionIcon.updateProps(actionIconProps);
                            actionIcon.render();
                          },
                        }),
                        new ColorPicker({
                          name: 'color',
                          label: 'Color',
                          defaultValue: actionIconProps.color,
                          onChange: (e) => {
                            actionIconProps.color = (e.target as HTMLInputElement).value as Color;
                            actionIcon.updateProps(actionIconProps);
                            actionIcon.render();
                          },
                        }),
                        new SizeInput({
                          id: 'radius',
                          name: 'radius',
                          label: 'Radius',
                          defaultValue: actionIconProps.radius,
                          onChange: (e) => {
                            actionIconProps.radius = (e.target as HTMLInputElement).value as Size;
                            actionIcon.updateProps(actionIconProps);
                            actionIcon.render();
                          },
                        }),
                        new SizeInput({
                          id: 'size',
                          name: 'size',
                          label: 'Size',
                          defaultValue: actionIconProps.size,
                          onChange: (e) => {
                            actionIconProps.size = (e.target as HTMLInputElement).value as Size;
                            actionIcon.updateProps(actionIconProps);
                            actionIcon.render();
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

    this.actionIconProps = actionIconProps;
    this.actionIcon = actionIcon;
  }
}
