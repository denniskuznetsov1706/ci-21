import React from 'react';

// MainPage component
const Home = ({ tabPage}) => {
  // Inline styles
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f7f7f7',
    color: '#333',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    padding: '20px',
  };

  const headerStyle = {
    fontSize: '2.5rem',
    margin: '0 0 20px 0',
    color: '#5D1049',
  };

  const textStyle = {
    fontSize: '1.2rem',
    margin: '0',
    maxWidth: '600px',
  };

  return (
    <div style={containerStyle}>
          
       Welcome to home!!!!!!!!!
   
    </div>
  );
};

export default Home;
