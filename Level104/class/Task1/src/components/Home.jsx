import './Home.css'

export default function Home(props) {

  const HandleClick = () => {
    props.setCount((Count) => Count + 1)
  }
  return (
    <>
      <div onClick={HandleClick}>
        <button>{props.children}</button>
      </div>
    </>
  )
}