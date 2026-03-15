import image from './assets/images/image.png'



export default function App() {
  const variable = "App.jsx"
  
  return (
    <>
      <h1>{variable}</h1>
      <img src={image} alt="img" width='350px' /><br />
      <button {...addEventListener("click", () => {
        console.log("console.log");
      })}>Click here  ..</button>
    </>
  )
}