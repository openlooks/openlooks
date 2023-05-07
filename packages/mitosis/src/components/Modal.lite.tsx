import { buildOpenLooksClassName } from '../utils/classname';
import CloseButton from './CloseButton.lite';
import Group from './Group.lite';
import Overlay from './Overlay.lite';
import Text from './Text.lite';

export interface ModalProps {
  id?: string;
  c?: string;
  title?: string;
  width: string;
  visible?: boolean;
  onClose?: () => void;
  children?: any;
}

export default function Modal(props: ModalProps) {
  return (
    <>
      <Overlay fixed visible={props.visible} />
      <div
        class={buildOpenLooksClassName('modal-container', undefined)}
        style={{
          visibility: props.visible ? 'visible' : 'hidden',
        }}
      >
        <div
          id={props.id}
          class={buildOpenLooksClassName('modal paper', props.c, { radius: 'sm' })}
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
      </div>
    </>
  );
}
