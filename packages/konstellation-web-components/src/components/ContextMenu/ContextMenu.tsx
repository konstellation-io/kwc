import { BUTTON_ALIGN, Button } from '../Button/Button';
import React, {
  Fragment,
  FunctionComponent,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from 'react';

import ContextualMenuModal from './ContextualMenuModal';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import cx from 'classnames';
import styles from './ContextMenu.module.scss';
import { OutsideClickListener } from '../OutsideClickListener/OutsideClickListener';

const MENU_OFFSET = 7;

export type MenuCallToAction = {
  Icon?: FunctionComponent<SvgIconProps>;
  /** Disabled actions can not be interacted and will be shown in a dark grey color */
  disabled?: boolean;
  text: string;
  callToAction?: Function;
  /** Disabled action that is shown as a grouper for the next actions */
  separator?: boolean;
};

type ContextMenuPosition = {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
};

interface ContextMenu {
  isVisible: boolean;
  position: ContextMenuPosition;
}

export type ContextMenuProps = {
  children: ReactElement;
  actions: MenuCallToAction[];
  /** Optional information that can be accessed on the menu selection action function  */
  contextObject?: number | string;
  openOnLeftClick?: boolean;
};

export function ContextMenu({
  children,
  actions,
  contextObject,
  openOnLeftClick = false,
}: ContextMenuProps) {
  const childElement = useRef<HTMLElement>(null);
  const contextMenuRef = useRef<HTMLDivElement>(null);
  const [stateContextMenu, setStateContextMenu] = useState<ContextMenu>({
    isVisible: false,
    position: {},
  });

  function onOpenMenu(e: any) {
    e.preventDefault();
    e.stopPropagation();

    const newPosition: ContextMenuPosition = {};
    const windowWidth = window.innerWidth;
    const { clientX, clientY } = e;

    if (clientX + 150 > windowWidth) {
      newPosition.right = `${MENU_OFFSET}px`;
    } else {
      newPosition.left = `${clientX + MENU_OFFSET}px`;
    }

    newPosition.top = `${clientY + MENU_OFFSET}px`;
    setStateContextMenu({
      isVisible: true,
      position: newPosition,
    });
  }
  const event = openOnLeftClick ? 'click' : 'contextmenu';
  function removeListener() {
    if (childElement && childElement.current) {
      childElement.current.removeEventListener(event, onOpenMenu);
    }
  }
  useEffect(() => {
    if (childElement && childElement.current) {
      childElement.current.addEventListener(event, onOpenMenu);
      return removeListener;
    }
    // This should only be done on mount/unmount.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function hideContextMenu(): void {
    setStateContextMenu({
      isVisible: false,
      position: {},
    });
  }

  function handleMenuItemClick(action: MenuCallToAction): void {
    hideContextMenu();
    if (action.callToAction) action.callToAction(action, contextObject);
  }

  return (
    <Fragment>
      {stateContextMenu.isVisible && (
        <ContextualMenuModal>
          <OutsideClickListener onClickOutside={hideContextMenu} mousedown>
            <div
              className={styles.contextMenuContainer}
              ref={contextMenuRef}
              style={{ ...stateContextMenu.position }}
              onClick={(e) => e.stopPropagation()}
              onContextMenu={(e) => e.preventDefault()}
            >
              <ul className={styles.contextMenuList}>
                {actions.map((action, index) => (
                  <li
                    key={`${action.text}-${index}`}
                    className={cx({ [styles.separator]: action.separator })}
                  >
                    <Button
                      label={action.text}
                      Icon={action.Icon}
                      onClick={() => handleMenuItemClick(action)}
                      align={BUTTON_ALIGN.LEFT}
                      disabled={action.separator || action.disabled}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </OutsideClickListener>
        </ContextualMenuModal>
      )}
      {React.cloneElement(children, { ref: childElement })}
    </Fragment>
  );
}
