import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

type counterState = {
    value: number
}

const initialState : counterState = {
    value: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        reset: () => {
            return initialState
        }
    },

    extraReducers : (builder) => {
        builder.addCase(incrementAsync.pending, () => {
            console.log('pending');
        }).addCase(incrementAsync.fulfilled, (state, action) => {
            state.value += action.payload;
        });
    }
    
})

export const incrementAsync = createAsyncThunk(
    'counter/incrementAsync',
    async (amount : number) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return amount;
    }
)

export const {increment, decrement, reset} = counterSlice.actions;
export default counterSlice.reducer;