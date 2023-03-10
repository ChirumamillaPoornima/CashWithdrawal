import './index.css'

const DenominationItem = props => {
  const {details, onDecrement} = props
  const {value} = details

  const onDeleteCount = () => {
    onDecrement(value)
  }

  return (
    <div>
      <div className="app-container">
        <div className="inner-container">
          <p className="dot">S</p>
          <h1 className="para">Sarah Williams</h1>
        </div>
        <div className="inner-container1">
          <p className="para1">Your Balance</p>
        </div>
        <h1 className="head">Withdraw</h1>
        <p className="para1">CHOOSE SUM (IN RUPEES)</p>
      </div>
      <div>
        <div className="container">
          <button className="button" type="button" onClick={onDeleteCount}>
            50
          </button>
          <button className="button" type="button" onClick={onDeleteCount}>
            100
          </button>
        </div>
        <div className="container">
          <button className="button" type="button" onClick={onDeleteCount}>
            200
          </button>
          <button className="button" type="button" onClick={onDeleteCount}>
            500
          </button>
        </div>
      </div>
    </div>
  )
}

export default DenominationItem
