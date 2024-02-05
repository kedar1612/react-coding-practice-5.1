// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribe: true}

  onSubscribe = ()  =>{
    this.setState(prevState => ({isSubscribe: !prevState.isSubscribe}))
  }

  
  getButtonText = () => {
    const {isSubscribe} = this.state

    return isSubscribe ? 'Subscribe' : 'Subscribed'
  }

  render() {
    const buttontext = this.getButtonText()
    
    return (
      <div className="container">
        <h1 className="title">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
         <button type="button" onClick={this.onSubsribe}>
          {buttontext}
      </div>
    )
  }
}

export default Welcome
