import { buildClassName } from '../utils/classname';
import { updateElement } from '../utils/dom';
import { Color, ComponentProps } from './Component';
import { Loader } from './Loader';
import { HtmlComponent } from './HtmlComponent';

export interface NotificationProps extends ComponentProps {
  color?: Color;
  slotIcon?: JSX.Element;
  loading?: boolean;
  title: string;
  message?: string;
  autoClose?: number | false;
  withCloseButton?: boolean;
  onClose?: () => void;
}

const classKeys: (keyof NotificationProps)[] = [];

const defaultProps: Partial<NotificationProps> = {};

export class Notification extends HtmlComponent<HTMLDivElement, NotificationProps> {
  constructor(public props: NotificationProps) {
    super('div', 'notification', classKeys, defaultProps, props);
  }

  public createDom(): HTMLDivElement {
    this.element = super.createDom();
    // if (this.props.onClick) {
    //   this.element.addEventListener('click', this.props.onClick);
    // }

    //   <Show when={props.slotIcon}>
    //   <div class={buildOpenLooksClassName('icon', props.c, { color: 'blue' })}>{props.slotIcon}</div>
    // </Show>
    // <Show when={props.loading}>
    //   <div class={buildOpenLooksClassName('loading', props.c, { color: 'blue' })}>
    //     <Loader />
    //   </div>
    // </Show>
    // <Show when={!props.slotIcon && !props.loading}>
    //   <div class={buildOpenLooksClassName('bar', props.c, { color: 'blue' })} />
    // </Show>

    if (this.props.loading) {
      const loadingDiv = document.createElement('div');
      loadingDiv.className = buildClassName('loading', ['color'], { color: 'blue' }, this.props);

      const loader = new Loader({});
      loadingDiv.appendChild(loader.getDom());

      this.element.appendChild(loadingDiv);
      // } else if (this.props.slotIcon) {
      //   const iconDiv = document.createElement('div');
      //   iconDiv.className = buildClassName('icon', ['color'], { color: 'blue' }, this.props);
      //   iconDiv.appendChild(this.props.slotIcon);
      //   this.element.appendChild
    } else {
      const barDiv = document.createElement('div');
      barDiv.className = buildClassName('bar', ['color'], { color: 'blue' }, this.props);
      this.element.appendChild(barDiv);
    }

    const contentDiv = document.createElement('div');
    contentDiv.className = 'content';

    const titleDiv = document.createElement('div');
    titleDiv.className = 'openlooks text size-sm weight-500';
    titleDiv.textContent = this.props.title;
    contentDiv.appendChild(titleDiv);

    const messageDiv = document.createElement('div');
    messageDiv.className = 'openlooks text size-sm color-gray';
    messageDiv.textContent = this.props.message ?? '';
    contentDiv.appendChild(messageDiv);

    this.element.appendChild(contentDiv);

    if (this.props.withCloseButton !== false) {
      const closeDiv = document.createElement('div');
      closeDiv.className = 'close';

      const closeButton = document.createElement('button');
      closeButton.className = 'openlooks button variant-subtle color-gray size-xs';
      closeButton.textContent = '✕';
      closeButton.onclick = () => {
        if (this.props.onClose) {
          this.props.onClose();
        }
        if (this.props.id) {
          // hideNotification(this.props.id);
        }
      };

      closeDiv.appendChild(closeButton);
      this.element.appendChild(closeDiv);
    }

    // <div class="content">
    //   <Text c="size-sm weight-500">{props.title}</Text>
    //   <Text c="size-sm color-gray">{props.children}</Text>
    //   <Show when={props.message}>
    //     <Text c="size-sm color-gray">{props.message}</Text>
    //   </Show>
    // </div>
    // <Show when={props.withCloseButton !== false}>
    //   <div class="close">
    //     <Button
    //       c="variant-subtle color-gray size-xs"
    //       onClick={() => {
    //         if (props.onClose) {
    //           props.onClose();
    //         }
    //         if (props.id) {
    //           hideNotification(props.id);
    //         }
    //       }}
    //     >
    //       ✕
    //     </Button>
    //   </div>
    // </Show>

    return this.element;
  }

  public updateProps(props: NotificationProps): void {
    super.updateProps(props);
    updateElement(
      this.element as HTMLDivElement,
      this.baseClassName,
      classKeys,
      defaultProps,
      this.props
    );
  }

  public render(): void {
    // const el = this.element as HTMLDivElement;
    // el.textContent = this.props.text;
  }
}
