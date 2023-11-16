//ok
export const required = value => {
    if (value) return undefined;
    return "Field is required";
}

//error
export const maxLengthCreator = (maxLength = 20) => value => {
    if (value) {
        if (value.length > maxLength) return `Max length is ${maxLength} symbols`;
        return undefined;
    }
    return "Field is required";
}

//ok
export const containsDigitsValidator = (maxLength = 20) => (value='') => {
    if (value) {
        if (value.length < 3) return `Min length is 3 symbols`;
        if (/^\d*$/.test(value)) {
            if (value.length > maxLength) return `Max length is ${maxLength} symbols`
            return undefined;
        } else return 'Numbers must be entered';
    }
    return "Field is required";
};