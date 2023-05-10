import './App.css'
import { Component } from "react"
import MoviesList from './components/MoviesList'
import { Routes, Route } from "react-router-dom"

class App extends Component {
  render() {
    return (
      <Routes>
        <Route exact path="/" element={<MoviesList />} />
      </Routes>
    )
  }
}

export default App
