import React, { useState } from 'react';
import { ExpandableMenu } from 'kwc';

function ExpandableMenuExample() {
  const [opened, setOpened] = useState(false);

  const openComponent = () => setOpened(true);
  const closeComponent = () => setOpened(false);

  return (
    <div style={{ height: 40, lineHeight: '40px', backgroundColor: '#333', cursor: 'pointer', paddingLeft: 20, marginBottom: 80 }}>
      <div onClick={openComponent}>OPEN!</div>
      <ExpandableMenu opened={opened} close={closeComponent}>
        <div style={{ height: 40, lineHeight: '40px', backgroundColor: '#444', cursor: 'pointer', paddingLeft: 20 }}>Some children</div>
      </ExpandableMenu>
    </div>
  );
}

export default ExpandableMenuExample;
