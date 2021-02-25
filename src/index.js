import { hot } from 'react-hot-loader/root'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App'

import 'semantic-ui-css/semantic.min.css'

const render = (Component) =>
  ReactDOM.render(<App />, document.getElementById('root'))

render(hot(App))
