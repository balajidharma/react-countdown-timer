import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { updateFormField, CountdownState } from "../../features/countdownSlice"; 
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function CountDownForm() {
    const dispatch = useDispatch();
    const formValues = useSelector((state: RootState) => state.countdown);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        dispatch(updateFormField({ field: name as keyof CountdownState, value }));
    }

    return(
        <Box
            component="form"
            sx={{ 
                '& .MuiTextField-root': { m: 1, width: '25ch' },
                borderRadius: 1,
                p: 2
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
        </Box>
    )
}