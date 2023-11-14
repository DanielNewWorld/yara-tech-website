export const required = value => {
    if (value) return undefined;
    return "Field is required";
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value && value.length > maxLength) return `Max length is ${maxLength} symbols`;
    return undefined;
}

export const containsDigitsValidator = value => {
    if (/^\d*$/.test(value)) {
        return undefined;
    }
    return 'Numbers must be entered';
};