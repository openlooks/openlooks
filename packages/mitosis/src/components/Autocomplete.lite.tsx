import { For, onMount, useStore } from '@builder.io/mitosis';
import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';
import { BaseComponentProps, Size } from './BaseComponentProps';
import InputWrapper, { InputWrapperProps } from './InputWrapper.lite';
import Menu from './Menu.lite';
import MenuItem from './MenuItem.lite';

export interface AutocompleteProps extends BaseComponentProps, InputWrapperProps {
  id: string;
  data: string[];
  variant?: 'filled' | 'light' | 'outline' | 'subtle';
  size?: Size;
  defaultValue?: string;
  placeholder?: string;
  onChange?: (e: any) => void;
}

export default function Autocomplete(props: AutocompleteProps) {
  const state = useStore({
    display: 'none',
    opacity: '0',
    top: '0',
    left: '0',
  });

  onMount(() => {
    document.addEventListener('click', (event) => {
      if ((event.target as HTMLElement | undefined)?.id !== props.id) {
        state.opacity = '0';
        window.setTimeout(() => (state.display = 'none'), 100);
      }
    });
  });

  return (
    <InputWrapper
      id={props.id}
      label={props.label}
      description={props.description}
      error={props.error}
      required={props.required}
    >
      <input
        type="text"
        id={props.id}
        class={buildOpenLooksClassName('textinput', props)}
        style={props.sx as JSX.CSS | undefined}
        value={props.defaultValue || ''}
        placeholder={props.placeholder}
        aria-invalid={!!props.error}
        onChange={(event) => props.onChange?.(event)}
        onInput={(event) => props.onChange?.(event)}
        onFocus={(event) => {
          event.preventDefault();
          const wrapperBounds = (event.target.parentNode as HTMLDivElement).getBoundingClientRect();
          const inputBounds = event.target.getBoundingClientRect();
          state.top = `${inputBounds.bottom - wrapperBounds.top + 8}px`;
          state.left = `${inputBounds.left - wrapperBounds.left}px`;
          state.opacity = '1';
          state.display = 'block';
        }}
      />
      <Menu
        size="sm"
        radius="sm"
        sx={{ display: state.display, opacity: state.opacity, top: state.top, left: state.left, width: '12.5rem' }}
      >
        <For each={props.data}>
          {(item) => (
            <MenuItem
              onClick={() => {
                (document.getElementById(props.id) as HTMLInputElement).value = item;
              }}
            >
              {item}
            </MenuItem>
          )}
        </For>
      </Menu>
    </InputWrapper>
  );
}
