import { Provider } from 'react-redux'
import CountDownForm from './components/countdownredux/CountDownForm'
import CountDown from './components/countdownredux/CountDown'
import CountDownNew from './components/countdown/CountDown'
import Box from '@mui/material/Box'
import { store } from './store'
import './App.css'

function App() {
  return (
    <>
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
            <CountDown />
          </Box>
        </div>
      </Provider>
      <h2>Countdown without Redux</h2>
      <CountDownNew />
    </>
  )
}

export default App
