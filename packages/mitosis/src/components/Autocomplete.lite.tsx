import { For, onMount, useStore } from '@builder.io/mitosis';
import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';
import InputWrapper from './InputWrapper.lite';
import Menu from './Menu.lite';
import MenuItem from './MenuItem.lite';

export interface AutocompleteProps {
  id: string;
  c?: string;
  sx?: Record<string, any>;
  data: string[];
  defaultValue?: string;
  placeholder?: string;
  label?: string;
  description?: string;
  error?: string;
  required?: boolean;
  onChange?: (e: any) => void;
}

export default function Autocomplete(props: AutocompleteProps) {
  const state = useStore({
    display: 'none',
    opacity: '0',
    top: '0',
    left: '0',
    filter: '',
    hoverIndex: -1,
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
        class={buildOpenLooksClassName('textinput', props.c)}
        style={props.sx as JSX.CSS | undefined}
        value={props.defaultValue || ''}
        placeholder={props.placeholder}
        autocomplete="off"
        aria-role="combobox"
        aria-haspopup="listbox"
        aria-autocomplete="list"
        aria-expanded={state.display === 'block' ? 'true' : 'false'}
        aria-invalid={!!props.error}
        onFocus={(event) => {
          event.preventDefault();
          const wrapperBounds = (event.target.parentNode as HTMLDivElement).getBoundingClientRect();
          const inputBounds = event.target.getBoundingClientRect();
          state.top = `${inputBounds.bottom - wrapperBounds.top + 8}px`;
          state.left = `${inputBounds.left - wrapperBounds.left}px`;
          state.opacity = '1';
          state.display = 'block';
        }}
        onInput={(event) => {
          state.opacity = '1';
          state.display = 'block';
          state.filter = event.target.value.toLowerCase();
        }}
        onKeyDown={(event) => {
          const filteredData = props.data.filter((str) => str.toLowerCase().includes(state.filter));
          switch (event.key) {
            case 'ArrowUp': {
              event.preventDefault();
              if (state.hoverIndex > 0) {
                state.hoverIndex = state.hoverIndex - 1;
              }
              break;
            }

            case 'ArrowDown': {
              event.preventDefault();
              if (state.hoverIndex < filteredData.length - 1) {
                state.hoverIndex = state.hoverIndex + 1;
              }
              break;
            }

            case 'Enter': {
              if (state.opacity === '1') {
                event.preventDefault();
                if (state.hoverIndex >= 0 && state.hoverIndex < filteredData.length) {
                  (document.getElementById(props.id) as HTMLInputElement).value = filteredData[state.hoverIndex];
                  state.opacity = '0';
                  window.setTimeout(() => (state.display = 'none'), 100);
                }
              }
              break;
            }

            case 'Escape': {
              if (state.opacity === '1') {
                event.preventDefault();
                state.opacity = '0';
                window.setTimeout(() => (state.display = 'none'), 100);
              }
              break;
            }
          }
        }}
      />
      <Menu
        size="sm"
        c="radius-sm"
        sx={{ display: state.display, opacity: state.opacity, top: state.top, left: state.left, width: '12.5rem' }}
      >
        <For each={props.data.filter((str) => str.toLowerCase().includes(state.filter))}>
          {(item, index) => (
            <MenuItem
              class={index === state.hoverIndex ? 'hover' : 'cody-' + index}
              onClick={() => {
                (document.getElementById(props.id) as HTMLInputElement).value = item;
              }}
              onMouseOver={() => {
                state.hoverIndex = index;
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
