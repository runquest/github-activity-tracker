import { hot } from 'react-hot-loader/root'
import TimeAgo from 'javascript-time-ago'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import en from 'javascript-time-ago/locale/en'

import 'semantic-ui-css/semantic.min.css'
import './index.css'

TimeAgo.addDefaultLocale(en)
const render = (Component) =>
  ReactDOM.render(<App />, document.getElementById('root'))

render(hot(App))
