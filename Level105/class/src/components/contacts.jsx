import './contacts.css'

export default function Contacts() {

  return (
    <>
      <h1>Contact me</h1>
      <form>
        <label htmlFor="Name">
          Name: <br />
          <input type="text" placeholder='Name' />
        </label><br /><br />
        <label htmlFor="Name">
          LastName: <br />
          <input type="text" placeholder='LastName' />
        </label><br /><br />
        <label htmlFor="Name">
          Email: <br />
          <input type="email" placeholder='Email' />
        </label><br /> <br />
        <button type='submit'>Submit</button>
      </form><br />
      <button onClick={() => (window.location.pathname = '/main')}>Main page..</button>

    </>

  )



}