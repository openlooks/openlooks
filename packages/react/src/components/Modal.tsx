import React from "react";
import { buildOpenLooksClassName } from '../utils/classname';
import CloseButton from "./CloseButton";
import Group from "./Group";
import Overlay from "./Overlay";
import Text from "./Text";
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
    React.useEffect(() => {
        document.addEventListener('click', (event: React.MouseEvent) => {
            const classList = (event.target as HTMLElement | undefined)?.classList;
            if (classList?.contains('overlay') || classList?.contains('modal-container')) {
                props.onClose?.();
            }
        });
    }, []);
    return (<>
      <Overlay fixed visible={props.visible}/>
      <div className={buildOpenLooksClassName('modal-container', undefined)} style={{
            visibility: props.visible ? 'visible' : 'hidden',
        }}>
        <div id={props.id} className={buildOpenLooksClassName('modal paper', props.c, { radius: 'sm' })} style={{
            width: props.width,
            opacity: props.visible ? '1' : '0',
            visibility: props.visible ? 'visible' : 'hidden',
            transform: props.visible ? 'translateX(0)' : `translateX(-${props.width})`,
        }}>
          <Group c="position-apart pb-md">
            <Text c="fz-md">{props.title}</Text>
            <CloseButton onClick={() => props.onClose?.()}/>
          </Group>
          {props.children}
        </div>
      </div>
    </>);
}
