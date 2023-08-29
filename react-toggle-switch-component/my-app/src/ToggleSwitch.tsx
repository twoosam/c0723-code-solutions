import { useState } from 'react';

type Props = {
  label: string;
  color: string;
  slider: string;
};

export default function ToggleSwitch({ label, color, slider }: Props) {
  const [isOn, setIsOn] = useState(false);
  const backgroundChange = isOn ? color : 'rgb(226,226,226)';
  const onOffLabel = isOn ? label : 'OFF';
  const onOffSlider = isOn ? slider : '0';
  return (
    <div className="container">
      <div className="forSlider" style={{ backgroundColor: backgroundChange }}>
        <button
          onClick={() => setIsOn(!isOn)}
          className="button"
          style={{ marginLeft: onOffSlider }}></button>
      </div>
      {onOffLabel}
    </div>
  );
}
