import { Provider } from 'react-redux'
import CountDownForm from './components/countdownredux/CountDownForm'
import CountDown from './components/countdownredux/CountDown'
import CountDownNew from './components/countdown/CountDown'
import { store } from './store'
import './App.css'

function App() {
  return (
    <>
      <Provider store={store}>
        <CountDownForm />
        <CountDown />
      </Provider>
      <CountDownNew />
      <CountDownNew />
      <CountDownNew />
    </>
  )
}

export default App
