//ok
export const required = value => {
    if (value) return undefined;
    return "Field is required";
}

//error
export const maxLengthCreator = (maxLength = 20) => (value) => {
    if (value && value.length > maxLength) return `Max length is ${maxLength} symbols`;
    if (value && value.length < 1) return `Min length is 1 symbols`;
    return undefined;
}

//ok
export const containsDigitsValidator = value => {
    if (/^\d*$/.test(value)) return undefined;
    return 'Numbers must be entered';
};