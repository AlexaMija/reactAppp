import React, {Component} from "react"
import ReactDOM from "react-dom"

class Footer extends Component {
  constructor () {
    super ()
    this.state = {
      isFrendly: false
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    const {name, value} = event.target
    this.setState ({
      [name]: value
    })
  }
  render() {
    return (
      <form>
      <h3>Tri poruke koje te motivisu! </h3>
      <textarea
      type="text"
      rows="2"
      cols="20"
      placeholder="Prva poruka ovg jutra!!"
      onChange={this.handleChange}
      />
      <br />
      <textarea
      type="text"
      rows="2"
      cols="20"
      placeholder="Druga poruka ovog jutra!"
      onChange={this.handleChange}
      />
      <br />
      <textarea
      type="text"
      rows="2"
      cols="20"
      placeholder="Treca poruka ovog jutra!"
      onChange={this.handleChange}
      />

      </form>
    )
  }
}


export default Footer
