import React from 'react';
import Banner from "Components/Banner";
import {NavLink} from "react-router-dom";
import PhotoForm from "../../Components/PhotoForm";
import './style.scss';
import {useAppDispatch, useAppSelector} from "../../../../App/hooks";
import {addPhoto, updatePhoto} from 'Features/Photo/photoSlice'
import {useHistory, useParams} from 'react-router-dom';
import { randomNumber } from 'utils/commom';

interface MyFormValues {
    id: number,
    title: string,
    categoryId: number,
    photo: string,
}


const AddEdit:React.FC = ():React.ReactElement => {

    const dispatch = useAppDispatch();
    const history = useHistory();
    const {photoId}: {photoId:string} = useParams();

    const isAddMode = !photoId;

    const editedPhoto: MyFormValues | undefined = useAppSelector(state=>state.photos.value.find(
        (photo)=>(photo.id===parseInt(photoId))
    ));


    const initialValue= isAddMode?
        {
            id: 0,
            title : '',
            categoryId: 0,
            photo : ''
        } :
        editedPhoto

    ;

    const onSubmit = (values: MyFormValues) => {
        return new Promise(
            resolve => {
                setTimeout(
                    ()=>{
                        if(isAddMode){
                            const newPhoto = {
                                ...values,
                                id: randomNumber(10000, 99999),
                            }
                            const action = addPhoto(newPhoto);
                            dispatch(action);
                        }else{
                            const action = updatePhoto(values);
                            dispatch(action);
                        }
                        history.push('/photos');
                        resolve(true);
                    },1500
                );
            }
        );
    };

    return (
        <div className='photo-edit'>
            <Banner title='Your Awesome Photo'/>

            <NavLink to='/photos'>
                Back to photos
            </NavLink>
            <div className='photo-edit__form'>
                <PhotoForm
                    isAddMode={isAddMode}
                    initialValue={initialValue}
                    onSubmit={onSubmit}
                />
            </div>
        </div>
    );
};

export default AddEdit;