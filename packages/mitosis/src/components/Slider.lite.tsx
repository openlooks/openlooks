import { For, Show } from '@builder.io/mitosis';
import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';
import { BaseComponentProps, Size } from './BaseComponentProps';
import InputWrapper, { InputWrapperProps } from './InputWrapper.lite';

export interface SliderMark {
  value: number;
  label: string;
}

export interface SliderProps extends BaseComponentProps, InputWrapperProps {
  id: string;
  min?: number;
  max?: number;
  step?: number;
  marks?: SliderMark[];
  size?: Size;
  defaultValue?: string | number;
  onChange?: (e: any) => void;
}

export default function Slider(props: SliderProps) {
  return (
    <InputWrapper
      id={props.id}
      label={props.label}
      description={props.description}
      error={props.error}
      required={props.required}
    >
      <input
        type="range"
        id={props.id}
        list={props.id + '-marks'}
        class={buildOpenLooksClassName('slider', props)}
        style={props.sx as JSX.CSS | undefined}
        min={props.min}
        max={props.max}
        step={props.step}
        value={props.defaultValue}
        onChange={(event) => props.onChange?.(event)}
        onInput={(event) => props.onChange?.(event)}
      />
      <Show when={props.marks}>
        <datalist id={props.id + '-marks'} class="openlooks">
          <For each={props.marks}>{(mark) => <option value={mark.value} label={mark.label}></option>}</For>
        </datalist>
      </Show>
    </InputWrapper>
  );
}
