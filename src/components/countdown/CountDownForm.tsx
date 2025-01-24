import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

interface CountDownFormProps {
    formValues: {
        name: string;
        endtime: string,
    },
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function CountDownForm({formValues, handleChange}: CountDownFormProps) {
    return (
        <>
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
        </>
    )
}