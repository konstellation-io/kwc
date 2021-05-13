import React, { FC, useEffect, useState } from 'react';
import { OutsideClickListener } from '../OutsideClickListener/OutsideClickListener';
import AnimateHeight from 'react-animate-height';

export type ExpandableMenuProps = {
  children: JSX.Element | JSX.Element[];
  opened: boolean;
  close: () => void;
  className?: string;
};

export const ExpandableMenu: FC<ExpandableMenuProps> = ({ children, opened, close, className }) => {
  const [closeAnimationUnfinished, setCloseAnimationUnfinished] = useState(
    false
  );

  useEffect(() => {
    if (opened) setCloseAnimationUnfinished(true);
  }, [opened]);

  // Make sure this event happens the last
  function closeMenu() {
    setTimeout(close, 0);
  }

  return (
    <AnimateHeight
      height={opened ? 'auto' : 0}
      duration={300}
      className={className}
      onAnimationEnd={() => !opened && setCloseAnimationUnfinished(false)}
    >
      {(opened || closeAnimationUnfinished) && (
        <OutsideClickListener onClickOutside={closeMenu}>
          {children}
        </OutsideClickListener>
      )}
    </AnimateHeight>
  );
};
