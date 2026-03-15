import './Product.css'

export default function Product(props) {

  return (
    <>
      <div>
        <button>{props.Price} , {props.inStock}</button>
      </div>
    </>
  )
}