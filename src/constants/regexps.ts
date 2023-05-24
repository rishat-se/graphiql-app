// Minimum eight characters, at least one letter, one number and one special character:
export const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
// Validate email address
export const emailPattern = /^\S+@\S+\.\S+$/;
