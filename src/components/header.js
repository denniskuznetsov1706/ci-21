

function Header({name}) {
  return (
    <div style={{
      border:"1px solid green",
      width:"400px",
      height:"10vh",
      background:'yellow'
    }}>
     {`Welcome ${name}` }
    </div>
  );
}

export default Header;
