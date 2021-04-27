import React, {PropsWithChildren} from 'react';
import {FormGroup, Input, Label, FormFeedback} from "reactstrap";
import {ErrorMessage} from "formik";

interface InputFieldProps {
    field: any,
    form: any,

    type?: string,
    label?: string,
    placeholder?: string,
    disabled?: boolean,
}

const defaultProps: InputFieldProps = {
    field: {},
    form: {},

    type: 'text',
    label: '',
    placeholder: '',
    disabled: false,
}

const InputField:React.FC<InputFieldProps> =
    (
        props: PropsWithChildren<InputFieldProps>
    ):React.ReactElement => {

    const {
        field, form,
        type, label, placeholder, disabled
    } = props;

    const {name} = field;
    const {errors, touched} = form;
    const showErrors= errors[name] && touched[name];


    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}
            <Input
                id={name}
                {...field}
                type={type}
                disabled={disabled}
                placeholder={placeholder}
                invalid={showErrors}
            />
            <ErrorMessage name={name} component={FormFeedback} />
        </FormGroup>
    );
};

InputField.defaultProps = defaultProps;

export default InputField;