import React from 'react';
import {
    Formik,
    Form,
    FastField, FormikHelpers,
} from 'formik';

import InputField from "custom-fields/InputField";
import SelectField from "custom-fields/SelectField";
import RandomPhotoField from "custom-fields/RandomPhotoField";
import {Button, FormGroup, Spinner} from "reactstrap";
import * as Yup from 'yup';

interface PhotoFormProps{
    isAddMode: Boolean,
    initialValue: MyFormValues | undefined,
    onSubmit: ((values: MyFormValues, formikHelpers: FormikHelpers<MyFormValues>) => void | Promise<any>) | null
}

interface MyFormValues {
    id: number,
    title: string,
    categoryId: number,
    photo: string,
}

export const defaultProps: PhotoFormProps = {
    isAddMode: false,
    initialValue: {
        id: 0,
        title : '',
        categoryId: 0,
        photo : ''
    },
    onSubmit: null,
}

const PhotoForm:React.FC<PhotoFormProps> = (props):React.ReactElement => {

    const {
        isAddMode,
        initialValue,
        onSubmit
    } = props;

    const validationSchema = Yup.object().shape({
        title: Yup.string().required('This field is required'),

        categoryId: Yup.number().required('This field is required').nullable(),

        photo: Yup.string().required('This field is required'),
    });

    const defaultSubmit = ()=>{
        console.log('No on submit function');
    }

    return (
        <Formik
            initialValues={initialValue ? initialValue : {
                id: 0,
                title : '',
                categoryId: 0,
                photo : ''
            }}
            validationSchema={validationSchema}
            onSubmit={onSubmit? onSubmit : defaultSubmit}
        >
            {(formikProps)=>{

                const {
                    // values, errors, touched,
                    isSubmitting
                } = formikProps;

                return(
                    <Form>
                        <FastField
                            name="title"
                            component={InputField}

                            label='Title'
                            placeholder='Input title here'
                        />
                        <FastField
                            name='categoryId'
                            component={SelectField}
                            label='Category'

                            options={[
                                {value: 1, label: 'Technology'},
                                {value: 2, label: 'Education'}
                            ]}
                        />

                        <FastField
                            name='photo'
                            component={RandomPhotoField}
                            label='Random Photo'
                        />
                        <FormGroup>
                            <Button type='submit' color={isAddMode? 'primary' : 'secondary'}>
                                {isSubmitting && <Spinner size='sm'/>}
                                &nbsp;
                                {isAddMode? 'Add New Photo' : 'Change Photo'}
                            </Button>
                        </FormGroup>
                    </Form>
                )
            }}
        </Formik>
    )
}

PhotoForm.defaultProps = defaultProps;

export default PhotoForm;
