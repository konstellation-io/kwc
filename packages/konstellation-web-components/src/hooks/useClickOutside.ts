import { RefObject, useCallback } from 'react';

// DEPRECATED! Use OutsideClickListener instead

type Params = {
  componentRef: RefObject<HTMLElement> | null;
  action: () => void;
  mousedown?: boolean;
};
export default function useClickOutside({
  componentRef = null,
  action = () => {},
  mousedown = false,
}: Params) {
  const handleClickOutside = useCallback(
    (e: Event) => {
      const target = e.target as HTMLElement;

      // Has the user clicked outside the component?
      if (
        componentRef === null ||
        (document.contains(target) && !componentRef.current?.contains(target))
      ) {
        // Make sure this action occurs after any other events
        setTimeout(action, 0);
      }
    },
    // 'action' is not added so the reference to this function does not
    // depends on 'action' parameter.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [componentRef]
  );

  const events = mousedown ? ['mousedown'] : ['contextmenu', 'click'];

  function addClickOutsideEvents() {
    events.forEach((event) =>
      document.addEventListener(event, handleClickOutside, {
        capture: true,
      })
    );
    window.addEventListener('blur', action);
  }

  function removeClickOutsideEvents() {
    events.forEach((event) =>
      document.removeEventListener(event, handleClickOutside, {
        capture: true,
      })
    );
    window.removeEventListener('blur', action);
  }

  return { addClickOutsideEvents, removeClickOutsideEvents };
}
