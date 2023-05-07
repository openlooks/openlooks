import { onMount } from '@builder.io/mitosis';
import { buildOpenLooksClassName } from '../utils/classname';
import CloseButton from './CloseButton.lite';
import Group from './Group.lite';
import Overlay from './Overlay.lite';
import Text from './Text.lite';

export interface DrawerProps {
  id?: string;
  c?: string;
  title?: string;
  width: string;
  visible?: boolean;
  onClose?: () => void;
  children?: any;
}

export default function Drawer(props: DrawerProps) {
  onMount(() => {
    document.addEventListener('click', (event) => {
      if ((event.target as HTMLElement | undefined)?.classList.contains('overlay')) {
        props.onClose?.();
      }
    });
  });

  return (
    <>
      <Overlay fixed visible={props.visible} />
      <div
        id={props.id}
        class={buildOpenLooksClassName('drawer paper', props.c)}
        style={{
          width: props.width,
          opacity: props.visible ? '1' : '0',
          visibility: props.visible ? 'visible' : 'hidden',
          transform: props.visible ? 'translateX(0)' : `translateX(-${props.width})`,
        }}
      >
        <Group c="position-apart pb-md">
          <Text c="fz-md">{props.title}</Text>
          <CloseButton onClick={() => props.onClose?.()} />
        </Group>
        {props.children}
      </div>
    </>
  );
}
