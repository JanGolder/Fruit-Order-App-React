import {useState} from 'react';

const useInput = (validateValue)=>{

    const [inputValue, setInputValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const isValid = validateValue(inputValue);
    const hasError = !isValid && isTouched;

    const inputBlurHandler = ()=>{
        setIsTouched(true);
    };

    const valueChangeHandler = (e)=>{
        setInputValue(e.target.value);
    };

    const reset = ()=>{
        setInputValue('');
        setIsTouched(false);
    };

    return {
        inputValue,
        isValid,
        hasError,
        inputBlurHandler,
        valueChangeHandler,
        reset
    };

}

export default useInput;