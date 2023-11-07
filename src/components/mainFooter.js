import React from 'react';

// Footer component
const Footer = () => {
  // Inline styles
  const footerStyle = {
    width: '100%',
    padding: '20px',
    backgroundColor: '#333',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'fixed',
    bottom: 0,
    left: 0,
  };

  const logoStyle = {
    fontWeight: 'bold',
    fontSize: '1.5rem',
  };

  const infoStyle = {
    textAlign: 'right',
    fontSize: '0.9rem',
  };

  return (
    <footer style={footerStyle}>
      <div style={logoStyle}>My Organization</div>
      <div style={infoStyle}>
        <p>123 Business Ave, Suite 456</p>
        <p>City, State, 78901</p>
        <p>Phone: (123) 456-7890</p>
        <p>Email: contact@myorg.com</p>
      </div>
    </footer>
  );
};

export default Footer;
