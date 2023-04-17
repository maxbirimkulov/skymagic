import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../utils/axios";


export const getGallery = createAsyncThunk(
    'gallery/getGallery',
    async (filter, {rejectWithValue}) => {
        try {
            const res = await axios(`/gallery?${filter?.branch ? 'branch=' + filter.branch + '&' : ''}`)
            if (res.statusText !== 'OK' && res.status !== 200) {
                throw new Error('Server error !')
            }
            return res.data
        } catch (err) {
            return  rejectWithValue(err.message)
        }
    }
)

const gallerySlice = createSlice({
    name: 'gallery',
    initialState: {
        data: [],
        status: '',
        error: ''
    },
    reducers: {
        changeBranch : (state, action) => {
            state.filter = {
                ...state.filter,
                branch: action.payload
            }
        }
    },
    extraReducers: {
        [getGallery.pending] : (state,action) => {
            state.status = 'loading'
            state.error = ''
        },
        [getGallery.rejected] : (state,action) => {
            state.status = 'error'
            state.error = action.payload
        },
        [getGallery.fulfilled] : (state,action) => {
            state.status = 'resolve'
            state.error = ''
            state.data = action.payload
        }
    }
})

export const {changeBranch} = gallerySlice.actions
export default gallerySlice.reducer