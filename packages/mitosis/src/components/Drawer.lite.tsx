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
