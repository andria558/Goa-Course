import './TodoList.css'

export default function Product(props) {

  return (
    <>
      <div>
        <button>{props.todos}</button>
      </div>
    </>
  )
}