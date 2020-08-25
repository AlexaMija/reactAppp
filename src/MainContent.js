import React, {Component} from "react"
import ReactDOM from "react-dom"
class MainContent extends Component {
  constructor () {
    super ()
    this.state = {
      firstGoodJob: "",
      secondGoodJob: "",
      thirdGoodJob: ""
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
      <h4>Napisi tri radnje koje te raduje a uradićes ih  u toku dana!</h4>
      <input
      type="text"
      value={this.state.firstGoodJob}
      name="firstGoodJob"
      placeholder="Šta ćes divno uraditi danas?"
      onChange={this.handleChange}
      />
<br />
      <input
      type="text"
      value={this.state.secondGoodJob}
      name="secondGoodJob"
    placeholder= "Šta ces divno uraditi danas?"
      onChange={this.handleChange}
      />
<br />
      <input
      type="text"
      value={this.state.thirdGoodJob}
      name="thirdGoodJob"
    placeholder="Šta ćes divno uraditi danas?"
      onChange={this.handleChange}
      />
      </form>
    )
  }
}
export default MainContent
