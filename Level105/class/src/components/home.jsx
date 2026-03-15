import './home.css'

export default function Home() {

  return (
    <>
      <h1>Home page</h1>
      <h2>Hello How are you?</h2>
      <button onClick={() => (window.location.pathname = '/main')}>Main page..</button>
    </>

  )



}