import React, { FC, useEffect, useState, memo } from 'react';
import OutsideClickListener from '../OutsideClickListener/OutsideClickListener';
import AnimateHeight from 'react-animate-height';

type Props = {
  children: JSX.Element | JSX.Element[];
  opened: boolean;
  close: () => void;
  className?: string;
};
const ExpandableMenu: FC<Props> = ({ children, opened, close, className }) => {
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

export default memo(ExpandableMenu);
