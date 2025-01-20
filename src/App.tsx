import { Provider } from 'react-redux'
import CountDownForm from './components/countdown/CountDownForm'
import CountDown from './components/countdown/CountDown'
import { store } from './store'
import './App.css'

function App() {
  return (
    <>
      <Provider store={store}>
        <CountDownForm />
        <CountDown />
      </Provider>
    </>
  )
}

export default App
