import './App.css'
import { Component } from "react"
import MoviesList from './components/MoviesList'
import { Routes, Route } from "react-router-dom"
import MovieDetails from './components/MovieDetails'

class App extends Component {
  render() {
    return (
      <Routes>
        <Route exact path="/" element={<MoviesList />} />
        <Route exact path="/movies/:id" element={<MovieDetails />} />
      </Routes>
    )
  }
}

export default App
