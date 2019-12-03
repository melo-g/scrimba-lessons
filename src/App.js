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
    this.state = {}
  }

  render() {
    return (
      <main>
        <form>
          <input placeholder="First Name" /><br />
          <input placeholder="Last Name" /><br />
          <input placeholder="Age" /><br />

          {/* Create radio buttons for gender here */}
          <br />

          {/* Create select box for location here */}
          <br />

          {/* Create check boxes for dietary restrictions here */}
          <br />

          <button>Submit</button>
        </form>
        <hr />
        <h2>Entered information:</h2>
        <p>Your name: {/* First and last name here */}</p>
        <p>Your age: {/* Age here */}</p>
        <p>Your gender: {/* Gender here */}</p>
        <p>Your destination: {/* Destination here */}</p>
        <p>
          Your dietary restrictions:
                  {/* Dietary restrictions here, comma separated */}
        </p>
      </main>
    )
  }
}
export default App