import React, {FocusEventHandler} from 'react';
import { Button } from "reactstrap";
import './style.scss';

interface RandomPhotoProps {
    name?: string,
    imageUrl?: string,
    className?: string,
    onImageUrlChange?: Function | null,
    onRandomButtonBlur?: FocusEventHandler<HTMLButtonElement>,
}

const defaultProps: RandomPhotoProps  = {
    name: '',
    imageUrl: '',
    className: '',
    onImageUrlChange: null,
    onRandomButtonBlur: undefined,
}

const getRandomImageUrl = ()=>{
    const randomId: number = Math.trunc(Math.random() * 500);
    return `https://picsum.photos/id/${randomId}/300/300`;
}

const RandomPhoto:React.FC<RandomPhotoProps> =
    (
        props
    ):React.ReactElement => {

        const {
            name,
            imageUrl,
            className,
            onImageUrlChange,
            onRandomButtonBlur
        } = props;

        const handleRandomPhotoClick = async ()=>{
            if(onImageUrlChange){
                const randomImageUrl = getRandomImageUrl();
                onImageUrlChange(randomImageUrl);
            }
        }

        return (
            <div className={`random-photo ${className}`}>
                <div className='random-photo__button'>
                    <Button
                        outline
                        name={name}
                        color='primary'
                        onBlur={
                            onRandomButtonBlur
                        }
                        onClick={handleRandomPhotoClick}
                    >
                        Random A Photo
                    </Button>
                </div>
                <div className='random-photo__photo'>
                    {imageUrl &&
                        <img
                            src={imageUrl}
                            alt='..Error'
                            onError={handleRandomPhotoClick}
                        />
                    }
                </div>
            </div>
        );
    };

RandomPhoto.defaultProps = defaultProps;

export default RandomPhoto;