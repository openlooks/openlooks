import { addChildren } from '../utils/addchild';
import { Component, ComponentProps } from './Component';

export class Fragment extends Component<DocumentFragment, ComponentProps> {
  public createDom(): DocumentFragment {
    this.element = document.createDocumentFragment();
    addChildren(this.element, this.props?.children);
    return this.element;
  }
}
