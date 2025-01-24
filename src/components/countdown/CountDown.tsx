import { useState } from "react";
import CountDownTimer from "./CountDownTimer";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

interface CountdownState {
    name: string;
    endtime: string,
}

export default function CountDown() {
    const [formValues, setFormValues] = useState<CountdownState>({
        name: 'Countdown',
        endtime: getDefaultDate()
    });

    function getDefaultDate() {
        const today = new Date();
        const nextweek = new Date(today);
        nextweek.setDate(today.getDate() + 7);
        console.log(formatDate(nextweek));
        return formatDate(nextweek);
    }

    function formatDate(date: Date) {
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const days = date.getDate().toString().padStart(2, '0');
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
  
        return `${year}-${month}-${days}T${hours}:${minutes}`;
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setFormValues((prevValues) => ({
            ...prevValues,
            [event.target.name]: event.target.value
        }));
    }

    return (
        <>
        <div className="countdown-container">
        <Box
            component="form"
            sx={{ 
                '& .MuiTextField-root': { m: 1, width: '25ch' },
                borderRadius: 1,
                p: 2, 
                border: '1px solid grey'
            }}
            noValidate
            autoComplete="off"
            >
            <TextField 
                label="Name" 
                variant="outlined"
                name="name"
                value={formValues.name}
                onChange={handleChange}
            />
            <TextField 
                label="End Date"
                type="datetime-local" 
                id="datetime"
                name="endtime"
                value={formValues.endtime}
                onChange={handleChange}
            />
            <div>
                <h1 className="timer-title">{formValues.name}</h1>
                <CountDownTimer endtime={formValues.endtime}/>
            </div>
        </Box>
        </div>
        </>
    )
}