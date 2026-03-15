import Button from './components/Button';

function App() {
  const handleClick = () => {
    console.log('ღილაკზე დაჭერილია!');
  };

  return (
    <div>
      <h1>Hello There ! </h1>
      <Button Result="Hi, You just Clicked the Button">Click Here ! </Button>
    </div>
  );
}

export default App;
