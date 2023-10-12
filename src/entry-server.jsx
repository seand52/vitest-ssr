import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import {Route} from 'react-router-dom'
import App  from './App'

export function render(url, context) {
  return ReactDOMServer.renderToString(
    <StaticRouter location={url}>
      <App/>
    </StaticRouter>,
  )
}