import { Size } from '../../components/BaseComponentProps';
import Slider from '../../components/Slider.lite';
import { convertNumberToSize, convertSizeToNumber } from './utils';

export interface SizeEvent {
  target: {
    value: Size;
  };
}

export interface SizeInputProps {
  id: string;
  label: string;
  defaultValue: Size;
  onChange: (e: SizeEvent) => void;
}

export default function SizeInput(props: SizeInputProps) {
  return (
    <Slider
      id={props.id}
      label={props.label}
      min={0}
      max={100}
      step={25}
      marks={[
        { value: 0, label: 'xs' },
        { value: 25, label: 'sm' },
        { value: 50, label: 'md' },
        { value: 75, label: 'lg' },
        { value: 100, label: 'xl' },
      ]}
      defaultValue={convertSizeToNumber(props.defaultValue || 'sm').toString()}
      onChange={(event) => props.onChange({ target: { value: convertNumberToSize(parseInt(event.target.value)) } })}
    />
  );
}
