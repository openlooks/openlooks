import type { JSX } from "react";
import { useEffect, useState } from "react";
import { buildOpenLooksClassName } from "../utils/classname";
import type { BaseComponentProps } from "./BaseComponentProps";
import { InputWrapper } from "./InputWrapper";
import { Menu } from "./Menu";
import { MenuItem } from "./MenuItem";

export interface AutocompleteProps extends BaseComponentProps {
  id: string;
  data: string[];
  defaultValue?: string;
  placeholder?: string;
  label?: string;
  description?: string;
  error?: string;
  required?: boolean;
  onChange?: (e: any) => void;
}

export function Autocomplete(props: AutocompleteProps): JSX.Element {
  const [visibility, setVisibility] = useState(
    "hidden" as "visible" | "hidden",
  );
  const [opacity, setOpacity] = useState("0");
  const [top, setTop] = useState("0");
  const [left, setLeft] = useState("0");
  const [filter, setFilter] = useState("");
  const [hoverIndex, setHoverIndex] = useState(-1);

  useEffect(() => {
    document.addEventListener("click", (event) => {
      if ((event.target as HTMLElement | undefined)?.id !== props.id) {
        setVisibility("hidden");
        setOpacity("0");
      }
    });
  }, []);

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
        className={buildOpenLooksClassName("textinput", props.c)}
        style={props.sx}
        defaultValue={props.defaultValue || ""}
        placeholder={props.placeholder}
        autoComplete="off"
        role="combobox"
        aria-haspopup="listbox"
        aria-autocomplete="list"
        aria-controls={props.id + "-items"}
        aria-expanded={visibility === "visible" ? "true" : "false"}
        aria-invalid={!!props.error}
        onFocus={(event) => {
          event.preventDefault();
          const target = event.target as HTMLInputElement;
          const wrapperBounds = (
            target.parentNode as HTMLDivElement
          ).getBoundingClientRect();
          const inputBounds = target.getBoundingClientRect();
          setTop(`${inputBounds.bottom - wrapperBounds.top + 8}px`);
          setLeft(`${inputBounds.left - wrapperBounds.left}px`);
          setVisibility("visible");
          setOpacity("1");
        }}
        onInput={(event) => {
          const target = event.target as HTMLInputElement;
          setVisibility("visible");
          setOpacity("1");
          setFilter(target.value.toLowerCase());
        }}
        onKeyDown={(event) => {
          const target = event.target as HTMLInputElement;
          const filteredData = props.data.filter((str) =>
            str.toLowerCase().includes(filter),
          );
          switch (event.key) {
            case "ArrowUp": {
              event.preventDefault();
              setHoverIndex(
                Math.max(0, Math.min(filteredData.length - 1, hoverIndex - 1)),
              );
              break;
            }
            case "ArrowDown": {
              event.preventDefault();
              setHoverIndex(
                Math.max(0, Math.min(filteredData.length - 1, hoverIndex + 1)),
              );
              break;
            }
            case "Enter": {
              if (opacity === "1") {
                event.preventDefault();
                if (hoverIndex >= 0 && hoverIndex < filteredData.length) {
                  if (props.onChange) {
                    props.onChange(filteredData[hoverIndex]);
                  }
                  target.value = filteredData[hoverIndex];
                  setVisibility("hidden");
                  setOpacity("0");
                }
              }
              break;
            }
            case "Escape": {
              if (opacity === "1") {
                event.preventDefault();
                setVisibility("hidden");
                setOpacity("0");
              }
              break;
            }
          }
        }}
      />
      <Menu
        id={props.id + "-items"}
        c="size-sm radius-sm"
        sx={{
          visibility: visibility,
          opacity: opacity,
          top: top,
          left: left,
          width: "12.5rem",
        }}
      >
        <>
          {props.data
            .filter((str) => str.toLowerCase().includes(filter))
            .map((item, index) => (
              <MenuItem
                key={item}
                c={index === hoverIndex ? "hover" : ""}
                onClick={() => {
                  (
                    document.getElementById(props.id) as HTMLInputElement
                  ).value = item;
                  if (props.onChange) {
                    props.onChange(item);
                  }
                }}
                onMouseOver={() => {
                  setHoverIndex(index);
                }}
              >
                {item}
              </MenuItem>
            ))}
        </>
      </Menu>
    </InputWrapper>
  );
}
