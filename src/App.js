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

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    // Update state so that the item with the given id flips `completed` from false to true (or vise versa)
    // Remember not to modify prevState directly, but instead to return a new version of state with the change you want included in that update. (Think how you might use the `.map` method to do this)
    this.setState(prevState => {
      const newTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
      return {
        todos: newTodos
      }
    })
  }

  render() {
    const todoItems = this.state.todos.map(task =>
      <TodoItem
        key={task.id}
        task={task}
        handleChange={this.handleChange}
      />)

    return (
      <div className="todo-list">
        {todoItems}
      </div>
    )
  }
}

export default App