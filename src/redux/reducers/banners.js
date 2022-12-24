import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../utils/axios";


export const getBanners = createAsyncThunk(
    'banners/getBanners',
    async (filter, {rejectWithValue}) => {
        try {
            const res = await axios(`/banners?${filter?.branch ? 'branch=' + filter.branch + '&' : ''}`)
            if (res.statusText !== 'OK') {
                throw new Error('Server error !')
            }
            return res.data
        } catch (err) {
            return  rejectWithValue(err.message)
        }
    }
)

const usersSlice = createSlice({
    name: 'banners',
    initialState: {
        data: [],
        status: '',
        error: ''
    },
    reducers: {

    },
    extraReducers: {
        [getBanners.pending] : (state,action) => {
            state.status = 'loading'
            state.error = ''
        },
        [getBanners.rejected] : (state,action) => {
            state.status = 'error'
            state.error = action.payload
        },
        [getBanners.fulfilled] : (state,action) => {
            state.status = 'resolve'
            state.error = ''
            state.data = action.payload
        }
    }
})

export const {changeBranch} = usersSlice.actions
export default usersSlice.reducer