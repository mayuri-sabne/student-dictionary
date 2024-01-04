import validator from 'validator';

const nameValidation = (textName)=>{
    return (validator.isEmpty(textName) || !validator.isLength(textName,{min:2 , max:30}))?false:true;
}
const passwordValidation = (textPass)=>{
    return (validator.isEmpty(textPass) || !validator.isStrongPassword(textPass,{ minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1}) || !validator.isLength(textPass,{min:4}))?false:true;
}
const compareStringValidation = (textPass,textCpass)=>{
    return (validator.equals(textPass,textCpass))?true:false;
}
const typeValidation = (texttype)=>{
    return (validator.isEmpty(texttype) || !validator.isLength(texttype,{min:0 , max:1}))?false:true;
}
export {
    nameValidation,
    passwordValidation,
    compareStringValidation,
    typeValidation
}