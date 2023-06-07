/* @refresh reload */
import './index.css'
import './css/variables.css'
import './assets/fonts/icomoon/style.css'

import { render } from 'solid-js/web'

import App from './App'

render(() => <App />, document.getElementById('root') as HTMLElement)
