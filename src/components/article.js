
import Button from "@mui/material/Button";

function Article({
  name,
  setName,
  isYellow,
  setIsYellow
}) {
  return (
    <div style={{
      border: "1px solid green",
      width: "400px",
      height: "10vh",
      background: `${isYellow ? 'yellow': 'red'}`
    }}>
      <Button

        onClick={
          () => {
            setName('Petro')
            setIsYellow(prev=>!prev)
            console.log('name->', name)
          }
        }

        variant="contained">

        Click me!!!</Button>
    </div>
  );
}

export default Article;
