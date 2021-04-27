import React, {PropsWithChildren} from 'react';

import Select from 'react-select';
import {FormFeedback, FormGroup, Label} from "reactstrap";
import {ErrorMessage} from "formik";

interface SelectFieldProps{
    field: any,
    form: any,
    options: Array<any>,

    label?: string,
    placeholder?: string,
    disabled?: boolean,
}

const defaultProps: SelectFieldProps= {
    field: {},
    form: {},
    options: [],

    label: '',
    placeholder:'',
    disabled: false,
}


const SelectField:React.FC<SelectFieldProps> =
    (
        props: PropsWithChildren<SelectFieldProps>
    ):React.ReactElement => {

        const {
            field, form, options,
            label, placeholder, disabled
        } = props;

        const {name, value} = field;
        const {errors, touched} = form;
        const showErrors= errors[name] && touched[name];

        const selectedOption = options.find(option => option.value===value);

        const handleSelectOptionChange = (selectedOption: any)=>{
            const selectedValue = selectedOption? selectedOption.value : selectedOption;

            const changeEvent = {
                target: {
                    name: name,
                    value: selectedValue
                }
            };
            field.onChange(changeEvent);
        }

        return (
            <FormGroup>
                {label && <Label for={name}>{label}</Label>}
                <Select
                    id={name}
                    {...field}
                    value={selectedOption}
                    onChange={handleSelectOptionChange}

                    isDisabled={disabled}
                    placeholder={placeholder}
                    options={options}
                    className={showErrors? 'is-invalid' : ''}
                />
                <ErrorMessage name={name} component={FormFeedback} />
            </FormGroup>
        );
};

SelectField.defaultProps = defaultProps;


export default SelectField;