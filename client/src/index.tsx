/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css'
import './css/variables.css'
import App from './App'
import './assets/fonts/icomoon/style.css'

render(() => <App />, document.getElementById('root') as HTMLElement);
