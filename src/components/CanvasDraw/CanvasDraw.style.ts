import styled from 'styled-components';
import { ReactComponent as DownloadIcon } from '../../assets/download.svg';
import { ReactComponent as UploadIcon } from '../../assets/upload.svg';

export const PadStepDone = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 115, 115, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 16px;
  z-index: 28;
`;

export const CanvasContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Canvas = styled.canvas<{
  pointCursor?: string;
  cursorPosition?: number;
  width: number;
  height: number;
}>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  box-shadow: 0 0 0 2px rgba(68, 55, 78, 0.4);
  border-radius: 16px;
  transform-origin: top;
  ${({ pointCursor, cursorPosition }) =>
    pointCursor &&
    cursorPosition &&
    `cursor: url(${pointCursor}) ${cursorPosition} ${cursorPosition}, auto`};
`;

export const CanvasButtons = styled.div`
  display: flex;
  height: 400px;
`;

export const RightButtons = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

export const CanvasFooter = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
`;

export const StyledDownloadIcon = styled(DownloadIcon)`
  width: 30px;
  margin-right: 10px;
`;

export const StyledUploadIcon = styled(UploadIcon)`
  width: 30px;
  margin-right: 10px;
`;

export const CanvasAndFooterContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  outline: none;
  border: none;
  background-color: unset;
`;