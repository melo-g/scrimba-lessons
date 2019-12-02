import React, { Component } from "react"

import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"

import ContactCard from './components/ContactCard'

import Joke from './components/Joke'
import jokesData from './components/jokesData'

import Product from './components/Product'
import productsData from './components/vschoolProducts'

import TodoItem from "./components/TodoItem"
import todosData from "./components/todosData"

import Conditional from './components/Conditional'

//https://scrimba.com/p/p7P5Hd/ceLWEsp
class App extends Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      location: "",
      light: false,
      medium: false,
      heavy: false
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const { name, value, checked, type } = event.target
    type === "checked" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
  }

  render() {
    const { light, medium, heavy } = this.state
    console.log(light, medium, heavy)
    return (
      <main>
        <form>
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
            placeholder="First Name"
          />
          <br />
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
            placeholder="Last Name"
          />
          <br />
          <input
            type="text"
            name="age"
            value={this.state.age}
            onChange={this.handleChange}
            placeholder="Age"
          />
          <br />

          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={this.handleChange}
            /> Male
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={this.handleChange}
            /> Female
          </label>
          <br />

          <select
            type="select"
            name="location"
            onChange={this.handleChange}
          >
            <option value="">---Please select a destination---</option>
            <option value="coron">Coron</option>
            <option value="laguna">Laguna</option>
            <option value="el nido">El Nido</option>
          </select>
          <br />

          <label>
            <input
              type="checkbox"
              name="light"
              onChange={this.handleChange}
              checked={this.state.light}
            />Light
          </label>

          <label>
            <input
              type="checkbox"
              name="medium"
              onChange={this.handleChange}
              checked={this.state.medium}
            />Medium
          </label>

          <label>
            <input
              type="checkbox"
              name="heavy"
              onChange={this.handleChange}
              checked={this.state.heavy}
            />Heavy
          </label>
          <br />

          <button>Submit</button>
        </form>
        <hr />
        <h2>Entered information:</h2>
        <p>Your name: {this.state.firstName} {this.state.lastName}</p>
        <p>Your age: {this.state.age}</p>
        <p>Your gender: {this.state.gender}</p>
        <p>Your destination: {this.state.location}</p>
        <p>
          Your dietary restrictions:
          Light: {this.state.light}
        </p>
      </main>
    )
  }
}
export default App