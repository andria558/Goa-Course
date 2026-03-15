import './Button.css';

function Button(props) {

  const handleClick = () => {
    console.log(props.Result);
  };

  return (
    <>
      <button onClick={handleClick}>
        {props.children}
      </button>
    </>

  );
}

export default Button;
