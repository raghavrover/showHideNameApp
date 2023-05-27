import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstNameShowState: false, lastNameShowState: false}

  showHideFirstName = () => {
    let status
    const {firstNameShowState} = this.state
    if (firstNameShowState) {
      status = false
    } else {
      status = true
    }

    this.setState({firstNameShowState: status})
  }

  showHideLastName = () => {
    let status
    const {lastNameShowState} = this.state
    if (lastNameShowState) {
      status = false
    } else {
      status = true
    }

    this.setState({lastNameShowState: status})
  }

  render() {
    const {firstNameShowState, lastNameShowState} = this.state
    return (
      <div className="bg-container">
        <div className="show-hide-card">
          <h1 className="title">Show/Hide</h1>
          <div className="full-name-card">
            <div className="first-name-card">
              <button
                className="show-hide-btn"
                type="button"
                onClick={this.showHideFirstName}
              >
                Show/Hide Firstname
              </button>
              {firstNameShowState && <p className="name">Joe</p>}
            </div>
            <div className="first-name-card">
              <button
                className="show-hide-btn"
                type="button"
                onClick={this.showHideLastName}
              >
                Show/Hide Lastname
              </button>
              {lastNameShowState && <p className="name">Jonas</p>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
