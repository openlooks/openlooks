import {
  Button,
  Configurator,
  ConfiguratorControls,
  ConfiguratorStage,
  Container,
  Flex,
  FlexProps,
  HtmlComponent,
  Link,
  NativeSelect,
  Size,
  SizeInput,
  Stack,
  Title,
} from '@openlooks/core';

export class FlexPage extends HtmlComponent {
  readonly flexProps: FlexProps;
  readonly flex: Flex;

  constructor() {
    const flexProps: FlexProps = {
      gap: 'md',
      justify: 'flex-start',
      align: 'flex-start',
      direction: 'row',
      wrap: 'wrap',
      style: { background: 'var(--oc-gray-2)', height: '150px', width: '100%' },
      children: [
        new Button({ text: 'Button 1' }),
        new Button({ text: 'Button 2' }),
        new Button({ text: 'Button 3' }),
      ],
    };

    const flex = new Flex(flexProps);

    super('div', '', undefined, undefined, {
      children: [
        new Container({
          className: 'doc-body size-sm p-sm py-xl',
          children: [
            new Title({ order: 1, text: 'Flex' }),
            new Configurator({
              children: [
                new ConfiguratorStage({
                  children: [flex],
                }),
                new ConfiguratorControls({
                  children: [
                    new Stack({
                      children: [
                        new SizeInput({
                          id: 'gap',
                          name: 'gap',
                          label: 'Gap',
                          defaultValue: flexProps.gap,
                          onChange: (e) => {
                            flexProps.gap = (e.target as HTMLInputElement).value as Size;
                            flex.updateProps(flexProps);
                            flex.render();
                          },
                        }),
                        new NativeSelect({
                          data: [
                            'flex-start',
                            'center',
                            'flex-end',
                            'space-between',
                            'space-around',
                          ],
                          label: 'Justify',
                          defaultValue: flexProps.justify,
                          onChange: (e) => {
                            flexProps.justify = (e.target as HTMLInputElement).value;
                            flex.updateProps(flexProps);
                            flex.render();
                          },
                        }),
                        new NativeSelect({
                          data: [
                            'flex-start',
                            'center',
                            'flex-end',
                            'space-between',
                            'space-around',
                          ],
                          label: 'Align',
                          defaultValue: flexProps.align,
                          onChange: (e) => {
                            flexProps.align = (e.target as HTMLInputElement).value;
                            flex.updateProps(flexProps);
                            flex.render();
                          },
                        }),
                        new NativeSelect({
                          data: ['row', 'column', 'row-reverse', 'column-reverse'],
                          label: 'Direction',
                          defaultValue: flexProps.direction,
                          onChange: (e) => {
                            flexProps.direction = (e.target as HTMLInputElement).value;
                            flex.updateProps(flexProps);
                            flex.render();
                          },
                        }),
                        new NativeSelect({
                          data: ['wrap', 'nowrap', 'wrap-reverse'],
                          label: 'Wrap',
                          defaultValue: flexProps.wrap,
                          onChange: (e) => {
                            flexProps.wrap = (e.target as HTMLInputElement).value;
                            flex.updateProps(flexProps);
                            flex.render();
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

    this.flexProps = flexProps;
    this.flex = flex;
  }
}
