import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function AppDrawer({ list, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleOpen() {
    setIsOpen(!isOpen);
  }

  function displayItem(item) {
    toggleOpen();
    onSelect(item);
  }
  return (
    <>
      <GiHamburgerMenu onClick={toggleOpen} className="menu-icon" />
      <Gradient isDrawn={isOpen} onClick={toggleOpen} />
      <Menu isOpen={isOpen}>
        <h3 className="menu-heading">'Choose a Game'</h3>
        <ul className="menu-items">
          {list.map((item) => (
            <li
              key={item}
              className="menu-item"
              onClick={() => displayItem(item)}
              style={{ color: 'black' }}>
              {item}
            </li>
          ))}
        </ul>
      </Menu>
    </>
  );
}

function Menu({ isOpen, children }) {
  const className = isOpen ? 'menu-drawer is-open' : 'menu-drawer';
  return <div className={className}>{children}</div>;
}

function Gradient({ isDrawn, onClick }) {
  const className = isDrawn ? 'menu-shade is-drawn' : 'menu-shade';
  return <div className={className} onClick={onClick} />;
}
