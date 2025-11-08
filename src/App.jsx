import { Provider } from 'react-redux'
import './App.css'
import RoutersCall from './routers'
import { store } from './store'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RoutersCall />
      </BrowserRouter>
    </Provider>
  )
}

export default App
