import {useState} from "react";

export const useForm = (inicialState = {}) => {
  
    const [values, setValues] = useState(inicialState);

    const reset = () => {
        setValues (inicialState);
    }

    const handleInputChange = (e) => {
        setValues({
        ...values,
        [e.target.name]: e.target.value,
        });
    };

    return [values, handleInputChange, reset]
};
