import './Header.css'

export default function Home(props) {

  return (
    <>
      <div>
        <button>{props.title}</button>
      </div>
    </>
  )
}