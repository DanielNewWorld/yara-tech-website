//ok
export const required = value => {
    if (value) return undefined;
    return "Field is required";
}

//error
export const maxLengthCreator = (maxLength = 20) => value => {
    if (value.length > maxLength) return `Max length is ${maxLength} symbols`;
    if (value.length < 3) return `Min length is 3 symbols`;
    return undefined;
}

//ok
export const containsDigitsValidator = value => {
    if (/^\d*$/.test(value)) return undefined;
    return 'Numbers must be entered';
};