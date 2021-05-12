import React, { FC, useEffect, useRef } from 'react';

type Props = {
  children: JSX.Element | JSX.Element[];
  onClickOutside: () => void;
  mousedown?: boolean;
};
const OutsideClickListener: FC<Props> = ({ children, onClickOutside, mousedown = false }) => {
  const componentRef = useRef<HTMLDivElement>(null);

  const events = mousedown ? ['mousedown'] : ['contextmenu', 'click'];

  useEffect(() => {
    function handleClickOutside(e: Event) {
      // @ts-ignore
      if (componentRef.current && !componentRef.current.contains(e.target)) {
        onClickOutside();
      }
    }

    window.addEventListener('blur', onClickOutside);
    events.forEach(event => {
      document.addEventListener(event, handleClickOutside, {
        capture: true,
      });
    });

    return () => {
      window.removeEventListener('blur', onClickOutside);
      events.forEach(event => {
        document.removeEventListener(event, handleClickOutside);
      });
    };
  }, [componentRef, onClickOutside]);

  return <div ref={componentRef}>{children}</div>;
};

export default OutsideClickListener;
