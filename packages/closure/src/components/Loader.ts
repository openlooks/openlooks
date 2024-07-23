import { buildClassName } from '../utils/classname';
import { Component, ComponentProps } from './Component';

export class Loader extends Component<ComponentProps, SVGElement> {
  // constructor(props: LoaderProps) {
  //   super(props);
  //   // return (
  //   //   <svg
  //   //     id={props.id}
  //   //     viewBox="0 0 38 38"
  //   //     class={buildClassName('loader', props.c, { color: 'blue', size: 'md' })}
  //   //     style={props.sx as JSX.CSS | undefined}
  //   //   >
  //   //     <g fill="none" fill-rule="evenodd">
  //   //       <g transform="translate(2.5 2.5)" stroke-width="5">
  //   //         <circle stroke-opacity=".5" cx="16" cy="16" r="16" />
  //   //         <path d="M32 16c0-9.94-8.06-16-16-16">
  //   //           <animateTransform
  //   //             attributeName="transform"
  //   //             type="rotate"
  //   //             from="0 16 16"
  //   //             to="360 16 16"
  //   //             dur="1s"
  //   //             repeatCount="indefinite"
  //   //           />
  //   //         </path>
  //   //       </g>
  //   //     </g>
  //   //   </svg>
  //   // );
  // }

  public createDom(): SVGElement {
    // const el = this.createElement('svg', 'loader');

    const el = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this.element = el;

    // el.className = buildClassName('loader', this.props?.className);

    // Set the SVG class
    el.className.baseVal = buildClassName('loader', undefined, undefined, this.props);

    if (this.props?.id) {
      el.id = this.props.id;
    }
    if (this.props?.style) {
      Object.assign(el.style, this.props.style);
    }
    return el;
  }
}
