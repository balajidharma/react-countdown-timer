import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CountdownState {
    name: string;
    endtime: string,
}

const initialState: CountdownState = {
  name: 'Countdown',
  endtime: getDefaultDate()
};

const countdownSlice = createSlice({
  name: 'countdown',
  initialState,
  reducers: {
    updateFormField(state, action: PayloadAction<{ field: keyof CountdownState; value: string }>) {
        state[action.payload.field] = action.payload.value;
      },
  },
});

function formatDate(date: Date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
  
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }

function getDefaultDate() {
    const today = new Date();
    const nextWeek = new Date(today);
    nextWeek.setDate(today.getDate() + 7);
    return formatDate(nextWeek);
}

export const { updateFormField } = countdownSlice.actions;
export default countdownSlice.reducer;