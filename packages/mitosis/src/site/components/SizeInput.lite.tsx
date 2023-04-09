import { Size } from '../../components/BaseComponentProps';
import Slider from '../../components/Slider.lite';

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
      defaultValue={(props.defaultValue
        ? { xs: 0, sm: 25, md: 50, lg: 75, xl: 100 }[props.defaultValue]
        : 0
      ).toString()}
      onChange={(event) => {
        const numberToSize: Record<number, Size> = { 0: 'xs', 25: 'sm', 50: 'md', 75: 'lg', 100: 'xl' };
        props.onChange({ target: { value: numberToSize[event.target.value] } });
      }}
    />
  );
}
