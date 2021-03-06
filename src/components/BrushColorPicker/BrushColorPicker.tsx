import React from 'react';

import { BrushPickerContainer, ColorBlock } from './BrushColorPicker.style';

export enum DrawingColor {
  PINK = '#FC65B8',
  PURPLE = '#A206F0',
  BLUE = '#0023F5',
  SKYBLUE = '#4acfff',
  GREEN = '#44962A',
  LIME = '#00FF00',
  BEIGE = '#FFE2B0',
  YELLOW = '#FFCF25',
  ORANGE = '#F29D39',
  RED = '#EB3323',
  BROWN = '#9C5127',
  BLACK = '#000000',
  GREY = '#BDBDBD',
  WHITE = '#FFFFFF',
}

interface Props {
  color: DrawingColor;
  setColor: (color: DrawingColor) => void;
}

const BrushColorPicker: React.FC<Props> = ({ color, setColor }) => {
  return (
    <BrushPickerContainer>
      {Object.entries(DrawingColor).map(([colorKey, colorOption]) => (
        <ColorBlock
          key={colorKey}
          onClick={() => setColor(colorOption)}
          color={colorOption}
          selected={colorOption === color}
          withBorder={colorOption === DrawingColor.WHITE}
        />
      ))}
    </BrushPickerContainer>
  );
};

export default BrushColorPicker;
