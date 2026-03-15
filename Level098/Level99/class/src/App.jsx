import K2Image from "./assets/images/tiger.png"

export default function App() {
  const file = "App.jsx"

  const functional = () => {
    console.log("HI! wolk")
  }
  return (
    <div>

      <h1>{file} its my first JSX </h1>

      <img src={K2Image} alt="tiger" />
      <img src="/assets/image/olympus.png" alt="olympus" /><br/>

      <button onClick={functional}>Click to log "HI! wolk"</button>

    </div>
  )

}
