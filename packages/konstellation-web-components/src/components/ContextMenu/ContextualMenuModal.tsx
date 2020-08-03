import { FC, useEffect } from 'react';

import { createPortal } from 'react-dom';

const documentExists = typeof document !== 'undefined';

let contextualMenuDiv = documentExists
  ? document.getElementById('contextual-menu')
  : null;

const ContextualMenuModal: FC = ({ children }) => {
  const modal = documentExists ? document.createElement('div') : null;

  useEffect(() => {
    if (!contextualMenuDiv) {
      contextualMenuDiv = document.body.appendChild(
        document.createElement('div')
      );
      contextualMenuDiv.setAttribute('id', 'contextual-menu');
    }

    if (modal && contextualMenuDiv) contextualMenuDiv.appendChild(modal);

    return () => {
      if (modal && contextualMenuDiv) contextualMenuDiv.removeChild(modal);
    };
  }, [modal]);

  return modal ? createPortal(children, modal) : null;
};

export default ContextualMenuModal;
