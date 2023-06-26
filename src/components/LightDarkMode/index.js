import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {className: 'darkmode', text: 'Light Mode'}

  changeMode = () => {
    const {className} = this.state
    if (className === 'darkmode') {
      this.setState({className: 'lightmode', text: 'Dark Mode'})
    } else {
      this.setState({className: 'darkmode', text: 'Light Mode'})
    }
  }

  render() {
    const {className, text} = this.state
    return (
      <div className="background">
        <div className={className}>
          <h1 className="head">Click to change mode</h1>
          <div className="background1">
            <button onClick={this.changeMode} className="button" type="button">
              {text}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
