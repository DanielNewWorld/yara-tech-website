//ok
export const required = value => {
    if (value) return undefined;
    return "Field is required";
}

//error
export const maxLengthCreator = (maxLength) => value => {
    if (value && value.length > maxLength) return undefined;
    return `Max length is ${maxLength} symbols`;
}

export const containsDigitsValidator = value => {
    if (/^\d*$/.test(value)) {
        return undefined;
    }
    return 'Numbers must be entered';
};