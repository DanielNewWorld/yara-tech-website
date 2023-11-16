//ok
export const required = value => {
    if (value) return undefined;
    return "Field is required";
}

//error
export const maxLengthCreator = (maxLength = 20) => value => {
    if (!value) return "Field is required";
    if (value.length > maxLength) return `Max length is ${maxLength} symbols`;
    return undefined;
}

//ok
export const containsDigitsValidator = (maxLength = 20) => value => {
    if (!value) return "Field is required";
    if (/^\d*$/.test(value)) {
        if (value.length > maxLength) return `Max length is ${maxLength} symbols`
        return undefined;
    } else return 'Numbers must be entered';
};