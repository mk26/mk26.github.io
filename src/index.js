import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

import registerServiceWorker from './registerServiceWorker'
import { ParallaxProvider } from 'react-scroll-parallax'

import 'react-photoswipe/lib/photoswipe.css'
import './index.scss'

ReactDOM.render(
  <ParallaxProvider>
    <App />
  </ParallaxProvider>,
  document.getElementById('root')
)
registerServiceWorker()
