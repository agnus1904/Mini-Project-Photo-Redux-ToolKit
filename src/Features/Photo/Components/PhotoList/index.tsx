import React from 'react';
import { Row, Col } from 'reactstrap';
import PhotoCard from '../PhotoCard';

interface PhotoListProps{
    photoList: Array<any>,
    onPhotoEditClick: Function | null,
    onPhotoRemoveClick: Function | null,
}

const defaultProps: PhotoListProps = {
    photoList: [],
    onPhotoEditClick: null,
    onPhotoRemoveClick: null,
}

const PhotoList: React.FC<PhotoListProps> = (props)=>{
    const {
        photoList,
        onPhotoEditClick,
        onPhotoRemoveClick
    } = props;

    return (
        <Row>
            {photoList.map((photo,index) => (
                <Col key={photo.title+ index} xs="12" md="6" lg="3">
                    <PhotoCard
                        photo={photo}
                        onEditClick={onPhotoEditClick}
                        onRemoveClick={onPhotoRemoveClick}
                    />
                </Col>
            ))}
        </Row>
    );
}

PhotoList.defaultProps = defaultProps;

export default PhotoList;