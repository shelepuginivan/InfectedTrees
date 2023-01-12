/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css'
import './css/variables.css'
import './css/common.css'
import App from './App'
import '../src/fonts/icomoon/style.css'

render(() => <App />, document.getElementById('root') as HTMLElement);
