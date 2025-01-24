import { Provider } from 'react-redux'
import CountDownForm from './components/countdownredux/CountDownForm'
import CountDownRedux from './components/countdownredux/CountDown'
import CountDown from './components/countdown/CountDown'
import Box from '@mui/material/Box'
import { store } from './store'
import './App.css'

function App() {
  return (
    <>
      <h2>Countdown</h2>
      <CountDown />
      <Provider store={store}>
        <h2>Countdown with Redux</h2>
        <div className="countdown-container">
          <Box
              component="div"
              sx={{ 
                  '& .MuiTextField-root': { m: 1, width: '25ch' },
                  borderRadius: 1,
                  p: 2, 
                  border: '1px solid grey'
              }}
              >
            <CountDownForm />
            <CountDownRedux />
          </Box>
        </div>
      </Provider>
    </>
  )
}

export default App
