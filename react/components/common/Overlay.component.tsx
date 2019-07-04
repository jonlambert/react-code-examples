import * as React from 'react';
import { css } from 'emotion';

interface OverlayProps {
  children?: React.ReactNode;
  onClick?: () => void;
}

const styles = css`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
  background: rgba(100, 0, 0, 0.2);
  z-index: 1000;
`;

export const Overlay = (props: OverlayProps) => {
  return (
    <div className={styles} onClick={props.onClick}>
      {props.children}
    </div>
  );
};
