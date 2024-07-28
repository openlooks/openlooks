import { Button } from '@openlooks/core/components/Button';
import '@openlooks/styles/button.css';
import '@openlooks/styles/colors.css';
import '@openlooks/styles/system.css';
import '@openlooks/styles/text.css';
import '@openlooks/styles/unstyledbutton.css';
import '@openlooks/styles/variants.css';

const props = {
  count: 0,
  text: 'Click me!',
  onClick: () => {
    props.count++;
    props.text = `Clicked ${props.count} times`;
    button.updateProps(props);
    button.render();
  },
};

const button = new Button(props);

const root = document.getElementById('app') as HTMLDivElement;
root.appendChild(button.createDom());
button.render();
