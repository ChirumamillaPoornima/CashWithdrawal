import {Component} from 'react'
import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {count: 2000}

  onDecrement = value => {
    const {count} = this.state
    this.setState(prevState => ({count: prevState - value}))
  }

  render() {
    const {count} = this.state
    return (
      <div>
        <div>
          <h1 className="head">{count}</h1>
          <p className="para1">In Rupees</p>
        </div>
        <div>
          {count.map(eachone => (
            <DenominationItem
              id={eachone.id}
              value={eachone.value}
              onDecrement={this.onDecrement}
            />
          ))}
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
