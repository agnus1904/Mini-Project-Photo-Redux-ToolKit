import React from 'react';
import { Button } from 'reactstrap';
import './style.scss';

interface PhotoProps {
    photo: any,
    onEditClick: Function | null,
    onRemoveClick: Function | null,
}

const defaultProps: PhotoProps = {
    photo: [],
    onEditClick: null,
    onRemoveClick: null,
}

const PhotoCard:React.FC<PhotoProps> = (props)=>{

    const {
        photo, onEditClick, onRemoveClick
    } = props;

    const handleEditClick = () => {
        if (onEditClick) onEditClick(photo);
    }

    const handleRemoveClick = () => {
        if (onRemoveClick) onRemoveClick(photo);
    }

    return (
        <div className="photo">
            <img src={photo.photo} alt={photo.title} />

            <div className="photo__overlay">
                <h3 className="photo__title">{photo.title}</h3>

                <div className="photo__actions">
                    <div>
                        <Button outline size="sm" color="light" onClick={handleEditClick}>
                            Edit
                        </Button>
                    </div>

                    <div>
                        <Button outline size="sm" color="danger" onClick={handleRemoveClick}>
                            Remove
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

PhotoCard.defaultProps = defaultProps;

export default PhotoCard;