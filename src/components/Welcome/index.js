// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribe: true}

  render() {
    const {isSubscribe} = this.state
    let renderSubscribeButton
    if (isSubscribe) {
      renderSubscribeButton = <button type="button">Subscribe</button>
    } else {
      renderSubscribeButton = <button type="button">Subscribed </button>
    }
    return (
      <div className="container">
        <h1 className="title">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        {renderSubscribeButton}
      </div>
    )
  }
}

export default Welcome
