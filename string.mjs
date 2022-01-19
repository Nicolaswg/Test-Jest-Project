const stringLength = (str) => {
    if(str.length >0 && str.length <= 10) {
        return str.length;
    } else {
        throw new Error(`Invalid string length: ${str.length} String have to between 1 and 10`);
    }
}

const reverseString = (str) => {
    return str.split('').reverse().join('')
}

const capitalizeString = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export {stringLength, reverseString, capitalizeString, };