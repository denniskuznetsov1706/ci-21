import React from 'react';

// Main component
const MainMenu = ({setTabPage}) => {
  // Menu items array
  const menuItems = [
    { name: 'Home', link: '/', tabPage: 1 },
    { name: 'About', link: '/about' , tabPage: 2},
    { name: 'Services', link: '/services', tabPage: 3 },
    { name: 'Portfolio', link: '/portfolio', tabPage: 3 },
    { name: 'Contact', link: '/contact', tabPage: 3 }
  ];


  let someStyle = {
    listStyleType: 'none',
    padding: 0
  }

  console.log(menuItems)
  let a = menuItems.map(item=>({ ...item,  cityName: "KR"}))

  console.log(a)

  return (
    <div>
      <nav>
        <ul style={someStyle}>
          {menuItems.map((item, index) => (
            <li key={index} style={{ display: 'inline', marginRight: '20px' }}>
              {/* <a href={item.link} onClick={()=>  setTabPage(item.tabPage) }>{item.name}</a> */}
              <button onClick={()=>  setTabPage(item.tabPage) } >{item.name}</button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MainMenu;
