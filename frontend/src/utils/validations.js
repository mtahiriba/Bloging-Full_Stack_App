const validateLoginForm = (values) => {
    const errors = {};
    if (!values.email) {
        errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email is invalid";
    }
    
    if (!values.password) {
        errors.password = "Password is required";
    } else if (values.password.length < 8) {
        errors.password = "Password must be 8 characters or more";
    }
    
    return errors;
}

const validateSignupForm = (values) => {
    const errors = {};
    if (!values.name) {
        errors.name = "Name is required";
    }
    
    if (!values.phone) {
        errors.phone = "Phone is required";
    } else if (values.phone.length < 10) {
        errors.phone = "Phone must be 10 digits";
    }
    
    if (!values.email) {
        errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email is invalid";
    }
    
    if (!values.password) {
        errors.password = "Password is required";
    } else if (values.password.length < 8) {
        errors.password = "Password must be 8 characters or more";
    }
    
    if (!values.retypePassword) {
        errors.retypePassword = "Retype Password is required";
    } else if (values.password !== values.retypePassword) {
        errors.retypePassword = "Passwords do not match";
    }
    
    return errors;
}

const validateBlogForm = (values) => {
    const errors = {};
    if (!values.title) {
        errors.title = "Title is required";
    }
    
    if (!values.description) {
        errors.description = "Description is required";
    }
    
    return errors;
};

export { validateLoginForm, validateSignupForm, validateBlogForm };