import {createSlice} from "@reduxjs/toolkit";

interface state{
    value: {
        id: number,
        title: string,
        categoryId: number,
        photo: string
    }[],
}

const initialState: state ={
    value: []
}

const photoSlice = createSlice({
        name: 'photo',
        initialState: initialState,
        reducers:{
            addPhoto: (state,action) =>{
                state.value.push(action.payload);
            },
            removePhoto : (state, action)=>{
                state.value = state.value.filter(
                    (photo: any)=> photo.id!==action.payload
                );
            },
            updatePhoto : (state, action) =>{
                const index = state.value.findIndex(
                    photo=>(photo.id===action.payload.id)
                )
                state.value[index]=action.payload;
            }
        }
});


export const { addPhoto, removePhoto, updatePhoto } = photoSlice.actions

export default photoSlice.reducer

