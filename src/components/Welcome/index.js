// Write your code here
import {Component} from 'react'

class Welcome extends Component {
  state = {isSubscribed: false}
  buttonText = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }
  getButtonText = () => {
    const {isSubscribed} = this.state
    return isSubscribed ? 'Subscribed' : 'Subscribe'
  }
  render() {
    const buttonText = this.getButtonText()
    return (
      <div>
        <h1>Welcome</h1>
        <p>Thank you!Happy Learning</p>
        <button onClick={this.buttonText} type="button">
          {buttonText}
        </button>
      </div>
    )
  }
}
export default Welcome
