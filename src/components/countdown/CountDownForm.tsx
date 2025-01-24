import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { updateFormField, CountdownState } from "../../features/countdownSlice"; // Import your slice actions

export default function CountDownForm() {
    const dispatch = useDispatch();
    const formValues = useSelector((state: RootState) => state.countdown);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        dispatch(updateFormField({ field: name as keyof CountdownState, value }));
    }

    return(
        <form>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                type="text"
                id="name"
                name="name"
                value={formValues.name}
                onChange={handleChange}
                />
            </div>
            <div>
            <label htmlFor="endtime">End Date:</label>
            <input 
                type="datetime-local" 
                id="datetime"
                name="endtime"
                value={formValues.endtime}
                onChange={handleChange}
            />
            </div>
        </form>
    )
}