import React from 'react';

// Main component
const MainMenu = ({setTabPage}) => {
  // Menu items array
  const menuItems = [
    { name: 'Home', link: '/', tabPage: 1 },
    { name: 'About', link: '/about' , tabPage: 2},
    { name: 'Services', link: '/services', tabPage: 3 },
    { name: 'Portfolio', link: '/portfolio' },
    { name: 'Contact', link: '/contact' }
  ];

  return (
    <div>
      <nav>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {menuItems.map((item, index) => (
            <li key={index} style={{ display: 'inline', marginRight: '20px' }}>
              <a href={item.link} onClick={()=>  setTabPage(item.tabPage) }>{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MainMenu;
