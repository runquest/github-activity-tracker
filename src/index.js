import { hot } from 'react-hot-loader/root'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App'

const render = (Component) =>
  ReactDOM.render(<App />, document.getElementById('root'))

render(hot(App))
