import { For } from '@builder.io/mitosis';
import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';
import { BaseComponentProps } from './BaseComponentProps';
import InputWrapper, { InputWrapperProps } from './InputWrapper.lite';

export interface ColorPickerProps extends BaseComponentProps, InputWrapperProps {
  id: string;
  name: string;
  label?: string;
  defaultValue?: string;
  onChange?: (e: any) => void;
}

export default function ColorPicker(props: ColorPickerProps) {
  return (
    <InputWrapper id={props.id} label={props.label}>
      <div class={buildOpenLooksClassName('colorpicker', props)} style={props.sx as JSX.CSS | undefined}>
        <For
          each={[
            'black',
            'gray',
            'red',
            'pink',
            'grape',
            'violet',
            'indigo',
            'blue',
            'cyan',
            'teal',
            'green',
            'lime',
            'yellow',
            'orange',
          ]}
        >
          {(color) => (
            <>
              <input
                type="radio"
                id={`${props.id}-${color}`}
                name={props.name}
                value={color}
                checked={color === props.defaultValue}
                onChange={(event: Event) => {
                  if (props.onChange) {
                    props.onChange(event);
                  }
                }}
              />
              <label
                for={`${props.id}-${color}`}
                style={{ background: color === 'black' ? 'black' : `var(--oc-${color}-6)` }}
                title={color}
              >
                ✓
              </label>
            </>
          )}
        </For>
      </div>
    </InputWrapper>
  );
}
