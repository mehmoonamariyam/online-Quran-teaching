import { Provider } from 'react-redux'
import './App.css'
import RoutersCall from './routers'
import { store } from './store'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <Provider store={store}>
      
        <RoutersCall />
      
    </Provider>
  )
}

export default App
