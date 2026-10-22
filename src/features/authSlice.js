import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  status: 'uninitialized',
  todos: [],
  error: null,
  loading: null,
}



export const userData = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    // any additional "normal" case reducers here.
    // these will generate new action creators
  },
  extraReducers: builder => {
    // Use `extraReducers` to handle actions that were generated
    // _outside_ of the slice, such as thunks or in other slices
    builder
      
  }
})

export default userData.reducer