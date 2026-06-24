import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Slices/counterSlice'
export const store = configureStore({
    reducer: {
        counter: counterReducer
    },
    devTools: import.meta.env.MODE !== 'production'
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// store.getState is a function that returns the entire Redux state tree.
// ReturnType<...> is a TypeScript utility that extracts the return type of a function.
// So RootState is the TypeScript type of your entire Redux state — it automatically reflects all slices you add to the store.
// Why you need it: When you use useSelector in components, you need to type the state parameter so TypeScript knows what shape it has:
// const count = useSelector((state: RootState) => state.counter.value);


// store.dispatch is the Redux dispatch function.
// typeof store.dispatch captures its exact type, including knowledge of all thunk middleware.
// Why you need it: The default Dispatch type from React-Redux doesn't know about async thunks. AppDispatch does. You use it with useDispatch:

// const dispatch = useDispatch<AppDispatch>();
// await dispatch(someAsyncThunk()); // ✅ TypeScript understands this
