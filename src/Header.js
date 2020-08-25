import React, {Component} from "react"
import ReactDOM from "react-dom"

class Header extends Component {
  constructor () {
    super ()
    this.state = {
      firstGratitud: "",
      secondGratitud: "",
      thirdGratitud: ""
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }
  render() {
    return (
      <form>
      <h3>Navedi tri događaja, stvari, pojave zbog kojih si zahvalan/lna!</h3>
      <input
      type="text"
      value={this.state.firstGratitud}
      name="firstGratitud"
      placeholder="Tvoja prva zahvalnost ovog jutra!"
      onChange={this.handleChange}
      />
<br />
      <input
      type="text"
      value={this.state.secondGratitud}
      name="secondGratitud"
      placeholder="Tvoja druga zahvalnost ovog jutra!"
      onChange={this.handleChange}
      />
<br />
      <input
      type="text"
      value={this.state.thirdGratitud}
      name="thirdGratitud"
      placeholder="Tvoja treća zahvalnost ovog jutra!"
      onChange={this.handleChange}
      />
      </form>
    )
  }
}
export default Header
