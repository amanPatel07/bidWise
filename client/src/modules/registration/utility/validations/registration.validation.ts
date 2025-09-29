import { boolean, date, object, ref, string } from "yup";

const VALIDATION = {
    FIRST_NAME: {
        REQUIRED_MESSAGE: 'Please enter First Name.',
        MAX_LENGTH: 50,
        MAX_LENGTH_MESSAGE: 'The maximum length of First Name is 50 characters.',
        MATCH: /^[A-Za-z'-]+$/,
        MATCH_MESSAGE: 'The First Name must contain only letters, hyphens, and apostrophes.'
    },
    LAST_NAME: {
        REQUIRED_MESSAGE: 'Please enter Last Name.',
        MAX_LENGTH: 50,
        MAX_LENGTH_MESSAGE: 'The maximum length of Last Name is 50 characters.',
        MATCH: /^[A-Za-z'-]+$/,
        MATCH_MESSAGE: 'The First Name must contain only letters, hyphens, and apostrophes.',
    },
    EMAIL: {
        REQUIRED_MESSAGE: 'Please enter Email.',
        MATCH_MESSAGE: 'Please enter valid email address.',
        MATCH: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    },
    DATE_OF_BIRTH: {
        REQUIRED_MESSAGE: 'Please enter Date of Birth.'
    },
    PASSWORD: {
        REQUIRED_MESSAGE: 'Please enter the password',
        MIN_LENGTH: 6,
        MIN_MESSAGE: 'Password must have at least 6 characters'
    },
    CONFIRM_PASSWORD: {
        REQUIRED_MESSAGE: 'Please re-enter the password',
        MATCH_MESSAGE: 'Passwords must match'
    },
    GENDER: {
        REQUIRED_MESSAGE: 'Please select gender.'
    },
    TOC: {
        REQUIRED_MESSAGE: 'Accept terms and conditions.'
    }
}

export const registrationFormValidationSchema = object().shape({
    firstName: string()
        .required(VALIDATION.FIRST_NAME.REQUIRED_MESSAGE)
        .max(VALIDATION.FIRST_NAME.MAX_LENGTH, VALIDATION.FIRST_NAME.MAX_LENGTH_MESSAGE)
        .matches(VALIDATION.FIRST_NAME.MATCH, VALIDATION.FIRST_NAME.MATCH_MESSAGE)
        .trim(),
    lastName: string()
        .required(VALIDATION.LAST_NAME.REQUIRED_MESSAGE)
        .max(VALIDATION.LAST_NAME.MAX_LENGTH, VALIDATION.LAST_NAME.MAX_LENGTH_MESSAGE)
        .matches(VALIDATION.LAST_NAME.MATCH, VALIDATION.LAST_NAME.MATCH_MESSAGE)
        .trim(),
    email: string()
        .required(VALIDATION.EMAIL.REQUIRED_MESSAGE)
        .matches(VALIDATION.EMAIL.MATCH, VALIDATION.EMAIL.MATCH_MESSAGE)
        .trim(),
    dateOfBirth: date()
        .required(VALIDATION.DATE_OF_BIRTH.REQUIRED_MESSAGE),
    notification: boolean().nullable(),
    password: string()
        .required(VALIDATION.PASSWORD.REQUIRED_MESSAGE)
        .min(VALIDATION.PASSWORD.MIN_LENGTH, VALIDATION.PASSWORD.MIN_MESSAGE)
        .trim(),
    confirmPassword: string()
        .required(VALIDATION.CONFIRM_PASSWORD.REQUIRED_MESSAGE)
        .oneOf([ref("password")], VALIDATION.CONFIRM_PASSWORD.MATCH_MESSAGE)
        .trim(),
    gender: string()
        .required(VALIDATION.GENDER.REQUIRED_MESSAGE)
        .trim(),
    toc: boolean()
        .required(VALIDATION.TOC.REQUIRED_MESSAGE)
        .oneOf([true], VALIDATION.TOC.REQUIRED_MESSAGE)
});