import React from 'react';
import {NavLink, useHistory} from "react-router-dom";
import images from 'contants/images';
import Banner from 'Components/Banner';
import {useAppDispatch, useAppSelector} from "App/hooks";
import PhotoList from "../../Components/PhotoList";
import {removePhoto} from '../../photoSlice';

const MainPage:React.FC = ():React.ReactElement => {

    const photos = useAppSelector(
        (state)=>state.photos.value
    );
    const dispatch = useAppDispatch();
    const history = useHistory();

    const handlePhotoEditClick = (photo: any)=>{
        console.log(photo);
        history.push(`photos/${photo.id}`)
    }

    const handlePhotoRemoveClick = (photo: any)=>{
        const removePhotoId = photo.id;
        const action = removePhoto(removePhotoId);
        dispatch(action);
    }
    return (
        <div className='main-photo'>
            <Banner title='Your Awesome Photo' backgroundUrl={images.PINK_BG}/>
            <NavLink to='/photos/add'>
                Add a new photo
            </NavLink>

            <PhotoList
                photoList={photos}
                onPhotoEditClick={handlePhotoEditClick}
                onPhotoRemoveClick={handlePhotoRemoveClick}
            />
        </div>
    );
};

export default MainPage;