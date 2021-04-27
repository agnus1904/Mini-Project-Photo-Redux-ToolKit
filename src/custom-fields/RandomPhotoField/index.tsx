import React from 'react';
import {FormFeedback, FormGroup, Label} from "reactstrap";
import RandomPhoto from "../../Components/RandomPhoto";
import {ErrorMessage} from "formik";

interface RandomPhotoFieldProps {
    form: any,
    field : any,
    label?: string
}

const defaultProps: RandomPhotoFieldProps = {
    form: {},
    field: {},
    label: ''
}

const RandomPhotoField:React.FC<RandomPhotoFieldProps> =
    (
        props
    ):React.ReactElement => {

    const {
        form, field,
        label
    } = props;

    const {
        name, value, onBlur
    } = field;

    const {errors, touched} = form;
    const showErrors= errors[name] && touched[name];

    const handleImageUrlChange = (newImageUrl: string)=>{
        form.setFieldValue(name, newImageUrl);
    }

    return (
        <FormGroup>
            {label &&  <Label for={name}>{label}</Label>}

            <RandomPhoto
                name={name}
                imageUrl={value}
                onImageUrlChange={handleImageUrlChange}
                onRandomButtonBlur={onBlur}
                className={showErrors? 'is-invalid' : ''}
            />
            <ErrorMessage name={name} component={FormFeedback} />
        </FormGroup>
    );
};

RandomPhotoField.defaultProps = defaultProps;

export default RandomPhotoField;